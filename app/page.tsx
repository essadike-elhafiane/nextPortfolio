"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import toast, { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import About from "./components/aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Name from "./components/Name";
import "@/app/circle.css";
import LinksComponenT from "./components/Nav";
import Skills from "./components/Skills";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showSocials, setShowSocials] = useState(false);
  const [sectionSelected, setSectionSelected] = useState<string>("Home");
  const [res, setRes] = useState(false);

  // Refs for each section
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const sectionRefs = {
    Home: homeRef,
    About: aboutRef,
    Projects: projectsRef,
    Skills: skillsRef,
    Contact: contactRef,
  };

  // Optimized smooth scroll with snap support
  const scrollToSection = useCallback((sectionName: string) => {
    const sectionRef = sectionRefs[sectionName as keyof typeof sectionRefs];
    if (sectionRef.current) {
      // Scroll directly to section top for snap effect
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const sections = ["Home", "About", "Projects", "Skills", "Contact"];
      const currentIndex = sections.indexOf(sectionSelected);
      
      if (e.key === 'Home') {
        e.preventDefault();
        scrollToSection('Home');
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSection('Contact');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [sectionSelected, scrollToSection]);

  // Improved section detection with better accuracy
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const mainElement = document.querySelector('main');
          if (!mainElement) {
            ticking = false;
            return;
          }

          const sections = document.querySelectorAll('section');
          let currentSection = 'Home';
          let minDistance = Infinity;

          sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const sectionMiddle = rect.top + rect.height / 2;
            const viewportMiddle = window.innerHeight / 2;
            const distance = Math.abs(sectionMiddle - viewportMiddle);

            // Find the section closest to viewport center
            if (distance < minDistance) {
              minDistance = distance;
              currentSection = section.id;
            }
          });

          setSectionSelected(currentSection);
          ticking = false;
        });
        ticking = true;
      }
    };

    const mainElement = document.querySelector('main');
    if (mainElement) {
      handleScroll(); // Initial call
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const current = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setShowSocials(false);
      } else {
        setShowSocials(true);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!res) {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      return;
    }

    const ease = 0.14;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * ease;
      current.current.y += (target.current.y - current.current.y) * ease;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [res]);

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard("saddik.bo@gmail.com")
      .then(() => {
        if (isCopied) return;
        setIsCopied(true);
        toast.success("Email copied to clipboard");
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1100) {
        setRes(false);
      } else {
        setRes(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Enhanced section transition variants with optimized performance
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // Faster, smoother easing
      }
    },
    exit: { 
      opacity: 0, 
      y: -15,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  return (
    <main className="w-full h-screen overflow-y-auto overflow-x-hidden bgColor">
      <LinksComponenT 
        sectionSelected={sectionSelected}
        onSectionClick={scrollToSection}
      />
      
      {res && (
        <motion.div 
          ref={cursorRef} 
          className="tracking-effect z-[0]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
        />
      )}
      
      <Toaster
        position="top-center"
        containerStyle={{
          backgroundColor: "transparent",
          fontSize: "12px",
          padding: "1px",
          marginTop: "40px",
        }}
      />

      {/* Home Section */}
      <motion.section
        ref={homeRef}
        id="Home"
        className="min-h-screen w-full flex flex-col gap-8 justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Name />
      </motion.section>

      {/* About Section */}
      <motion.section
        ref={aboutRef}
        id="About"
        className="w-full min-h-screen flex justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="z-[10] w-full flex flex-col justify-center items-center p-2">
          <motion.div 
            className="mb-8 flex items-center gap-2 z-10 w-[80%] max-w-[500px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="TextSpecialColor text-[20px]">01.</h1>
            <span className="FontMon p-4 text-[20px] min-w-[130px]">About me</span>
            <hr className="w-full border-[#233554]" />
          </motion.div>
          <About />
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        ref={projectsRef}
        id="Projects"
        className="w-full min-h-screen flex flex-col justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="mb-8 flex items-center gap-2 z-10 w-[80%] max-w-[800px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="TextSpecialColor text-[20px]">02.</h1>
          <span className="FontMon p-4 text-[20px]">Projects</span>
          <hr className="w-full border-[#233554]" />
        </motion.div>
        <Project scroll={res} />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        id="Skills"
        className="w-full min-h-screen flex flex-col justify-center items-center TextColor"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div 
          className="mb-8 flex items-center gap-2 z-10 w-[80%] max-w-[800px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h1 className="TextSpecialColor text-[20px]">03.</h1>
          <span className="FontMon p-4 text-[20px] text-white">Skills</span>
          <hr className="w-full border-[#233554]" />
        </motion.div>
        <Skills scroll={res} />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        ref={contactRef}
        id="Contact"
        className="relative min-h-screen flex flex-col justify-center items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[700px] w-[80%] flex flex-col items-center flex-1 justify-center">
          <motion.div 
            className="mb-8 flex items-center gap-2 z-10 w-[80%] max-w-[800px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h1 className="TextSpecialColor text-[20px]">04.</h1>
            <span className="FontMon p-4 text-[20px] text-white">Contact</span>
            <hr className="w-full border-[#233554]" />
          </motion.div>
          <Contact />
        </div>

        <motion.footer 
          className="FontMon w-[80vw] max-w-[700px] p-10 TextColor mt-auto pb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            Designed and coded by me. Built with{" "}
            <a
              className="TextNormalColor cool-link"
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              className="TextNormalColor cool-link"
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind CSS
            </a>
            , and deployed on{" "}
            <a
              className="TextNormalColor cool-link"
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </a>
            . © 2024 Essadike Elhafiane.
          </p>
        </motion.footer>
      </motion.section>
    </main>
  );
}
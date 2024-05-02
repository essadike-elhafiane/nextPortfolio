"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import About from "./components/aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Name from "./components/Name";
import "@/app/circle.css";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { FaBars } from "react-icons/fa";
import LinksComponent from "./components/Nav";

// function throttle(func: Function, limit: number) {
//   let inThrottle: boolean;
//   return function (this: any) {
//     const args = arguments;
//     const context = this;
//     if (!inThrottle) {
//       func.apply(context, args);
//       inThrottle = true;
//       setTimeout(() => (inThrottle = false), limit);
//     }
//   };
// }

const applyAnimation = () => {
  const elements = document.querySelectorAll('.slide-inN');
  console.log(elements);
  elements.forEach((el, index) => {
    const element = el as HTMLElement; // Type assertion

    setTimeout(() => {
      element.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
      element.style.transform = 'translateX(0)';
      element.style.opacity = '1';
    }, index * 0); // 300ms stagger delay
  });
};

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showSocials, setShowSocials] = useState(true);
  const [navLinks, setNavLinks] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
   if (!showSocials) {
    return () => {
        setPosition({ x: -50, y: -50 });
    }}

    const setFromEvent = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    // const throttledSetFromEvent = throttle(setFromEvent, 100); // Updates position at most every 100 milliseconds

    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, [showSocials]);

  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  useEffect(() => {
    applyAnimation(); // Apply the staggered animation delay
}, []);
  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard("saddik.bo@gmail.com")
      .then(() => {
        // If successful, update the isCopied state value
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
    const sections = Array.from(document.querySelectorAll("section"));
    let currentSectionIndex = 0;
    let isScrolling = false;

    const handleScroll = (event: WheelEvent) => {
      event.preventDefault();

      if (isScrolling) return; // Block scrolling if a scroll animation is in progress

      const delta = event.deltaY;

      if (delta > 0 && currentSectionIndex < sections.length - 1) {
        currentSectionIndex++;
      } else if (delta < 0 && currentSectionIndex > 0) {
        currentSectionIndex--;
      }

      isScrolling = true;

      sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false; // Allow scrolling again after 500ms
      }, 500);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const [scope, animate] = useAnimate();
 

  useEffect(() => {
    animate(
      scope.current.children,
      {
        y: [-10, 0], // Move from 50px down to its original position
        opacity: [0, 1],
      },
      {
        duration: 0.8,
        delay: stagger(0.3), // Stagger by 0.3 seconds
        ease: "easeInOut",
      }
    );
   
    
    
    if (window.innerWidth < 1392) {
      setShowSocials(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1392) {
        setShowSocials(false);
      } else {
        setShowSocials(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1392) {
          setShowSocials(false);
        } else {
          setShowSocials(true);
        }
      });
    };
  }, [scope, animate]);

  return (
    <main className=" min-w-screen flex-col bgColor">
      <nav className={`z-10 absolute w-[100vw] flex justify-between p-4 items-center h-[60px] md-h-[95px] navBarContainer ${navLinks && !showSocials? 'bg-[var(--bg-color)]': ''}`}>
        <Image
          priority
          className={`cursor-pointer ${
            showSocials ? "w-[100px] h-[100px]" : "w-[50px] h-[50px]"
          } `}
          src="./ES.svg"
          alt="Picture of the author"
          width={100}
          height={100}
        />
        {showSocials ? (
          <div className="flex items-center gap-4" ref={scope}>
            <a href="#Home" className="text-sm font-medium ">
              Home
            </a>
            <a href="#About" className="text-sm font-medium">
              About
            </a>
            <a href="#Services" className="text-sm font-medium">
              Services
            </a>
            <a href="#Projects" className="text-sm font-medium">
              Projects
            </a>
            <a href="#Contact" className="text-sm font-medium">
              Contact
            </a>
          </div>
        ) : (
          <>
          <FaBars className="w-[25px] h-[25px] " onClick={()=>setNavLinks(!navLinks)} />
          {navLinks &&  <LinksComponent />}
          </>
        )}
      </nav>
      <div
        className="tracking-effect z-[0]"
        style={{ left: `${position.x - 20}px`, top: `${position.y - 20}px` }}
      ></div>

      <Toaster
        position="top-center"
        containerStyle={{
          backgroundColor: "transparent",
          fontSize: "12px",
          padding: "1px",
          marginTop: "40px",
        }}
      />
      <div
        ref={containerRef}
        className="min-w-screen h-[100vh] overflow-scroll z-[1] overflow-x-hidden scroll-smooth flex justify-center "
      >
        {showSocials && (
          <div className=" z-[10] absolute bottom-8 left-20">
            <div className="flex gap-4 w-[300px]  TextColor">
              <hr className="p-1 w-[30px]  ml-[-40px] mt-[13px]" />
              <SlSocialLinkedin className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
              <SlSocialTwitter className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
              <FaFacebook className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
              <SlSocialInstagram className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
              <FaGithub className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
            </div>
            <div className="flex gap-4 w-[300px] mt-4">
              <hr className="p-1 w-[30px] ml-[-40px] mt-[13px]" />
              <div
                onClick={handleCopyClick}
                className=" TextColor cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out"
              >
                saddik.bo@gmail.com
              </div>
            </div>
          </div>
        )}

        <div>
          <section
            id="Home"
            className="min-h-[100vh] w-[100%] flex flex-col gap-8 justify-center items-center "
          >
            <Name show={showSocials} />
          </section>
          {/* <section
            id="About"
            className="w-[100%] min-h-[100vh] flex justify-center items-center"
          >
            <div className="z-[10]">
              <div className="mt-20 mb-10 flex items-center gap-2">
                <hr className="w-20 Text" />{" "}
                <span className="TextSpecialColor">About me</span>{" "}
                <hr className="w-20 Text" />
              </div>
              <About />
            </div>
          </section>
          <section
            id="Projects"
            className="mw-[100%] min-h-[100vh] flex justify-center items-center"
          >
            <Project />
          </section>
          <section
            id="Contact"
            className="relative min-h-[100vh] flex justify-center items-center"
          >
            <div className=" w-[700px] h-[100vh] relative ">
              <div className="mt-[30vh] mb-10 flex items-center gap-2 ">
                <hr className="w-20 Text" />{" "}
                <span className="TextSpecialColor">Contact</span>{" "}
                <hr className="w-20 Text" />
              </div>
              <div className="TextColor mb-10">
                I am currently open to new opportunities, and my inbox is always
                open. Feel free to reach out with questions or just to say
                hello—I'll respond as soon as I can!
              </div>
              <Contact />
              <footer className="mt-[80px] mb-10 pr-10 TextColor absolute bottom-1">
                <p>
                  Designed and coded with ❤️ by me. Built with{" "}
                  <a
                    className="TextNormalColor"
                    href="https://nextjs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Next.js
                  </a>{" "}
                  and
                  <a
                    className="TextNormalColor"
                    href="https://tailwindcss.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Tailwind CSS
                  </a>
                  , and deployed on{" "}
                  <a
                    className="TextNormalColor"
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vercel
                  </a>
                  . All content is styled in the{" "}
                  <a
                    className="TextNormalColor"
                    href="https://fonts.google.com/specimen/Inter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Poppins font
                  </a>
                  . © 2024 Essadike Elhafiane. All rights reserved.
                </p>
              </footer>
            </div>
          </section> */}
        </div>
      </div>
    </main>
  );
}

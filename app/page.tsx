"use client";

import { use, useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import About from "./components/aboutme";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Name from "./components/Name";
import "@/app/circle.css";
import LinksComponenT from "./components/Nav";
import Skills from "./components/Skills";
import { useIntersectionObserver } from "@uidotdev/usehooks";

const applyAnimation = () => {
  const elements = document.querySelectorAll(".slide-inN");
  console.log(elements);
  elements.forEach((el, index) => {
    const element = el as HTMLElement; // Type assertion

    setTimeout(() => {
      element.style.transition = "transform 0.8s ease, opacity 0.8s ease";
      element.style.transform = "translateX(0)";
      element.style.opacity = "1";
    }, index * 0); // 300ms stagger delay
  });
};

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showSocials, setShowSocials] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(false);
  const [sectionSelected, setSectionSelected] = useState<string>("Home");
  const [res, setRes] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled from the top of the page
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate the maximum possible scroll height
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      // Check if the user has scrolled close to the bottom of the page
      if (scrollTop >= scrollHeight - 50 && scrollTop > 0) {
        // User has scrolled close to the bottom, hide the navbar
        setIsNavbarVisible(false);
      } else {
        // User hasn't scrolled close to the bottom or is at the top, show the navbar
        setIsNavbarVisible(true);
      }
    };

    // Set initial state based on the current scroll position
    const initialScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    const initialScrollHeight = document.body.scrollHeight - window.innerHeight;
    setIsNavbarVisible(initialScrollTop < initialScrollHeight - 50);

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowSocials(false);
    } else {
      setShowSocials(true);
    }

    if (!showSocials) {
      return () => {
        setPosition({ x: -50, y: -50 });
      };
    }

    const setFromEvent = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
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

  const handleSectionSlection = () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionSelected(entry.target.id);
          }
        });
      },
      { threshold: 0.20}
    );
  
    sections.forEach((section) => {
      observer.observe(section);
    });
  
    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }

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
      const isChrome = navigator.userAgent.includes("Chrome");

      if(currentSectionIndex === 3 || !isChrome) {
        // Revert to default wheel behavior
        window.removeEventListener("wheel", handleScroll);
        return;
      }
      else
        sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        isScrolling = false; // Allow scrolling again after 500ms
      }, 500);
    };
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [sectionSelected == "Home"]);

  useEffect(() => {
    handleSectionSlection();
    if (window.innerWidth < 1100) {
      setRes(false)
     } else {
       setRes(true)
     }
   
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1100) {
       setRes(false)
      } else {
        setRes(true)
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 1100) {
         setRes(false)
        } else {
          setRes(true)
        }
      });
    };
  }, []);


  return (
    <main className=" min-w-screen flex-col bgColor">
      <LinksComponenT scroll={isNavbarVisible} sectionSelected={sectionSelected} />
      {res && <div
        className="tracking-effect z-[0]"
        style={{ left: `${position.x - 20}px`, top: `${position.y - 20}px` }}
      ></div>}
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
        <div>
          <section
            
            id="Home"
            className="min-h-[100vh] w-full flex flex-col gap-8 justify-center items-center"
          >
            <Name  />
          </section>
          <section
            id="About"
            className="w-full min-h-[100vh] flex justify-center items-center"
          >
            <div className="z-[10] w-full flex flex-col justify-center items-center p-2">
            <div className="mb-8  mt-20 flex items-center  gap-2 z-10 w-[80%] max-w-[500px]">
              <h1 className="TextSpecialColor text-[20px]">01.</h1>
              <span className="FontMon p-4 text-[20px] min-w-[130px]">About me</span>{" "}
              <hr className="w-full border-[#233554]" />
            </div>
              <About />
            </div>
          </section>
          <section
            id="Projects"
            className=" w-[100%] min-h-[100vh] flex flex-col justify-center items-center"
          >
            <div className="mb-8  mt-20 flex items-center  gap-2 z-10 w-[80%] max-w-[800px] ">
              <h1 className="TextSpecialColor text-[20px]">02.</h1>
              <span className="FontMon p-4 text-[20px]">Projects</span>{" "}
              <hr className="w-full border-[#233554]" />
            </div>
            <Project scroll={res} />
          </section>
          <section
            id="Skills"
            className="w-[100%] h-[100vh] min-h-[1400px] flex flex-col justify-center items-center TextColor "
          >
            <div className="mb-8  mt-20 flex items-center  gap-2 z-10 w-[80%] max-w-[800px]">
              <h1 className="TextSpecialColor text-[20px]">03.</h1>
              <span className="FontMon p-4 text-[20px] text-white">Skills</span>{" "}
              <hr className="w-full border-[#233554]" />
            </div>
            <Skills scroll={res}/>
          </section>
          <section
            id="Contact"
            className="relative h-[100vh] min-h-[1200px]  flex flex-col justify-center items-center"
          >
            <div className="max-w-[700px] w-[80%] flex flex-col items-center">
            <div className="mb-8  mt-20 flex items-center  gap-2 z-10 w-[80%] max-w-[800px]">
              <h1 className="TextSpecialColor text-[20px]">04.</h1>
              <span className="FontMon p-4 text-[20px] text-white">Contact</span>{" "}
              <hr className="w-full border-[#233554]" />
            </div>
              
              <Contact />
            </div>


            <footer className="FontMon w-[80vw] max-w-[700px] p-10 TextColor bottom-1 absolute  p-2">
              <p>
                Designed and coded by me. Built with{" "}
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
                . © 2024 Essadike Elhafiane.
              </p>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}

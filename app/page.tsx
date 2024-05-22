"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
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
import LinksComponenT from "./components/Nav";

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

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowSocials(false);
    }
    else {
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

 

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setShowSocials(false);
      } else {
        setShowSocials(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setShowSocials(false);
        } else {
          setShowSocials(true);
        }
      });
    };
  }, []);

  return (
    <main className=" min-w-screen flex-col bgColor">
      <LinksComponenT />
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
        <div>
          <section
            id="Home"
            className="min-h-[100vh] w-[100%] flex flex-col gap-8 justify-center items-center "
          >
            <Name  />
          </section>
          <section
            id="About"
            className="w-[100%] w-[100%] min-h-[100vh] flex justify-center items-center"
          >
            <div className="z-[10] flex flex-col justify-center items-center">
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
            className="w-[100%] min-h-[100vh] flex flex-col justify-center items-center"
          >
            <div className="mt-20 flex items-center gap-2 z-10">
              <hr className="w-20 Text" />{" "}
              <span className="TextSpecialColor">Projects</span>{" "}
              <hr className="w-20 Text" />
            </div>
            <Project />
          </section>
          <section
            id="Contact"
            className="relative min-h-[100vh] flex justify-center items-center"
          >
            <div className=" max-w-[700px] w-[100%] h-[100vh] relative ">
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
          </section>
        </div>
      </div>
    </main>
  );
}

"use client";

import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import "@/app/globals.css";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import { useRouter } from "next/navigation";

const LinksComponent = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "a",
      {
        x: [10, 0], // Slide from 50px above to 0px
        opacity: [0, 1],
      },
      {
        duration: 0.1,
        delay: stagger(0.1), // Stagger by 0.3 seconds
        ease: "easeInOut",
      }
    );
  }, [animate]);

  return (
    <div
      className="absolute mt-[210px] w-[50%] min-w-[60px] max-w-[180px] flex flex-col containerNav z-[100]"
      ref={scope}
    >
      <a href="#Home" className="text-sm font-medium w-full text-center p-2">
        Home
      </a>
      <a href="#About" className="text-sm font-medium w-full text-center p-2">
        About
      </a>
      <a
        href="#Services"
        className="text-sm font-medium w-full text-center p-2"
      >
        Services
      </a>
      <a
        href="#Projects"
        className="text-sm font-medium w-full text-center p-2"
      >
        Projects
      </a>
      <a href="#Contact" className="text-sm font-medium w-full text-center p-2">
        Contact
      </a>
    </div>
  );
};

const LinksComponenT = () => {
  const [navLinks, setNavLinks] = useState(false);
  const [switchNavLinks, setSwitchNavLinks] = useState(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    setSwitchNavLinks(window.innerWidth < 768 ? true : false);
  }, []);


  useEffect(() => {
    setTimeout(() => {
    scope &&
      scope.current &&
      animate(
        scope?.current?.children,
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
    },1);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setSwitchNavLinks(true);
      } else {
        setSwitchNavLinks(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setSwitchNavLinks(true);
        } else {
          setSwitchNavLinks(false);
        }
      });
    };
  }, [scope, animate, switchNavLinks]);
  const router = useRouter();
  return (
    <nav
      className={`z-[1000] pl-8  pr-8 absolute w-[100vw] flex justify-between p-4 items-center h-[60px] md-h-[95px] navBarContainer ${
        navLinks ? "bg-[var(--bg-color)]" : ""
      }`}
    >
      <Image
        priority
        className={`cursor-pointer ${"w-[100px] h-[100px]"} `}
        src="./ES.svg"
        alt="logo"
        width={100}
        height={100}
        
        onClick={() => router.push("/#Home")}
      />
      {!switchNavLinks ? (
        <div className="flex items-center gap-4" ref={scope}>
          <a href="#Home" className="text-sm font-medium ">
            Home
          </a>
          <a href="#About" className="text-sm font-medium">
            About
          </a>
          <a href="#Projects" className="text-sm font-medium">
            Projects
          </a>
          <a href="#Skills" className="text-sm font-medium">
            Skills
          </a>
          <a href="#Contact" className="text-sm font-medium">
            Contact
          </a>
        </div>
      ) : (
        <>
          <FaBars
            className="w-[25px] h-[25px] "
            onClick={() => setNavLinks(!navLinks)}
          />
          {navLinks && <LinksComponent />}
        </>
      )}
    </nav>
  );
};

export default LinksComponenT;

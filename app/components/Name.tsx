"use client";
import React, { useEffect } from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import Typing from "@/app/utils/typing";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Name = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    } else {
      controls.start({
        x: -100,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);
 

  const words = [
    {
      text: "Full Stack Developer",
      className: "TextColor sm:text-[35px] md:text-[40px]  ",
    },
    { text: ".", className: "TextSpecialColor sm:text-[40px] " },
  ];

  return (
    <motion.div
    ref={ref}
    initial={{ x: -100, opacity: 0 }}
    animate={controls}
    exit={{ opacity: 0 }}
   className="w-[80%] sm:max-w-[800px] text-left z-[2] flex flex-col gap-0 p-2">
      <h3 className="text-[12px] sm:text-[22px] TextSpecialColor reveal">
        Hello, I'm
      </h3>
      <h1 className="text-[27px] sm:text-[42px]  revealR">
        Essadike elhafiane
      </h1>
     
        <Typing />
      
      <p className="TextColor FontMon revealR w-[90%] text-[14px] mt-2">
        I'm a software engineer specializing in developing outstanding digital
        experiences, whether in <span className="text-white">backend</span> or{" "}
        <span className="text-white">frontend</span> capacities. Presently, my
        focus lies in creating accessible, human-centered products.
      </p>
      <div className="flex gap-4 w-[80%] max-w-[300px] mt-4 mb-8 z-[10] self-start  TextColor">
        <SlSocialLinkedin className=" cursor-pointer w-[20px] h-[20px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialTwitter className=" cursor-pointer w-[20px] h-[20px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialFacebook className="cursor-pointer w-[20px] h-[20px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialInstagram className="cursor-pointer w-[20px] h-[20px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialGithub className="cursor-pointer w-[20px] h-[20px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
      </div>
      <div className="reveal buttonAnimation flex items-center justify-center rounded-[6px]  bg-teal-400/10 text-sm font-medium leading-5 text-teal-300 mt-2">
        Resume
      </div>
    </motion.div>
  );
};
export default Name;

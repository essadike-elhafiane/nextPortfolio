"use client";
import { TypewriterEffectSmooth } from "../utils/typewriter-effect";
import React, { useEffect } from "react";
import { initScrollReveal } from "../utils/scrollReveal";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import Typing from "@/app/utils/typing";
const Name = () => {
  // useEffect(() => {
  //   initScrollReveal(".reveal", {
  //     duration: 1500,
  //     origin: "left",
  //     distance: "10px",
  //   });
  //   // initScrollReveal(".revealR", {
  //   //   duration: 1500,
  //   //   origin: "right",
  //   //   distance: "10px",
  //   // });
  // }, []);

  const words = [
    {
      text: "Full Stack Developer",
      className: "TextColor sm:text-[35px] md:text-[40px]  ",
    },
    { text: ".", className: "TextSpecialColor sm:text-[40px] " },
  ];

  return (
    <div className="w-[80%] sm:max-w-[800px] text-left z-[5] flex flex-col gap-0">
      <h3 className="text-[12px] sm:text-[22px] TextSpecialColor reveal">
        Hello, I'm
      </h3>
      <h1 className="text-[27px] sm:text-[42px]  revealR">
        Essadike elhafiane
      </h1>
     
        <Typing />
      
      <p className="TextColor revealR w-[90%] text-[14px] mt-2">
        I'm a software engineer specializing in developing outstanding digital
        experiences, whether in <span className="text-white">backend</span> or{" "}
        <span className="text-white">frontend</span> capacities. Presently, my
        focus lies in creating accessible, human-centered products.
      </p>
      <div className="flex gap-4 w-[80%] max-w-[300px] mt-4 mb-8 z-[10] self-start  TextColor">
        <SlSocialLinkedin className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialTwitter className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialFacebook className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialInstagram className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialGithub className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
      </div>
      <div className="reveal buttonAnimation flex items-center justify-center rounded-[6px]  bg-teal-400/10 text-sm font-medium leading-5 text-teal-300 mt-2">
        Resume
      </div>
    </div>
  );
};
export default Name;

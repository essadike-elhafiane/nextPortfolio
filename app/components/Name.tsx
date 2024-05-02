
"use client"
import { TypewriterEffectSmooth } from "../utils/typewriter-effect";
import React, { useEffect } from "react";
import { initScrollReveal } from "../utils/scrollReveal";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
const Name = (props: { show: boolean }) => {
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
      text: "full stack developer",
      className: "TextColor md:text-[40px] h-[20px]",
    },
    { text: ".", className: "TextSpecialColor md:text-[40px] h-[20px]" },
  ];

  return (
    <div className="w-[80%] md:max-w-[800px] text-left z-[5]">
      <h3 className="text-[12px] md:text-[22px] TextSpecialColor reveal">
        Hello, I'm
      </h3>
      <h1 className="text-[18px] md:text-[42px] revealR">Essadike elhafiane</h1>
      <TypewriterEffectSmooth words={words} />
      <p className="TextColor revealR text-[12px]">
        Lorem, ipsum dolor sit amet consectetur Lorem, ipsum dolor sit amet
        consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum dolor sit
        amet consecteturLorem, ipsum dolor sit amet consecteturLorem, ipsum
        dolor sit amet consectetur
      </p>
      {!props.show && <div className="flex gap-4 w-[300px] mt-8 mb-8 z-[10] self-start  TextColor">
        <SlSocialLinkedin className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialTwitter className=" cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <FaFacebook className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <SlSocialInstagram className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
        <FaGithub className="cursor-pointer w-[25px] h-[25px] hover:text-teal-300 hover:scale-[115%] transition-all duration-300 ease-in-out" />
      </div>}
      <div className="reveal buttonAnimation flex items-center justify-center rounded-[6px]  bg-teal-400/10 text-sm font-medium leading-5 text-teal-300 mt-4">
        Resume
      </div>
    </div>
  );
};
export default Name;

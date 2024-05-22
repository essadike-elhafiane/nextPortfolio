"use client";
import "@/app/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const About = () => {
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
        x: 100,
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center w-[90%] max-w-[600px] z-10 TextColor p-2"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      <p>
      As a seasoned Full Stack Developer fluent in<span className="text-white"> NestJs</span>, <span className="text-white">Node.js</span>, <span className="text-white">React</span>, <span className="text-white">NextJs</span>, and
      <span className="text-white"> JavaScript</span>, with a solid foundation in <span className="text-white">C/C++</span>, I thrive on solving complex
      problems through code. With years of industry experience, I'm passionate
      about pushing the boundaries of technology and collaborating with talented
      peers to deliver innovative solutions
      <br />
      <br />
      Let's connect! I am looking for opportunities to bring my background in
      coding and my passion for software development to a professional setting,
      where I can continue to learn and grow
      </p>
    </motion.div>
  );
};

export default About;

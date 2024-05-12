"use client"
import '@/app/globals.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

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
      className="flex flex-col justify-center items-center w-[50%] z-10"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
  
    
      Hello! I'm a dedicated software engineering student at the innovative 42
      Network, where I immerse myself in a rigorous and hands-on curriculum
      designed to challenge and refine my technical abilities. My academic
      journey has been enriched by a variety of projects that I've developed
      using C++ and modern web technologies including Next.js and Nest.js.
      <br />
      <br />
      Through my projects, I have gained a practical understanding of full-stack
      development, crafting both front-end and back-end components to create
      seamless user experiences. My proficiency extends to networking
      fundamentals, which allows me to design more efficient and scalable
      applications. Additionally, I have practical experience with Docker,
      enhancing my ability to deploy and manage applications in isolated
      environments.
      <br />
      <br />
      As I continue to grow and expand my skill set, I am actively seeking
      internship opportunities that will allow me to apply my knowledge in
      real-world scenarios and further my understanding of software development
      practices. I am eager to contribute to a dynamic team, where I can solve
      challenging problems and make a meaningful impact.
      <br />
      <br />
      Let's connect! I am looking for opportunities to bring my background in
      coding and my passion for software development to a professional setting,
      where I can continue to learn and grow
      </motion.div>
  );
};

export default About;

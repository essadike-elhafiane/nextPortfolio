"use client";
import "@/app/globals.css";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Text animation variants
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  // Highlight text animation variants
  const highlightVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      color: "#64748b",
    },
    visible: {
      opacity: 1,
      scale: 1,
      color: "#ffffff",
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Word animation for staggered effect
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const technologies = [
    "NestJs",
    "Node.js",
    "React",
    "NextJs",
    "JavaScript",
    "C/C++",
  ];

  const firstParagraphText = "As a seasoned Full Stack Developer fluent in";
  const middleText = ", with a solid foundation in";
  const restOfFirstParagraph = ", I thrive on solving complex problems through code. With years of industry experience, I'm passionate about pushing the boundaries of technology and collaborating with talented peers to deliver innovative solutions";
  
  const secondParagraph = "Let's connect! I am looking for opportunities to bring my background in coding and my passion for software development to a professional setting, where I can continue to learn and grow";

  return (
    <motion.div 
      ref={ref}
      className="FontMon flex flex-col justify-center items-center w-[90%] max-w-[600px] z-10 TextColor p-2"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div variants={textVariants}>
        <motion.p className="leading-relaxed">
          {/* First part of the paragraph */}
          <motion.span variants={wordVariants}>
            {firstParagraphText}{" "}
          </motion.span>
          
          {/* Animated technology names */}
          {technologies.slice(0, -1).map((tech, index) => (
            <motion.span key={tech}>
              <motion.span
                className="text-white font-semibold"
                variants={highlightVariants}
                whileHover={{ 
                  scale: 1.05,
                  color: "#5FEAD6",
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
              {index < technologies.length - 2 ? ", " : " and "}
            </motion.span>
          ))}
          
          {/* Last technology */}
          <motion.span
            className="text-white font-semibold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.05,
              color: "#5FEAD6",
              transition: { duration: 0.2 }
            }}
          >
            {technologies[technologies.length - 1]}
          </motion.span>
          
          <motion.span variants={wordVariants}>
            {middleText}{" "}
          </motion.span>
          
          <motion.span
            className="text-white font-semibold"
            variants={highlightVariants}
            whileHover={{ 
              scale: 1.05,
              color: "#5FEAD6",
              transition: { duration: 0.2 }
            }}
          >
            C/C++
          </motion.span>
          
          <motion.span variants={wordVariants}>
            {restOfFirstParagraph}
          </motion.span>
        </motion.p>
        
        {/* Animated divider */}
        <motion.div
          className="h-4"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { delay: 1, duration: 0.5 }
            }
          }}
        />
        
        {/* Second paragraph with different animation */}
        <motion.p 
          className="leading-relaxed"
          variants={{
            hidden: { 
              opacity: 0, 
              y: 20,
              filter: "blur(5px)"
            },
            visible: { 
              opacity: 1, 
              y: 0,
              filter: "blur(0px)",
              transition: { 
                delay: 1.2, 
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1]
              }
            }
          }}
        >
          {secondParagraph}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
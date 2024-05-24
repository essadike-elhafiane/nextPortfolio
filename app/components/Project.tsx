"use client";
import "@/app/globals.css";
import { Meteors } from "@/app/utils/meteors";
import "@/app/globals.css";
import { motion, useAnimation } from "framer-motion";
import { stagger, useAnimate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";
import { GoLinkExternal } from "react-icons/go";
import React from "react";
import { ProjectProps, data } from "./Data";

const PhoneProject = (DATA: ProjectProps) => {
  return (
    <div className="relative max-w-[90%] z-[5] m-2 mt-6">
      <div className="z-[5] justify-center items-center">
        <div className="project-content z-[5]">
          <div className="project-label z-[5]">{DATA.title}</div>
          <h4 className="project-title z-[5]">{DATA.name}</h4>
          <div className="FontMon TextColor w-[100%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ml-[-10px] bg-[#112240] z-[5] p-2 rounded-[5px] mt-[-15px]">
            <p>{DATA.description}</p>
          </div>
          <div>
            <h2 className="mt-2 mb-4">Technologies</h2>
            <div className="flex gap-2 w-[300px] max-w-[100%] flex-wrap">
              {DATA.technologies.map((item, index) => {
                return (
                  <div key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex TextColor gap-2 mt-4">
              <SlSocialGithub className="w-[20px] h-[20px] hover:text-[#5FEAD6]" />
              <GoLinkExternal className="w-[20px] h-[20px] hover:text-[#5FEAD6]" />
            </div>
          </div>
        </div>

        <div className="mt-4 ">
          <img
            src={DATA.image || "https://via.placeholder.com/150"}
            alt=""
            className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] min-h-[100%] object-cover z-[0] rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectItem = (DATA: ProjectProps) => {
  return (
    <div className="relative max-w-[1200px] z-[5] m-2 mt-10">
      <div className="ml-[-100px] flex z-[5] h-[480px] justify-center items-center">
        <div className="project-content max-w-[900px] z-[5]">
          <div className="project-label z-[5]">{DATA.title}</div>
          <h4 className="project-title z-[5]">{DATA.name}</h4>
          <div className="FontMon TextColor w-[70%] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] max-w-[900px] bg-[#112240] z-[5] p-6 rounded-[5px] mt-[-15px]">
            <p>
            {DATA.description}
            </p>
          </div>
          <div>
            <h2 className="mt-2 mb-4">Technologies</h2>
            <div className="flex  FontMon gap-2 w-[300px] flex-wrap">
             {DATA.technologies.map((item, index) => {
                return (
                  <div key={index} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                    {item}
                  </div>
                );
              })}
            </div>
            <div className="flex  gap-2 mt-4">
              <SlSocialGithub className="w-[20px] h-[20px] hover:text-[#5FEAD6]" />
              <GoLinkExternal className="w-[20px] h-[20px] hover:text-[#5FEAD6]" />
            </div>
          </div>
        </div>

        <div className="absolute left-[40%] h-[100%]  z-[0] sm:end-[0] ">
          <img
            src={DATA.image || "https://via.placeholder.com/150"}
            alt=""
            className="rounded-[5px] min-w-[580px] h-[400px]  object-cover z-[0] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

const Project = (props: { scroll: boolean }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const datA: ProjectProps[] = data;

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeInOut" },
      });
    } else {
      controls.start({
        x: -100,
        opacity: 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col justify-center items-center w-[100%]"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="flex w-[80%] flex-wrap gap-4 max-w-[1600px] justify-center items-center delay-75"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        {!props.scroll && (
          <React.Fragment>
            {datA.map((item: ProjectProps, index) => {
              return (
                <PhoneProject
                key={index}
                  title={item.title}
                  name={item.name}
                  description={item.description}
                  technologies={item.technologies}
                  image={item.image}
                  github={item.github}
                  link={item.link}
                />
              );
            })}
          </React.Fragment>
        )}
        {props.scroll && (
          <React.Fragment>
            {datA.map((item: ProjectProps) => {
              return (
                <ProjectItem
                key={item.name}
                  title={item.title}
                  name={item.name}
                  description={item.description}
                  technologies={item.technologies}
                  image={item.image}
                  github={item.github}
                  link={item.link}
                />
              );
            })}
            {/* <ProjectItem /> */}
          </React.Fragment>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Project;

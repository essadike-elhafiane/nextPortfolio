"use client";
import "@/app/globals.css";
import { Meteors } from "@/app/utils/meteors";
import "@/app/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  SlSocialFacebook,
  SlSocialGithub,
  SlSocialLinkedin,
} from "react-icons/sl";

import { GoLinkExternal } from "react-icons/go";

const PhoneProject = () => {
  return (
    <div className="relative max-w-[90%] z-[5] m-2 mt-6">
      <div className="z-[5] justify-center items-center">
        <div className="project-content z-[5]">
          <div className="project-label z-[5]">Web Application</div>
          <h4 className="project-title z-[5]">Pongy</h4>
          <div className="TextColor w-[100%] ml-[-10px] bg-[#112240] z-[5] p-2 rounded-[5px] mt-[-15px]">
            <p>
              Collaborative web development project creating a real-time
              multiplayer Pong game. Utilizes NestJS backend, nextJS frontend,
              PostgreSQL database, and OAuth authentication. Key features
              include secure login, live chat, and multiplayer gaming in a
              responsive, single-page app. Emphasizes security, usability, and
              Docker-based deployment for seamless integration.
            </p>
          </div>
          <div>
            <h2 className="mt-2 mb-4">Technologies</h2>
            <div className="flex gap-2 w-[300px] flex-wrap">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NextJs
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NestJs
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PostgresSQL
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                OAuth
              </div>
            </div>
            <div className="flex TextColor gap-2 mt-4">
              <SlSocialGithub className="w-[20px] h-[20px]" />
              <GoLinkExternal className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>

        <div className="mt-4 ">
          <img
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
            className="min-h-[100%] object-cover z-[0] rounded-[5px]"
          />
        </div>
      </div>
    </div>
  );
};

const ProjectItem = () => {
  return (
    <div className="relative max-w-[900px] z-[5] m-2 mt-6">
      <div className="flex z-[5]  justify-center items-center">
        <div className="project-content z-[5]">
          <div className="project-label z-[5]">Web Application</div>
          <h4 className="project-title z-[5]">Pongy</h4>
          <div className="TextColor w-[70%] max-w-[900px] bg-[#112240] z-[5] p-6 rounded-[5px] mt-[-15px]">
            <p>
              Collaborative web development project creating a real-time
              multiplayer Pong game. Utilizes NestJS backend, nextJS frontend,
              PostgreSQL database, and OAuth authentication. Key features
              include secure login, live chat, and multiplayer gaming in a
              responsive, single-page app. Emphasizes security, usability, and
              Docker-based deployment for seamless integration.
            </p>
          </div>
          <div>
            <h2 className="mt-2 mb-4">Technologies</h2>
            <div className="flex gap-2 w-[300px] flex-wrap">
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                TypeScript
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NextJs
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                NestJs
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                PostgresSQL
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                Docker
              </div>
              <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                OAuth
              </div>
            </div>
            <div className="flex TextColor gap-2 mt-4">
              <SlSocialGithub className="w-[20px] h-[20px]" />
              <GoLinkExternal className="w-[20px] h-[20px]" />
            </div>
          </div>
        </div>

        <div className="absolute left-[50%] h-[100%] z-[0] sm:end-[0]">
          <img
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
            className="min-w-[400px] h-[400px] mt-4 object-cover z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

const Project = (props: { scroll: boolean }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

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
        className="flex w-[80%] flex-wrap gap-4 justify-center items-center max-w-[900px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        {!props.scroll && <PhoneProject />}
        {props.scroll && <ProjectItem />}
      </motion.div>
    </motion.div>
  );
};

export default Project;

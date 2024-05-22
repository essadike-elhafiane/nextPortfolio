"use client";
import "@/app/globals.css";
import { Meteors } from "@/app/utils/meteors";
import "@/app/globals.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectItem = () => {
  return (
    <div className="relative max-w-[800px] z-[5] m-2 mt-6">
      <div className="flex z-[5] h-[300px] justify-center items-center">
        <div className="project-content z-[5]">
          <div className="project-label z-[5]">Web Application</div>
          <h4 className="project-title z-[5]">Pongy</h4>
          <div className="w-[70%] max-w-[800px] bg-[var(--bg-color)] z-[5] pt-2 rounded-[5px] mt-[-15px]">
            <p>
              Lorem ipsum dolor amet you probably haven't heard of them bitters
              selvage listicle heirloom. Locavore kombucha street art ennui
              90's, organic food truck hell of seitan skateboard literally
              hexagon fixie next level. Lomo salvia yuccie hella roof party echo
              park vegan four dollar toast cred.
            </p>
          </div>
            <div>
              <h2 className="mt-2">technology</h2>
              <ul className="flex gap-2">
                <li>React</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
        </div>

        <div className="absolute left-[50%] h-[100%] z-[0] sm:end-[0]">
          <img
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
            className="min-w-[100%] min-h-[100%] object-cover z-[0]"
          />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
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
        className="flex w-[80%] flex-wrap gap-4 justify-center max-w-[900px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
      >
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
       
      </motion.div>
    </motion.div>
  );
};

export default Project;

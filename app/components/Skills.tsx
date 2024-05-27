import React, { useState } from "react";

const Languages = () => {
  return (
    <div className="SlideAnimation">
      <h1 className="md:text-xl text-white">C Programming</h1>
      <p>
        C is a foundational programming language known for its
        efficiency and control over system resources. I've used C in various
        projects, including developing a custom shell, implementing a custom
        malloc. I've also explored advanced concepts like pointers, memory
        management, and multithreading.
      </p>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="SlideAnimation w-full">
      <div className="flex  ">
        <div className="flex-1">Git</div>
        <div className="flex-1">Docker</div>
        <div className="flex-1">Postman</div>
      </div>
      <div className="flex">
        <div className="flex-1">Jira</div>
        <div className="flex-1">Confluence</div>
        <div className="flex-1">Slack</div>
      </div>
      <div className="flex">
        <div className="flex-1">Figma</div>
        <div className="flex-1">Adobe XD</div>
        <div className="flex-1">Illustrator</div>
      </div>
    </div>
  );
};

const Framework = () => {
  return (
    <div className="SlideAnimation">
      <div className="flex">
        <div className="flex-1">React</div>
        <div className="flex-1">Angular</div>
        <div className="flex-1">Vue</div>
      </div>
      <div className="flex">
        <div className="flex-1">Node</div>
        <div className="flex-1">Express</div>
        <div className="flex-1">Flask</div>
      </div>
      <div className="flex">
        <div className="flex-1">Django</div>
        <div className="flex-1">Spring</div>
        <div className="flex-1">Hibernate</div>
      </div>
    </div>
  );
};

const Skills = (props: { scroll: boolean }) => {
  const [selected, setSelected] = useState("Tools");

  return (
    <div
      className={`flex w-[90vw] ${
        !props.scroll ? "flex-col items-center" : "mt-20"
      } z-[5]   justify-cenetr max-w-[800px] h-[100%]`}
    >
      <div
        className={`FontMon flex ${
          props.scroll
            ? "flex-col w-[20%] h-[100%]"
            : "items-center justify-center max-w-[600px] w-[100vw] h-[60px] md:h-[80px] overflow-x-auto"
        }  z-[5] md:text-md`}
      >
        <div
          className={`cursor-pointer Clicked ${
            selected == "Languages"
              ? props.scroll
                ? "SelectedSkills"
                : "SelectedSkillsP"
              : !props.scroll
              ? "borderBottom"
              : "borderLeft"
          }`}
          onClick={() => setSelected("Languages")}
        >
          Languages
        </div>
        <div
          className={`cursor-pointer Clicked ${
            selected == "Tools"
              ? props.scroll
                ? "SelectedSkills"
                : "SelectedSkillsP"
              : !props.scroll
              ? "borderBottom"
              : "borderLeft"
          }`}
          onClick={() => setSelected("Tools")}
        >
          Tools
        </div>
        <div
          className={`cursor-pointer Clicked ${
            selected == "Framework"
              ? props.scroll
                ? "SelectedSkills"
                : "SelectedSkillsP"
              : !props.scroll
              ? "borderBottom"
              : "borderLeft"
          }`}
          onClick={() => setSelected("Framework")}
        >
          Framework
        </div>
      </div>
      <div
        className={`name ${
          props.scroll ? "w-[80%]" : "w-[100%]"
        } h-[400px]  z-[5] p-4`}
      >
        {selected == "Languages" && <Languages />}
        {selected == "Tools" && <Tools />}
        {selected == "Framework" && <Framework />}
      </div>
    </div>
  );
};

export default Skills;

import React, { useState } from "react";

const Languages = () => {
  return (
    <div className="SlideAnimation ">
      <h1 className="md:text-xl text-white">JavaScript</h1>
      <p className="FontMon mt-4">
        TypeScript extends JavaScript by adding types to the language. It helps
        catch errors early through a syntax closely related to JavaScript. I
        leveraged TypeScript to develop the front-end for a web-based Pong game,
        enhancing the development experience with static type checking and
        advanced object-oriented features. This project showcased the ability to
        build interactive web applications with improved code quality and
        maintainability.
      </p>
      <h1 className="md:text-xl text-white mt-4">TypeScript</h1>
      <p className="FontMon mt-4">
        TypeScript extends JavaScript by adding types to the language. It helps
        catch errors early through a syntax closely related to JavaScript. I
        leveraged TypeScript to develop the front-end for a web-based Pong game,
        enhancing the development experience with static type checking and
        advanced object-oriented features. This project showcased the ability to
        build interactive web applications with improved code quality and
        maintainability.
      </p>
      <h1 className="md:text-xl text-white mt-4">C Programming</h1>
      <p className="FontMon mt-4">
        C is a foundational programming language known for its efficiency and
        control over system resources. I've used C in various projects,
        including developing a{" "}
        <span className="TextSpecialColor">custom shell</span>, implementing a
        custom
        <span className="TextSpecialColor"> malloc </span> . I've also explored
        advanced concepts like <span className="TextSpecialColor"></span>
        pointers, <span className="TextSpecialColor">memory management</span>,
        and <span className="TextSpecialColor">multithreading</span>.
      </p>
      <h1 className="md:text-xl text-white mt-4">C++ Programming</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
    </div>
  );
};

const Tools = () => {
  return (
    <div className="SlideAnimation w-full">
      <h1 className="md:text-xl text-white">Git/Github</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
      <h1 className="md:text-xl text-white mt-4">Docker/Docker-compose</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
      <h1 className="md:text-xl text-white mt-4">VirtualBox</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
      <h1 className="md:text-xl text-white mt-4">PostMan</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
    </div>
  );
};

const Framework = () => {
  return (
    <div className="SlideAnimation">
       <h1 className="md:text-xl text-white mt-4">React</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
      <h1 className="md:text-xl text-white mt-4">Next.js</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
      <h1 className="md:text-xl text-white mt-4">Nest.Js</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the Standard Template Library (STL). I Developed a lightweight,
        high-performance web server using C++. This project focused on
        understanding and implementing HTTP protocols, socket programming, and
        asynchronous IO operations.
      </p>
    </div>
  );
};

const Skills = (props: { scroll: boolean }) => {
  const [selected, setSelected] = useState("Tools");

  return (
    <div
      className={`flex w-[90vw] ${
        !props.scroll ? "flex-col items-center" : "mt-20"
      } z-[5]   max-w-[800px]  `}
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
        } h-[700px]  z-[5] p-4`}
      >
        {selected == "Languages" && <Languages />}
        {selected == "Tools" && <Tools />}
        {selected == "Framework" && <Framework />}
      </div>
    </div>
  );
};

export default Skills;

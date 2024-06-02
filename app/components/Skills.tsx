import React, { useState } from "react";

const Languages = () => {
  return (
    <div className="SlideAnimation ">
      <h1 className="md:text-xl text-white">JavaScript</h1>
      <p className="FontMon mt-4">
        Utilizing JavaScript as my base, I've honed my skills through numerous
        projects. Transitioning to TypeScript elevated my development process by
        introducing static typing and improving code quality. Notably, I
        developed a dynamic task management application, showcasing both my
        JavaScript proficiency and commitment to modern development practices.
      </p>
      <h1 className="md:text-xl text-white mt-4">TypeScript</h1>
      <p className="FontMon mt-4">
        TypeScript extends JavaScript by adding types to the language. It helps
        catch errors early through a syntax closely related to JavaScript. I
        leveraged TypeScript to develop the{" "}
        <span className="TextSpecialColor">front-end</span> and{" "}
        <span className="TextSpecialColor">back-end</span> for a{" "}
        <span className="TextSpecialColor">web-based Pong game</span>, enhancing
        the development experience with static type checking and advanced
        object-oriented features. This project showcased the ability to build
        interactive web applications with improved code quality and
        maintainability.
      </p>
      <h1 className="md:text-xl text-white mt-4">C++ Programming</h1>
      <p className="FontMon mt-4">
        I've utilized C++ in various projects, focusing on creating efficient,
        scalable applications and exploring advanced concepts like templates and
        the{" "}
        <span className="TextSpecialColor">
          Standard Template Library (STL)
        </span>
        . I Developed a lightweight, high-performance{" "}
        <span className="TextSpecialColor">web server</span> using C++. This
        project focused on understanding and implementing{" "}
        <span className="TextSpecialColor cool-link">
          {" "}
          <a
            href="https://www.instagram.com/essadike_elhafiane/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTTP protocols
          </a>
        </span>
        , <span className="TextSpecialColor">socket programming</span>, and
        <span className="TextSpecialColor"> asynchronous IO operations</span>.
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
    </div>
  );
};

const Tools = () => {
  return (
    <div className="SlideAnimation w-full">
      <h1 className="md:text-xl text-white">Git / Github</h1>
      <p className="FontMon mt-4">
        In my portfolio, you'll find my expertise in Git and GitHub, showcasing
        my ability to <span className="TextSpecialColor">manage branches</span>,
        handle <span className="TextSpecialColor">issues</span>, and collaborate
        effectively through{" "}
        <span className="TextSpecialColor">pull requests</span>. These skills
        demonstrate my commitment to organized and efficient development
        workflows.
      </p>
      <h1 className="md:text-xl text-white mt-4">Docker / Docker-compose</h1>
      <p className="FontMon mt-4">
        Basic understanding of Docker for creating,{" "}
        <span className="TextSpecialColor">deploying</span>, and running
        applications in <span className="TextSpecialColor">containers</span>,
        which is useful for ensuring consistent environments across development
        and production
      </p>

      <h1 className="md:text-xl text-white mt-4">Networking</h1>
      <p className="FontMon mt-4">
        Knowledge of <span className="TextSpecialColor">socket</span>{" "}
        programming, understanding of{" "}
        <span className="TextSpecialColor">TCP/IP</span> protocols, and
        experience building networked applications in C or C++
      </p>
      <h1 className="md:text-xl text-white mt-4">Debugging and Testing</h1>
      <p className="FontMon mt-4">
        <span className="TextSpecialColor">GDB/LLDB:</span> Experience with
        debugging tools like GDB (GNU Debugger) or LLDB for troubleshooting and
        resolving issues in C/C++ programs. <br />
        <span className="TextSpecialColor">Valgrind:</span> Mention your use of
        Valgrind for memory leak detection and memory debugging, which is
        essential in C programming.
      </p>
      <h1 className="md:text-xl text-white mt-4">Unix/Linux Tools</h1>
      <p className="FontMon mt-4">
        <span className="TextSpecialColor">Bash Scripting:</span> Ability to
        write Bash scripts to automate tasks and workflows in a Unix/Linux
        environment. <br />
        <span className="TextSpecialColor">Unix Commands:</span> Proficiency
        with Unix command-line tools and utilities for file management, text
        processing, and system monitoring.
      </p>
      <h1 className="md:text-xl text-white mt-4">VirtualBox</h1>
      <p className="FontMon mt-4">
        I showcase my expertise in VirtualBox, a versatile{" "}
        <span className="TextSpecialColor">virtualization</span> tool.
        Leveraging VirtualBox, I create and manage{" "}
        <span className="TextSpecialColor">virtual environments</span>, enabling
        efficient testing and development across different{" "}
        <span className="TextSpecialColor">operating systems</span> within a
        single host machine
      </p>
      <h1 className="md:text-xl text-white mt-4">PostMan</h1>
      <p className="FontMon mt-4">
        a powerful <span className="TextSpecialColor">API development</span>{" "}
        tool. With its features for{" "}
        <span className="TextSpecialColor">testing</span>, documenting, and
        collaborating on APIs, I streamline development processes for efficient
        and effective project delivery.
      </p>
    </div>
  );
};

const Framework = () => {
  return (
    <div className="SlideAnimation">
      <h1 className="md:text-xl text-white mt-4">React</h1>
      <p className="FontMon mt-4">
        I leveraged React.js to develop a responsive and user-friendly frontend
        for a single-page web application. By employing a component-based
        architecture, I ensured efficient and scalable development. I utilized
        React Router for client-side navigation, allowing users to seamlessly
        transition between pages. Additionally, I integrated a state management
        library, Redux, to handle complex data flow and improve performance.
        This project showcased my ability to develop visually appealing and
        high-performance frontend applications using React.js.
      </p>
      <h1 className="md:text-xl text-white mt-4">Next.js</h1>
      <p className="FontMon mt-4">
        I feature projects developed with Next.js, a powerful React framework.
        Leveraging Next.js, I've crafted single-page applications with enhanced
        performance and SEO capabilities. My expertise in Next.js showcases my
        ability to create dynamic and efficient web applications that deliver
        seamless user experiences.
      </p>
      <h1 className="md:text-xl text-white mt-4">Nest.Js</h1>
      <p className="FontMon mt-4">
        I designed and developed a robust backend for a single-page web
        application using Nest.js, a Node.js framework. By leveraging Nest.js's
        modular architecture and dependency injection system, I crafted a
        scalable and maintainable solution. The project showcased my ability to
        build efficient, modular, and scalable backend applications with
        improved code quality and maintainability. I successfully implemented a
        RESTful API, utilizing controllers, services, and repositories to
        separate concerns and ensure a clean architecture. This project
        demonstrates my proficiency in building robust and scalable backend
        applications using Nest.js
      </p>
    </div>
  );
};

const Skills = (props: { scroll: boolean }) => {
  const [selected, setSelected] = useState("Languages");

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

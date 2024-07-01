import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Web Developer.", // Main role
        2000, // Waits 2 seconds
        "Front-End Developer.", // Highlight front-end skills
        1000, // Waits 1 second
        "Back-End Developer.", // Highlight back-end skills
        1000, // Waits 1 second
        "Software Engineer.", // General software engineering skills
        1000, // Waits 1 second
        () => {
          // Optional callback function
        },
      ]}
      wrapper="span"
      cursor={true}
      className="TextColor text-[22px] sm:text-[40px]"
      speed={{ type: "keyStrokeDelayInMs", value: 50 }}
      repeat={Infinity}
      style={{ display: "inline-block" }}
    />
  );
};

export default Typing;

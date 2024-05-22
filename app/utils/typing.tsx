import { TypeAnimation } from "react-type-animation";

const Typing = () => {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Web Developer.", // Types 'One'
        2000, // Waits 1s
        "Software Engineer.",
        1000, // Types 'Two'
        "Software developer.",
        1000,
        () => {
          
        },
      ]}
      wrapper="span"
      cursor={true}
      className="TextColor text-[22px] sm:text-[40px]"
      speed={{ type: 'keyStrokeDelayInMs', value: 50 }}
      repeat={Infinity}
      style={{ display: "inline-block",}}
    />
  );
};

export default Typing;

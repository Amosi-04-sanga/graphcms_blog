import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative h-[50vh] w-full">
      <img
        src="/roadtosuccess.jpg"
        alt="hero image"
        className="w-full h-full absolute"
      />
      <div className="absolute top-16 left-1/2 -translate-x-2/4 w-3/4 auto">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We share insights, trends and more on ",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "We share insights, trends and more on MOVIES",
            2000,
            "We share insights, trends and more on TV",
            2000,
            "We share insights, trends and more on COMICS",
            2000,
            "We share insights, trends and more on GAMING",
            2000,
          ]}
          wrapper="h2"
          deletionSpeed={10}
          speed={20}
          style={{ fontSize: "2em", color: "white", fontWeight: 500, display: "block" }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../AnimationJson/Animation - 1723352958575.json";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-full items-center h-[80vh] ">
      <section className="flex flex-col justify-center w-full p-5 text-left md:text-center text-white md:w-1/2 font-mono">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
          Hi, I'm Ajay👋
        </h1>
        <span className="text-2xl font-bold text-[#B968C7] md:text-4xl mb-1">
          <Typewriter
            words={["Full Stack Developer </>", "Graphic Designer 🖥️"]}
            loop={20}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </section>
      <div className="flex items-center md:justify-center w-60 md:w-1/2">
        <div className="w-96 text-white">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

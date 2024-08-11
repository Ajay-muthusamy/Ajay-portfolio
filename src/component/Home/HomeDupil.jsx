import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import animationData from "../AnimationJson/Animation - 1723352958575.json";

const Home = () => {
  return (
    <div>
      <div className="flex">
        <section className="w-screen flex justify-center items-center">
          <div
            className="p-5 text-center text-white font-mono flex flex-col justify-center md:w-1/2 h-[72vh]"
            id="name"
          >
            <h1 className="text-5xl font-bold mb-7 font-sans tracking-tight">
              Hi, I'm Ajay👋
            </h1>

            <span className="text-2xl md:text-4xl  text-[#B968C7] font-bold font-mono">
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
          </div>
        </section>
      </div>
      <div>
        <div className="text-white w-80">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;

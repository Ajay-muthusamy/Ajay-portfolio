import React from "react";
import { motion } from "framer-motion";
import ajayProfile from "../../assets/ajay.png";

const Self = () => {
  return (
    <div className="py-28">
      <main className="text-white font-sans flex flex-col md:flex-row justify-center gap-10 items-center ">
        <motion.section
          className="w-80 text-[1.3rem] md:w-[100vh] md:text-2xl leading-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-10 text-center text-2xl md:text-3xl">
            LET ME{" "}
            <span className="text-[#B968C7]">
              <i>INTRODUCE</i>
            </span>{" "}
            MYSELF
          </h1>
          <h1 className="mb-6">
            👉 Hi Everyone, I am{" "}
            <span className="font-mono text-[#B968C7]">Ajay</span> from{" "}
            <span className="font-monot text-[#B968C7]">Madurai,Tamilnadu.</span>
          </h1>
          <h1 className="mb-6">
            👉 I’m a BE CSE student with a strong passion for technology and
            problem-solving
          </h1>
          <h1>
            👉 I enjoy building web applications using React and Tailwind CSS and
            exploring various aspects of computer science.
          </h1>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={ajayProfile} alt="" className="w-96" />
        </motion.div>
      </main>
    </div>
  );
};

export default Self;

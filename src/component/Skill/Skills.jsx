import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="">
      <div className="text-white font-sans container mx-auto">
        <h1 className="text-center text-2xl md:text-3xl font-mono py-4 mb-3">
          Frontend <span className="text-[#B968C7] ">Skills</span>
        </h1>
        <div className="hidden md:block absolute md:left-1/2 transform md:-translate-x-1/2 top-16 bottom-0 border-l-2 border-white-500"></div>
        <div className="ab border-l-2 border-blue-500 w-1 h-full text-white left-1 "></div>
        <div className="relative top-0 md:-left-44 flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4 mb-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -right-1 border border-white hidden md:block"></div>

          <img
            src="https://static.vecteezy.com/system/resources/previews/012/697/299/original/stylized-3d-html-logo-design-free-png.png"
            alt=""
            className="w-20 hover:scale-110 duration-150"
          />
          <div className="flex flex-col">
            <h1 className="mb-2">HTML</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `85%` }}
              ></div>
              <h1 className="">90%</h1>
            </div>
          </div>
        </div>

        {/* css? */}
        <div className="relative md:-right-44 flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4 mb-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 border border-white hidden md:block"></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/665/094/non_2x/stylized-3d-css-icon-side-view-free-png.png"
            alt=""
            className="w-20 hover:scale-110 duration-150"
          />
          <div className="flex flex-col">
            <h1 className="mb-2 ">CSS</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `85%` }}
              ></div>
              <h1 className="">90%</h1>
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className="relative top-0 md:-left-44 flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4 mb-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -right-1 border border-white hidden md:block"></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/697/298/non_2x/3d-javascript-logo-design-free-png.png"
            alt=""
            className="w-20 hover:scale-110 duration-150"
          />
          <div className="flex flex-col">
            <h1 className="mb-2">JavaScript</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `70%` }}
              ></div>
              <h1 className="">70%</h1>
            </div>
          </div>
        </div>

        {/* BOOSTRAP */}
        <div className="relative md:-right-44   flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4 mb-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 border border-white hidden md:block"></div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/012/697/297/original/3d-bootstrap-programming-framework-logo-free-png.png"
            alt=""
            className="w-20 hover:scale-110 duration-150"
          />
          <div className="flex flex-col">
            <h1 className="mb-2 ">Boostarp</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `80%` }}
              ></div>
              <h1 className="">80%</h1>
            </div>
          </div>
        </div>

        {/* React js */}
        <div className="relative top-0 md:-left-44 flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4 mb-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -right-1 border border-white hidden md:block"></div>
          <img
            src="https://icon-library.com/images/react-icon/react-icon-0.jpg"
            alt=""
            className="w-20 hover:scale-110 duration-150 px-1 mt-2"
          />
          <div className="flex flex-col">
            <h1 className="mb-2">React js</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `80%` }}
              ></div>
              <h1 className="">80%</h1>
            </div>
          </div>
        </div>

        {/* Tailwind css */}
        <div className="relative md:-right-44   flex justify-center items-center bg-[#02022a] w-80 mx-auto rounded-lg p-4">
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1 border border-white hidden md:block"></div>
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-tailwind-9294852-7577995.png"
            alt=""
            className="w-20 hover:scale-110 duration-150 px-2"
          />
          <div className="flex flex-col">
            <h1 className="mb-2 ">Tailwind</h1>
            <div className="w-44 bg-gray-200 rounded-full h-2.5 mb-4">
              <div
                className="bg-violet-500 h-2.5 rounded-full "
                style={{ width: `80%` }}
              ></div>
              <h1 className="">80%</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

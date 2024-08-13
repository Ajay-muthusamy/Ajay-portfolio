import React from "react";

const skills = [
  {  skill: "HTML", level: 75 },
  { skill: "CSS", level: 90 },
  { skill: "Bootstrap", level: 90 },
  { skill: "JavaScript", level: 90 },
  { skill: "React.js", level: 70 },
  { skill: "Tailwind CSS", level: 85 },
  {  skill: "JavaScript", level: 80 },
  
];


const Skills = () =>{
  return (
    <div className="max-w-4xl mx-auto my-12 p-4 text-white font-sans">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="relative border-l-2 border-blue-500">
        {skills.map((item, index) => (
          <div key={index} className="mb-8 ml-6">
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 border border-white"></div>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {item.year}
            </time>
            <h3 className="text-lg font-semibold text-white">
              {item.skill}
            </h3>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 ">
              <div
                className="bg-blue-500 h-2.5 rounded-full animate-fill-bar"
                style={{ width: `${item.level}%` }}
              ></div>
            </div>
            <p className="text-sm font-medium ">
              {item.level}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

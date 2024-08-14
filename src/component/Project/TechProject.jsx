import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import ResortImg from '../../assets/resort/Screenshot (580).png';
import FoodWeb from '../../assets/resort/Screenshot (305).png';
import Foody from '../../assets/resort/Screenshot (526).png';
import Tailwind_Page from '../../assets/resort/Screenshot (582).png';
import GraphicDesign from "./GraphicDesign";
import { FaGithubAlt } from "react-icons/fa6";

const TechProjects = () => {
  const projects = [
    {
      title: "Food Villa ",
      desc: "🌟 Throwback to My First Web Development Project: Food Villa! 🍔....At the start of my web development journey, I designed a simple landing page called Food Villa using just HTML and CSS. This project marks the beginning of my adventure into web design and development, showcasing my initial skills in creating a clean and engaging landing page.",
      img: FoodWeb,
      link:"https://github.com/Ajay-muthusamy/foodvillasmain"
    },

    {
      title: "Resort Booking System",
      desc: "🚀 Resort Booking Management System built with React, Bootstrap, Express.js, and PostgreSQL. This app allows users to easily search, view, and book resorts, with an admin panel for managing bookings and secure, real-time updates. Stack used:  #React #Bootstrap #ExpressJS #PostgreSQL",
      img: ResortImg,
      link:"https://github.com/Ajay-muthusamy/Resort_Mangament"
    },
    {
      title: "Food Recipe Website",
      desc: "🍽️ Food Recipe Website!** 🥘 This platform allows users to upload and view a variety of delicious recipes with ease. Built with React for a responsive frontend, Bootstrap for modern styling, MongoDB for data storage, and Express.js for backend functionality, it offers a seamless experience for exploring and sharing recipes. Stack used: #React #Bootstrap #MongoDB #ExpressJS",
      img: Foody,
      link:"https://github.com/Ajay-muthusamy/Food-Recipe-Application"
    },
    {
      title: "Responsive Home Page",
      desc: "🚀 My latest project—a landing page built with React and Tailwind CSS! This was a great exercise in leveraging Tailwind's flexibility to create a clean, responsive design. The smooth integration with React made the development process efficient and enjoyable. It’s been a valuable experience in honing my front-end skills, and I'm eager to explore more with these tools. Would love to hear your thoughts!",
      img: Tailwind_Page,
      link:"https://github.com/Ajay-muthusamy/responsive-tailwind-homePage"
    }
  ];

  const tiltRefs = useRef([]);

  useEffect(() => {
    tiltRefs.current.forEach((tiltRef) => {
      if (tiltRef) {
        VanillaTilt.init(tiltRef, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2  ,
        });
      }
    });
    return () => {
      tiltRefs.current.forEach((tiltRef) => tiltRef?.vanillaTilt.destroy());
    };
  }, [projects]);

  const handleGithubLink = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container mx-auto mt-20 mb-20 text-white m-3 md:w-[170vh]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 leading-5">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (tiltRefs.current[index] = el)}
            className="bg-[#17172f73] rounded-lg p-4"
            data-tilt
          >
            <div>
              <img
                src={project.img}
                alt={`Screenshot of ${project.title}`}
                className="rounded-lg h-auto object-cover"
              />
            </div>
            <div className="mt-4 text-white font-sans text-2xl">
              <h1 className="font-mono">{project.title}</h1>
              <p className="mt-2 text-sm">{project.desc}</p>
            </div>
            <button 
              onClick={() => handleGithubLink(project.link)} 
              className="bg-violet-800 font-sans rounded-lg px-4 py-2 mt-4 flex"
            >
              <FaGithubAlt className="mt-1 text-1xl"/>&nbsp;Github
            </button>
          </div>
        ))}
      </div>
      <div className="mt-20">
      <GraphicDesign />
      </div>
    </div>
  );
};

export default TechProjects;

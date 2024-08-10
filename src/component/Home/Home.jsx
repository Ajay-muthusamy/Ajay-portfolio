import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div>
      <section className="w-screen flex justify-center items-center">
        <div className="p-5 text-center text-white font-mono flex flex-col justify-center md:w-1/2 h-[72vh]" id="name">
          <h1 className="text-5xl font-bold mb-7">Ajay👋</h1>
          
          <span className="text-2xl md:text-4xl  text-[#B968C7] font-bold">
            
            <Typewriter
              words={['Full Stack Developer </>', 'Graphic Designer 🖥️']}
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
  );
};

export default Home;

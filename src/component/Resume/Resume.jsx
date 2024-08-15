import React from 'react';
import { FaDownload } from "react-icons/fa6";   
import ResumeImg from '../../assets/resume/Screenshot (583).png';
import ResumePDF from '../../assets/resume/ajay-resume (2).pdf'; 
const Resume = () => {
  return (
    <section className="p-6 text-white font-sans">
      <div className='flex flex-col md:flex-col items-center'>
        <div className='mb-4 md:mb-0 md:mr-4'>
          <a href={ResumePDF} download="Ajay-Resume.pdf">
            <button className="bg-violet-500 text-white px-6 py-2 rounded hover:bg-violet-600 transition flex
            hover:scale-110">
            <FaDownload className='mt-1'/>&nbsp;Download CV
            </button>
          </a>
        </div>
        <div>
          <img src={ResumeImg} alt="Preview of Resume" className="rounded shadow-lg" />
        </div>
      </div>
    </section>
  );
}

export default Resume;

import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Contact = () => {
    const GitHandleButton = () =>{
        window.location.href="https://github.com/Ajay-muthusamy";
    }
    const LinkedHandleButton = ()=>{
        window.location.href="https://www.linkedin.com/in/ajay-muthusamy/";
    }
  return (
    <div>
      <section className='text-white font-sans text-center leading-6 mb-4'>
        <h1 className='text-4xl font-sans font-bold mb-3'>FIND ME ON</h1>
        <p className='font-mono'>Feel free to <span className='text-[#B968C7]  '>connect </span>with me</p>
        <div className='flex justify-center space-x-10 py-5'>
        <button className='text-2xl bg-white text-[#5a2863] p-2 rounded-full'
        onClick={GitHandleButton}><FaGithub /></button>
        <button className='text-2xl bg-white text-[#5a2863] p-2 rounded-full'
        onClick={LinkedHandleButton}><FaLinkedinIn /></button>
        <button className='text-2xl bg-white text-[#5a2863] p-2 rounded-full'><FaInstagram /></button>
        </div>
      </section>
    </div>
  )
}

export default Contact

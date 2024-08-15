import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Skills from './component/Skill/Skills';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import TechProject from './component/Project/TechProject';
import Resume from './component/Resume/Resume';

const Render = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/project" element={<TechProject />} />
          <Route path="/resume" element={<Resume />} />
          
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Render

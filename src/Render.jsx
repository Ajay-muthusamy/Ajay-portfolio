import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import Skills from './component/Skill/Skills';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
const Render = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/Skills" element={<Skills />} />
          {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Render

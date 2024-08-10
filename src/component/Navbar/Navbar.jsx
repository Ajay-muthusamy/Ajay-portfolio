import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { SlEnvolopeLetter } from "react-icons/sl";
import Navbarjson from "../Navbar/Navbar.json";
import { FaGithubAlt } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";

// Map JSON icon names to actual React components
const iconMap = {
  FaHome: FaHome,
  IoPersonSharp: IoPersonSharp,
  HiOutlineDesktopComputer: HiOutlineDesktopComputer,
  SlEnvolopeLetter: SlEnvolopeLetter,
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
    <section className="py-1 bg-[#14141b73] text-white px-8">
      <div className="flex justify-between items-center gap-8">
        <div className="text-white py-4">
          <h1 className="text-4xl text-[#CE5FF8] font-bold">Aj.</h1>
        </div>
        <nav className="text-white">
          <ul className="hidden md:flex gap-20 py-4 items-center">
            {Navbarjson.map((data, index) => {
              const IconComponent = iconMap[data.icon];
              return (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-[1rem] hover:border-b-4 rounded-sm hover:border-[#CD5FF8] hover:duration-150 py-2"
                >
                  <p className="text-2xl mb-1">
                    {IconComponent ? <IconComponent /> : null}
                  </p>
                  <span className="capitalize font-sans">{data.title}</span>
                </li>
              );
            })}
            <button className="text-2xl bg-[#482B65] px-6 py-1 rounded-sm">
              <FaGithubAlt />
            </button>
          </ul>
          {/* Toggle Button for Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              <CiMenuBurger />
            </button>
          </div>
        </nav>
      </div>
    </section>
     {/* Mobile Menu */}
     {menuOpen && (
        <div className="h-screen absolute flex flex-col items-center bg-[#12121f] text-white font-bold w-full py-8  left-0 right-0 drop-shadow-md rounded-lg duration-500 z-10 ">
          <ul className="flex flex-col space-y-4 justify-center mt-10 delay-150">
            {Navbarjson.map((data, index) => {
              const IconComponent = iconMap[data.icon];
              return (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-[1rem]  rounded-sm  hover:duration-150  "
                >
                  <p className="text-2xl mb-10">
                    {IconComponent ? <IconComponent /> : null}
                  </p>
                  <span className="capitalize font-sans mb-10">{data.title}</span>
                </li>
              );
            })}
          </ul>
          <button className="text-1xl bg-[#482B65] px-6 py-1 rounded-sm flex gap-3 font-mono">
              <FaGithubAlt className="mt-1"/> Github
            </button>
        </div>
      )}
    </ div >
  );
};

export default Navbar;

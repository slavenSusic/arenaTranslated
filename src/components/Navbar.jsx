
import React, { useState,useEffect } from 'react';
import logo from '../assets/digitalarena.png';
import { Image } from 'astro:assets';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({homeText,homeLink,

  services,servicesLink, 
  about,aboutLink,portfolio, portfolioLink,languages



}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };



  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const halfPage = window.innerHeight / 2;
      setIsScrolled(scrollY >= halfPage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.div key="navbar" className="z-50 " >
      <nav className={`absolute top-0 left-0 w-full h-auto bg-transparent transition-all duration-400 ease-in-out z-50 ${
        isScrolled ? "bg-white" : "" 
      }`}>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center text-green-600 p-3 z-40" onClick={toggleMenu}>
            <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <ul className="flex items-center justify-center flex-col gap-20 pt-10">
          <div className="hidden absolute left-20 transform lg:flex lg:space-x-6 pt-5">
            <img src={logo.src} alt="logo" className="w-1/5  hidden lg:block" />
          </div>

          <div className="hidden absolute right-20 transform lg:flex lg:space-x-6 pt-5">
            <li><a className="text-lg text-white hover:text-green-500" href={homeLink}>{homeText}</a></li>
            <li className="text-black"></li>
            <li><a className="text-lg text-white hover:text-green-500" href={aboutLink}>{about}</a></li>
            <li className="text-white"></li>
            <li><a className="text-lg text-white hover:text-green-500" href={servicesLink}>{services}</a></li>
            <li className="text-white"></li>
            <li><a className="text-lg text-white hover:text-green-500" href={portfolioLink}>{portfolio}</a></li>
            <li className="text-white"></li>
            <ul className="flex gap-5">
      {languages.map(({ code, label }, index) => (
        <li key={index} className="flex items-center">
          <a
            href={`/${code}/`}
            className="text-lg text-white hover:text-green-500 transition duration-300"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
          </div>
        </ul>
      </nav>
      
      <AnimatePresence>
  {isMenuOpen && (
    <motion.aside
      key="navbar-menu"
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '-100%' }}
      className={`navbar-menu absolute z-50 transition-all duration-300 ease-in-out w-full h-[60%] bg-gradient-to-b from-green-800 via-green-700 to-green-500`}
    >
      <div className="navbar-backdrop fixed w-full h-full"></div>
      <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-full max-w-base py-6 px-6 overflow-y-auto">
        <div className="flex items-center mb-8 justify-between">
          <img src={logo.src} alt="logo" className="w-1/2 md:w-1/3 lg:hidden" />
          <button className="navbar-close" onClick={toggleMenu}>
            <svg className="h-6 w-6 text-white cursor-pointer hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="mb-8">
          <li className='py-2 hover:bg-white group rounded-md duration-300'><a className="text-lg p-2 duration-300 group-hover:text-green-800 text-white hover:text-green-500" href={homeLink}>{homeText}</a></li>
          <li className='py-2 hover:bg-white group rounded-md duration-300'><a className="duration-300 text-lg p-2 group-hover:text-green-800 text-white hover:text-green-500" href={aboutLink}>{about}</a></li>
          <li className='py-2 hover:bg-white group rounded-md duration-300'><a className="duration-300 text-lg p-2 group-hover:text-green-800 text-white hover:text-green-500" href={servicesLink}>{services}</a></li>
          <li className='py-2 hover:bg-white group rounded-md '><a className="text-lg p-2 group-hover:text-green-800 text-white hover:text-green-500" href={portfolioLink}>{portfolio}</a></li>
        </ul>
        <ul className="flex gap-5">
          {languages.map(({ code, label }, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex items-center hover:bg-white rounded-md group"
            >
              <a
                href={`/${code}/`}
                className="text-lg text-white hover:text-green-800 transition duration-300 group-hover:text-green-700 p-3"
              >
               {label}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className="mt-auto">
          <p className="my-4 text-xs text-center text-white">
            <span>Copyright Â© digital arena 2024</span>
          </p>
        </div>
      </nav>
    </motion.aside>
  )}
</AnimatePresence>
    </motion.div>
  );
};

export default Navbar;

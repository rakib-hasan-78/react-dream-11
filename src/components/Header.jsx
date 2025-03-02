// import React from 'react';
import PropTypes from 'prop-types';
import dollar from '../assets/dollar.svg';
import logo from '../assets/logo.png';
import { useState } from 'react';
const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  // functioning burger
  const burgerHandler = () =>{
      setIsOpen(!isOpen);
  }
    return (
        <header className='w-full h-auto flex flex-wrap flex-row items-center justify-between py-2 my-3 bg-white border border-red-500'>
        {/* logo section ===> */}
        <div className="w-1/12 border">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="w-5/12 flex items-center 3xs:justify-evenly xl:justify-between">
          {/* navbar */}
          <nav className='3xs:hidden xl:flex flex-row items-center justify-center gap-5 space-x-3 text-black/60'>
            <div><a href="#">home</a></div>
            <div><a href="#">fixture</a></div>
            <div><a href="#">teams</a></div>
            <div><a href="#">schedules</a></div>
          </nav>

          {/* coins collections */}
          <div className='flex items-center justify-center gap-2 border p-2 rounded-lg'>
            <span>0</span>
            <span>coins</span>
            <img src={dollar} alt="dollar-icon" />
          </div>
        </div>
        {/* burgers */}
        <div onClick={burgerHandler} 
          className=' 3xs:flex xl:hidden w-14 p-1 flex-col items-center justify-center gap-1 cursor-pointer'>
            <div className={`w-full h-1.5 bg-stone-700 rounded-lg transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5':''}`}></div>
            <div className={`w-full h-1.5 bg-stone-700 rounded-lg transition-all duration-300 ${isOpen?'rotate-12 opacity-0':''}`}></div>
            <div className={`w-full h-1.5 bg-stone-700 rounded-lg transition-all duration-300 ${isOpen? '-rotate-45 -translate-y-2.5':''}`}></div>
        </div>
        {
          isOpen && (

            <div className='xl:hidden w-full min-h-screen bg-gray-500/70 mt-6'>
              <nav className='flex flex-col items-start justify-center gap-5   py-5'>
                  <div className=' transition-all duration-150 bg-stone-400 hover:bg-stone-600 text-black/60 hover:text-white/80 p-2 w-full shadow-md text-2xl font-black uppercase'><a href="#">home</a></div>
                  <div className=' transition-all duration-150 bg-stone-400 hover:bg-stone-600 text-black/60 hover:text-white/80 p-2 w-full shadow-md text-2xl font-black uppercase'><a href="#">fixture</a></div>
                  <div className=' transition-all duration-150 bg-stone-400 hover:bg-stone-600 text-black/60 hover:text-white/80 p-2 w-full shadow-md text-2xl font-black uppercase'><a href="#">teams</a></div>
                  <div className=' transition-all duration-150 bg-stone-400 hover:bg-stone-600 text-black/60 hover:text-white/80 p-2 w-full shadow-md text-2xl font-black uppercase'><a href="#">schedules</a></div>
              </nav>
            </div>

          )
        }
      </header>

    );
};

Header.propTypes = {
    
};

export default Header;



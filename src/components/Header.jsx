// import React from 'react';
import PropTypes from 'prop-types';
import dollar from '../assets/dollar.svg';
import logo from '../assets/logo.png';
const Header = () => {
    return (
        <header className='w-full h-auto flex flex-row items-center justify-between py-2 my-3 bg-white'>
        {/* logo section ===> */}
        <div className="w-1/12">
          <img src={logo} alt="company-logo" />
        </div>
        <div className="w-5/12 flex items-center justify-between">
          {/* navbar */}
          <nav className='flex flex-row items-center justify-center gap-5 space-x-3 text-black/60'>
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
      </header>
    );
};

Header.propTypes = {
    
};

export default Header;
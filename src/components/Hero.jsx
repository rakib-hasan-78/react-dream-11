// import React from 'react';
import PropTypes from 'prop-types';
import heroImage from '../assets/bg-shadow.png';
import bannerImage from '../assets/banner-main.png';
const Hero = ({coinHandler}) => {
    return (
        <div className="w-full 3xs:h-[420px] md:h-[545px] border-2 bg-neutral-900 relative z-10 rounded-xl py-2">

            <img className="inset-0 w-full h-full left-0 top-0 -translate-x-0 -translate-y-0 object-cover rounded-lg absolute -z-20" src={heroImage} alt="hero-image-bg" />

            <div className='w-full h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 flex flex-col flex-wrap items-center justify-center content-center space-y-5 md:gap-6'>

                <div className='h-[200px]'>
                <img  src={bannerImage} alt="banner-image" />
                </div>
                <h1 className='text-white'>
                Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <p className='text-white/70'>Beyond Boundaries Beyond Limits</p>
                <div className='3xs:w-10/12 md:w-6/12 lg:w-2/12 border btn-div'>
                    <button
                     onClick={coinHandler}
                     className='btn w-full' type="button">claim free credit</button>
                </div>

            </div>
        </div>
    );
};

Hero.propTypes = {
    coinHandler: PropTypes.func.isRequired,
};

export default Hero;
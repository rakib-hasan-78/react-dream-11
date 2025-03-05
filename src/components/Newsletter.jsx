import React from 'react';
import PropTypes from 'prop-types';
import background from '../assets/bg-shadow.png'
import EmailSub from './EmailSub';
const Newsletter = () => {
    return (
        <div className='bg-slate-100/15 py-10 rounded-lg  inset-0 border-slate-100 3xs:w-full md:w-10/12 h-auto relative top-1/2 translate-y-1/2  flex items-center justify-center bg-blend-soft-light '>
            <div className='w-11/12 h-96 bg-white relative z-10 rounded-xl shadow-xl shadow-gray-50/5 -inset-0 border border-slate-700/10 bg-cover bg-center'>
                <img className='inset-0 w-full h-full left-0 top-0 -translate-x-0 -translate-y-0 3xs:object-fill lg:object-cover rounded-lg absolute -z-20' src={background} alt="newsletter-bg-shadow" />
                <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-30 w-full space-y-5'>
                    <h3>subscribe to our newsletter</h3>
                    <p className='text-stone-600 text-center'>Get the latest updates and news right in your inbox!</p>
                    <EmailSub
                    parentStyle={`3xs:space-x-0 lg:space-x-7 3xs:space-y-4 lg:space-y-0 flex-row items-center justify-center`}
                    inputStyle={`border border-slate-800/40 3xs:w-11/12 lg:w-6/12 rounded-lg px-6 py-3 placeholder:font-bold`}
                    btnStyle={`rounded-lg 3xs:w-11/12 lg:w-fit px-6 py-3`}
                    />
                </div>
            </div>
        </div>
    );
};

Newsletter.propTypes = {
    
};

export default Newsletter;
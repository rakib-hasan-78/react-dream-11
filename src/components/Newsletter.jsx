import React from 'react';
import PropTypes from 'prop-types';
import background from '../assets/bg-shadow.png'
import EmailSub from './EmailSub';
const Newsletter = () => {
    return (
        <div className='bg-slate-100/15 py-10 rounded-lg  inset-3 border-slate-100 w-10/12 h-auto relative top-1/2 translate-y-1/2 flex items-center justify-center bg-blend-soft-light '>
            <div className='w-11/12 h-96 bg-white relative z-10 rounded-xl shadow-xl shadow-gray-50/5 -inset-0 border border-slate-700/10'>
                <img className='inset-0 w-full h-full left-0 top-0 -translate-x-0 -translate-y-0 object-cover rounded-lg absolute -z-20' src={background} alt="newsletter-bg-shadow" />
                <div className='flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 z-30 w-full space-y-5'>
                    <h3>subscribe to our newsletter</h3>
                    <p className='text-stone-600'>Get the latest updates and news right in your inbox!</p>
                    <EmailSub
                    parentStyle={`space-x-7 flex-row`}
                    inputStyle={`border w-5/12 rounded-lg`}
                    btnStyle={`rounded-lg`}
                    />
                </div>
            </div>
        </div>
    );
};

Newsletter.propTypes = {
    
};

export default Newsletter;
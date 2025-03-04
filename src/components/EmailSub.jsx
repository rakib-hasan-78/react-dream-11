// import React from 'react';
import PropTypes from 'prop-types';
// import { PropTypes } from 'prop-types';

const EmailSub = ({ parentStyle, inputStyle, btnStyle }) => {
    return (
        <div className={`flex items-center justify-center w-full ${parentStyle}`}>
            
                <input type="email"
                 placeholder='enter your email'
                 className={`outline-none placeholder:capitalize placeholder:text-sm placeholder:font-bold px-6 py-3
                 ${inputStyle}`}
                  />
                <button 
                className={`${btnStyle} px-6 py-3 font-semibold text-black bg-gradient-to-r from-pink-400 via-yellow-300 to-yellow-500 capitalize`} type="button">subscribe</button>
        </div>
    );
};

EmailSub.propTypes = {
    parentStyle : PropTypes.string.isRequired,
    inputStyle: PropTypes.string.isRequired,
    btnStyle: PropTypes.string.isRequired,
};

export default EmailSub;
import React from 'react';
import PropTypes from 'prop-types';
import player from '../assets/gilchrist.jpg';
import { FaRegTrashAlt } from "react-icons/fa";

const SinglePlayer = () => {
    return (
        <div className="w-full border px-2 py-2 rounded-md shadow-sm flex items-center justify-between">
            <div className='flex items-center justify-start space-x-5'>
                <div className='w-20 h-20 rounded-lg shadow-md'>
                    <img className='rounded-lg' src={player} alt="#" />
                </div>

                <div className='flex flex-1 flex-col items-start justify-start gap-0.5'>
                    <h6>adam gilchrist</h6>
                    <span className='text-xs text-black/50'>wicket keeper</span>
                </div>
            
            </div>
            <div>
                <button className='cursor-pointer'>
                    <FaRegTrashAlt className='text-red-500 text-lg' />
                </button>
            </div>
        </div>
    );
};

SinglePlayer.propTypes = {
    
};

export default SinglePlayer;
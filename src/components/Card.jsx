// import React from 'react';
import PropTypes from 'prop-types';
import player from '../assets/gilchrist.jpg';
import user from '../assets/user.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className='w-3/12 border p-4 rounded-xl'>
            {/* card image block */}
            <div className='w-full h-[240px] overflow-hidden transition-all duration-200 hover:scale-105 shadow-sm'>
                <img className='rounded-xl' src={player} alt="#" />
            </div>
            {/* player name section */}
            <div className='w-full h-auto flex items-center justify-start mt-5 space-x-3'>
                <div className='h-5'>
                    <img src={user} alt="user-icon" />
                </div>
                <div>
                    <h4>adam gilchrist</h4>
                </div>
            </div>
            <div
            className='w-full h-auto flex items-center justify-between border-b'
            >
                <div className='py-3 flex items-center justify-start space-x-2 '>
                    <div>
                        <FontAwesomeIcon className='text-gray-500' icon={faFlag} />
                    </div>
                    <div><span className='country'>australia</span></div>
                </div>
                <span className='bg-zinc-300/25 p-1.5 rounded-lg text-xs text-zinc-800'>wicket keeper</span>
            </div>
        
            <div className='w-full h-auto py-1'>
                <h6>rating</h6>
            </div>
            <div className='w-full h-auto py-1 flex items-center justify-between'>
                <span className='text-sm'>left hand bat</span>
                <span className='text-sm text-zinc-400/90'>right arm ball</span>
            </div>
            <div className='w-full h-auto flex items-center justify-between'>
                <h6 className='text-sm'>price : $ <span className='font-bold text-sm'>155000</span></h6>
                <button className='text-xs border p-1.5 rounded-lg capitalize cursor-pointer'>choose player</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    
};

export default Card;
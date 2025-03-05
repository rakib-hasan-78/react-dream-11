// import React from 'react';
import PropTypes from 'prop-types';
import SinglePlayer from './SinglePlayer';


const SelectedPlayers = () => {
    return (
        <div className='w-10/12 h-auto py-2 flex flex-wrap items-center justify-between border'>
            {/* selected players' cards ===> */}
            <div className='w-full h-auto px-2 py-2 flex flex-col items-center justify-center content-center space-y-5'>
                <SinglePlayer />
                <SinglePlayer />
                <SinglePlayer />
                <SinglePlayer />
                <SinglePlayer />
            </div>
            {/* available button */}
            <div className='w-full h-auto py-2 px-3 flex items-start justify-start'>
                <div className='border border-neutral-800 p-1 rounded-lg  3xs:w-full lg:w-fit'>
                    <button className='btn w-full'>add more player</button>
                </div>
            </div>
        </div>
    );
};

SelectedPlayers.propTypes = {
    
};

export default SelectedPlayers;
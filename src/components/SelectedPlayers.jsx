// import React from 'react';
import PropTypes from 'prop-types';
import SinglePlayer from './SinglePlayer';



const SelectedPlayers = ({selectedPlayers ,coin, setCoin, setSelectedPlayers}) => {
    return (
        <div className='w-10/12 h-auto py-2 flex flex-wrap items-center justify-between'>
            {/* selected players' cards ===> */}
            <div className='w-full h-auto px-2 py-2 flex flex-col items-center justify-center content-center space-y-5'>
                {
                    selectedPlayers.length > 0 ? selectedPlayers.map(selectedPlayer=>( <SinglePlayer key={selectedPlayer.id} selectedPlayer={selectedPlayer} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} /> )) : <h2>No Players haven&apos;t added yet!</h2>
                }
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
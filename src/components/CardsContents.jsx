// import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsContents = ({players}) => {

    return (
        <div className='w-full h-auto pt-3 pb-2 flex flex-wrap 3xs:flex-col md:flex-row items-center justify-center gap-10'>
        {
            players.map(player=>{
                return <Card key={player.id}  player={player} />
            })
        }
        </div>
    );
};

CardsContents.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
};


export default CardsContents;
// import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';


const CardsContents = ({players, setSelectedPlayers, selectedPlayers, coin, setCoin}) => {

    return (
        <div className='w-full h-auto pt-3 pb-2 flex flex-wrap 3xs:flex-col md:flex-row items-center justify-center gap-10'>
        {
            players.map(player=>{
                return <Card key={player.id}  player={player} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} />
            })
        }
        </div>
    );
};

CardsContents.propTypes = {
    players: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectedPlayers: PropTypes.array,
    setSelectedPlayers: PropTypes.func,
    coin:PropTypes.number.isRequired,
    setCoin:PropTypes.func.isRequired,
};


export default CardsContents;
import React from 'react';
import PropTypes from 'prop-types';
import { FaRegTrashAlt } from "react-icons/fa";
import { removeSelectedPlayer, saveCoins } from '../ls/LS';
import { toast } from 'react-toastify';

const SinglePlayer = ({selectedPlayer, coin, setCoin, setSelectedPlayers}) => {
    const {name, category, image, id, price} = selectedPlayer;

    const removeHandler = (e)=>{
        e.preventDefault();
        // removing selected player from UI ====>
        setSelectedPlayers(prevPlayers=>prevPlayers.filter(prevPlayer=>prevPlayer.id!==id));
        // remove player from LS===>
        removeSelectedPlayer(id);
        // coin restore ===>
        setCoin(coin=>{
            const restorePrice = coin + price;
            saveCoins(restorePrice);
            return restorePrice;
        });
        // message for player information
        toast.success(`${name} removed from your list`,{
            position: 'top-center',
        });
        toast.success(`$${price} restored to your account!`,{
            position:'top-center'
        })
    }


    return (
        <div className="w-full border px-2 py-2 rounded-md shadow-sm flex items-center justify-between">
            <div className='flex items-center justify-start space-x-5'>
                <div className='w-20 h-20 rounded-lg shadow-md'>
                    <img className='rounded-lg' src={image} alt={name} />
                </div>

                <div className='flex flex-1 flex-col items-start justify-start gap-0.5'>
                    <h6>{name}</h6>
                    <span className='text-xs text-black/50'>{category}</span>
                </div>
            
            </div>
            <div>
                <button
                 onClick={removeHandler}
                 className='cursor-pointer'>
                    <FaRegTrashAlt className='text-red-500 text-lg' />
                </button>
            </div>
        </div>
    );
};

SinglePlayer.propTypes = {
    
};

export default SinglePlayer;
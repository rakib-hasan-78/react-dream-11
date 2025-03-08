// import React from 'react';
import PropTypes from 'prop-types';
import user from '../assets/user.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { saveCoins } from '../ls/LS';


const Card = ({player, setSelectedPlayers, selectedPlayers, coin, setCoin}) => {
    const{name, country, category, image, bat, bowl, id, price } = player;

    // ** choose player handler====>
    
        const choosePlayerHandlers = (e)=>{
            e.preventDefault();

            if(selectedPlayers.length >= 15){
                toast.error(`error! you can't add more than 15 players.`,{
                    position:'top-center'
                })
                return;
            }
            if (coin < price) {
                toast.error(`insufficient balance ! pls reclaim credits`,{
                    position:'top-center',
                })
                return;
            }
            if (selectedPlayers.find(selectedPlayer=>selectedPlayer.id===id)) {
                toast.error(`you can't add one player twice in the list`,{
                    position:'top-center'
                })
                return;
            } else {
                toast.success(`${name} is added to your list`,{
                    position:'top-center'
                })
                setCoin(pre=>{
                    const current = pre - price;
                    saveCoins(current);
                    return current;
                })
                setSelectedPlayers([...selectedPlayers, player])
                return;
            }
        }

           

    return (
        <div className='3xs:w-11/12 sm:w-6/12 md:w-5/12 lg:w-3/12 border p-4 rounded-xl'>
            {/* card image block */}
            <div className='w-full h-[240px]  shadow-sm'>
                <img className='rounded-xl overflow-hidden transition-all duration-200 hover:scale-105' src={image} alt={name} />
            </div>
            {/* player name section */}
            <div className='w-full h-auto flex items-center justify-start mt-5 space-x-3'>
                <div className='h-5'>
                    <img src={user} alt="user-icon" />
                </div>
                <div>
                    <h4>{name}</h4>
                </div>
            </div>
            <div
            className='w-full h-auto flex items-center justify-between border-b'
            >
                <div className='py-3 flex items-center justify-start space-x-2 '>
                    <div>
                        <FontAwesomeIcon className='text-gray-500' icon={faFlag} />
                    </div>
                    <div><span className='country text-sm'>{country}</span></div>
                </div>
                <span className='bg-zinc-300/25 p-1.5 rounded-lg text-[10px] text-zinc-800'>{category}</span>
            </div>
        
            <div className='w-full h-auto py-1'>
                <h6>rating</h6>
            </div>
            <div className='w-full h-auto py-1 flex items-center justify-between'>
                <span className='text-sm'>{bat}</span>
                <span className='text-sm text-zinc-400/90'>{bowl}</span>
            </div>
            <div className='w-full h-auto flex items-center justify-between'>
                <h6 className='text-sm'>price : $ <span className='font-bold text-sm'>{price}</span></h6>
                <button
                onClick={choosePlayerHandlers} 
                className='text-xs border p-1.5 rounded-lg capitalize cursor-pointer'>choose player</button>
            </div>
        </div>
    );
};

Card.propTypes = {
    player: PropTypes.shape({
        id: PropTypes.string.isRequired, 
        name: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        bat: PropTypes.bool.isRequired,
        bowl: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    selectedPlayers:PropTypes.array.isRequired,
    setSelectedPlayers: PropTypes.func.isRequired,
    coin: PropTypes.number.isRequired,
    setCoin: PropTypes.func,
};

export default Card;
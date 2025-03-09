// import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';
import SelectedPlayers from './SelectedPlayers';
import { useEffect, useState } from 'react';
import CardsContents from './CardsContents';
import { getUIChange, saveUI } from '../ls/LS';


const Contents = ({coin, setCoin}) => {
    const [selectContent, setSelectContent] = useState('available');
    const [players , setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);

   

    // use effect for data getting from server=====>
    useEffect(()=>{
        fetch('/data/db.json')
            .then(response=>response.json())
            .then(data=>setPlayers(data))
    },[])


    
    // to save UI changes using LS ====>
    useEffect(()=>{
        const storedUI = getUIChange();
        if(storedUI)setSelectContent(storedUI)
    },[selectContent])

    // handlers to change UI ====>
    const availableHandler = (e)=>{
        e.preventDefault();
        setSelectContent('available')
        saveUI('available')
    }
    const selectHandler = (e) =>{
        e.preventDefault();
        setSelectContent('selected');
        saveUI('selected')
    }
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center'>
        <Selection selectedPlayers={selectedPlayers} availableHandler={availableHandler} selectHandler={selectHandler} selectContent={selectContent} />
        <div className='w-full h-auto pt-3 pb-2 flex flex-wrap 3xs:flex-col md:flex-row items-center justify-center gap-10'>
        {
            selectContent === 'available' && (
                <CardsContents players={players} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} />
            )
        }
        {
            selectContent === 'selected' && (
                <SelectedPlayers selectedPlayers={selectedPlayers} coin={coin} setCoin={setCoin} setSelectedPlayers={setSelectedPlayers} availableHandler={availableHandler} />
            )
        }
        </div>
        </section>
    );
};

Contents.propTypes = {
    coin: PropTypes.number,
    setCoin: PropTypes.func,
}


export default Contents;
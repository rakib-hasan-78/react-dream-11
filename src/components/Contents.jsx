// import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';
import SelectedPlayers from './SelectedPlayers';
import { useState } from 'react';
import CardsContents from './CardsContents';

const Contents = () => {
    const [selectContent, setSelectContent] = useState('available');
    const availableHandler = (e)=>{
        e.preventDefault();
        setSelectContent('available')
    }
    const selectHandler = (e) =>{
        e.preventDefault();
        setSelectContent('selected');
    }
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center'>
        <Selection availableHandler={availableHandler} selectHandler={selectHandler} selectContent={selectContent} />
        <div className='w-full h-auto pt-3 pb-2 flex flex-wrap 3xs:flex-col md:flex-row items-center justify-center gap-10'>
        {
            selectContent === 'available' && (
                <CardsContents />
            )
        }
        {
            selectContent === 'selected' && (
                <SelectedPlayers />
            )
        }
        </div>
        </section>
    );
};

Contents.propTypes = {
    
};

export default Contents;
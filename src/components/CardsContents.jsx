// import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsContents = () => {
    return (
        <div className='w-full h-auto pt-3 pb-2 flex flex-wrap 3xs:flex-col md:flex-row items-center justify-center gap-10'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

CardsContents.propTypes = {
    
};

export default CardsContents;
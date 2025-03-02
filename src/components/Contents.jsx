// import React from 'react';
import PropTypes from 'prop-types';
import Selection from './Selection';
import Card from './Card';


const Contents = () => {
    return (
        <section className='w-full h-auto flex flex-col items-center justify-center'>
        <Selection />
        <div className='w-full h-auto pt-3 pb-10 flex flex-wrap 3xs:flex-col lg:flex-row items-center justify-center gap-10'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </section>
    );
};

Contents.propTypes = {
    
};

export default Contents;
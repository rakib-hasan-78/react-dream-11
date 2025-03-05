// import React from 'react';
import PropTypes from 'prop-types';

const Selection = ({availableHandler, selectHandler,selectContent})=> {
    return (
        <div className='w-full h-auto flex flex-wrap items-center justify-center content-center py-10 mt-5'>
            <div className='w-full h-auto flex flex-wrap items-center 3xs:justify-center 3xs:space-y-5 lg:space-y-0 lg:justify-between'>
                <h3 className='3xs:w-full lg:w-fit text-center'>Available Players</h3>
                <div className='lg:w-fit flex items-center justify-end border space-x-5 rounded-xl'>
                    <button
                    onClick={availableHandler}
                     className={selectContent==='available'? 'btn' : 'capitalize px-1'}>available</button>
                    <button
                    onClick={selectHandler} 
                    className={selectContent==='selected'? 'btn': 'capitalize px-1'} >selected (8) </button>
                </div>
            </div>
        </div>
    );
};

Selection.propTypes = {
    selectContent: PropTypes.string.isRequired,
    availableHandler: PropTypes.func.isRequired,
    selectHandler: PropTypes.func.isRequired
};

export default Selection;
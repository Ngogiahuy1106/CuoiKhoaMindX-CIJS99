import React from 'react';
import Title from './Title';
import CarList from './Card/CarList';
import './NewCars.css';

function NewCars({ carData }) {
    const newCars = carData.filter(car => car.State === 'New');

    return (
        <>
            <Title title="New Cars" subtitle="Homepage - New Cars" />
            <div className='CarSellContainer'>
                <div className='FilterContainer'>
                    <div className='FilterChildBox'>Filter</div>
                    <div className='FilterBarrier'></div>
                    <div className='Custom3'>
                        <div className='FilterChildBox'>Year</div>
                        <div className='FilterChildBox'>Brand</div>
                        <div className='FilterChildBox'>Model</div>
                        <div className='FilterChildBox'></div>
                    </div>
                </div>
                <div><CarList carData={newCars} /></div>
            </div>
        </>
    );
}

export default NewCars;

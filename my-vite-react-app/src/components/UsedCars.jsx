import React from 'react';
import Title from './Title';
import CarList from './Card/CarList';
import './NewCars.css';
function UsedCars({ carData }) {
    const usedCars = carData.filter(car => car.State === 'Used');

    return (
        <>
            <Title title="Used Cars" subtitle="Homepage - Used Cars" />
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
                <div><CarList carData={usedCars} /></div>
            </div>
        </>
    );
}

export default UsedCars;
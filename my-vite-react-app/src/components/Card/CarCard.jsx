import React from 'react';
import { Link } from 'react-router-dom';
import './CarCard.css';

const CarCard = ({ car, index }) => {
    return (
        <Link to={`/car-detail/${index}`} className="CarCardContainer">
            <div>
                <img className='CarCardImage' src={car.Image} alt={car.Name} />
            </div>
            <div className='CarCardInfo'>
                <div className='CarCardState'>{car.State}</div>
                <div className='CarCardName'>{car.Name}</div>
                <div className='CarCardPrice'>{car.Price}</div>
                <div className='CarCardAdress'>{car.City}, {car.Country}</div>
                <div className='CarCard4Info'>
                    <div className='CarCard4InfoText'>{car.Year}</div>
                    <div className='CarCard4InfoText'>{car.Type}</div>
                    <div className='CarCard4InfoText'>{car.DriveType}</div>
                    <div className='CarCard4InfoText'>{car.Seat}</div>
                </div>
                <div className='CarCard4InfoTextBarrier'></div>
                <div>Reviews</div>
            </div>
        </Link>
    );
};

export default CarCard;

import React from 'react';
import { useParams } from 'react-router-dom';
import './CarDetails.css'
import Title from './Title';
const CarDetail = ({ carData }) => {
    const { carId } = useParams();
    const car = carData[carId];

    if (!car) {
        return <div>Car not found</div>;
    }

    const title = car.Name;
    const subtitle = car.State === 'New' 
        ? 'Homepage - New Car List - Car Detail' 
        : 'Homepage - Used Car List - Car Detail';

    return (
        <div>
            <Title title={title} subtitle={subtitle} />
            <div className="CarDetailContainer">
                <h1>{car.Name}</h1>
                <img src={car.Image} alt={car.Name} />
                <p><strong>Price:</strong> {car.Price}</p>
                <p><strong>Year:</strong> {car.Year}</p>
                <p><strong>Type:</strong> {car.Type}</p>
                <p><strong>Drive Type:</strong> {car.DriveType}</p>
                <p><strong>Seats:</strong> {car.Seat}</p>
                <p><strong>Color:</strong> {car.ExteriorColor}</p>
                <p><strong>Description:</strong> {car.Description}</p>
                
            </div>
        </div>
    );
};

export default CarDetail;

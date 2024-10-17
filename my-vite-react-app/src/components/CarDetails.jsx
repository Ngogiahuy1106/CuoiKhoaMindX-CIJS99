import React from 'react';
import { useParams } from 'react-router-dom';

const CarDetail = ({ carData }) => {
    const { carId } = useParams();
    const car = carData[carId];

    if (!car) {
        return <h2>Car not found</h2>;
    }

    return (
        <div>
            <h1>{car.Name}</h1>
            <img src={car.Image} alt={car.Name} />
            <p>Price: {car.Price}</p>
            <p>Year: {car.Year}</p>
            <p>Type: {car.Type}</p>
            <p>Drive Type: {car.DriveType}</p>
            <p>Power: {car.Power}</p>
            <p>Exterior Color: {car.ExteriorColor}</p>
            <p>Mileage: {car.Mileage}</p>
            <p>Transmission: {car.Transmission}</p>
            <p>Dimensions: {car.Dimensions.Length} x {car.Dimensions.Width} x {car.Dimensions.Height}</p>
        </div>
    );
};

export default CarDetail;

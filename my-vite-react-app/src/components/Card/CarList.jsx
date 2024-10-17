import React, { useState } from 'react';
import CarCard from './CarCard';
import SearchBar from './SearchBar';

const CarList = ({ carData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredCars = carData?.filter(car =>
        car.Name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <div>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <div className='CarSearchNumberResult'>
                {filteredCars.length} cars found
            </div>
            {filteredCars.map((car, index) => (
                <CarCard key={index} car={car} index={index} />
            ))}
        </div>
    );
};

export default CarList;
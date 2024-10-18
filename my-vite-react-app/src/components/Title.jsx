import React from 'react';
import './NewCars.css';

const Title = ({ title, subtitle }) => (
    <div className='TitleContainer'>
        <div className='TitleTextContainer'>
            <div className='Title'>{title}</div>
            <div className='SubTitle'>{subtitle}</div>
        </div>
    </div>
);


export default Title;

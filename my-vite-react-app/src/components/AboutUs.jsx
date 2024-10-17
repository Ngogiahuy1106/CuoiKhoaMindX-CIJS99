import React from 'react'
import './AboutUs.css'
function AboutUs() {
    return (
        <>
        <div className='AboutUsContainer'>
            <div className='WidthCustomOnly'>
                <ul className='AboutUsUl1'>
                    <h1 className='AboutUsH1'>About Us</h1>  
                    <li className='AboutUsText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel aliquet tortor ut sit sit. Velit imperdiet integer elementum a scelerisque pulvinar venenatis sodales. Quis nulla euismod feugiat at interdum in. Venenatis arcu semper lectus quis sit in rhoncus auctor.</li>

                    <li className='AboutUsBoxContainer'>
                        <li className='AboutUsBox'>
                            <div className='AboutUsBoxNumber'>150</div>
                            <div className='DoubleBarrier'></div>
                            <div className='AboutUsBoxText'>Vehicle In Stock</div>
                        </li>
                        <li className='AboutUsBox'>
                            <div className='AboutUsBoxNumber'>40</div>
                            <div className='DoubleBarrier'></div>
                            <div className='AboutUsBoxText'>Sold Car</div>
                        </li>
                    </li>
                    <li className='AboutUsBoxContainer'>
                        <li className='AboutUsBox'>
                            <div className='AboutUsBoxNumber'>38</div>
                            <div className='DoubleBarrier'></div>
                            <div className='AboutUsBoxText'>Happy Customers</div>
                        </li>
                        <li className='AboutUsBox'>
                            <div className='AboutUsBoxNumber'>5</div>
                            <div className='DoubleBarrier'></div>
                            <div className='AboutUsBoxText'>Award</div>
                        </li>
                    </li>
                    
                </ul>
                <ul className='AboutUsImageContainer AboutUsUl2'>
                   
                </ul>
            </div>
        </div>
        </>
    )
}

export default AboutUs

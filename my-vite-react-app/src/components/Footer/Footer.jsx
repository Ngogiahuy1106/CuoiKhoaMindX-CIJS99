import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className = 'Footer'>

            <div><img className='FooterLogo' src="LogoMini.png" alt="Logo" /></div>
            <div className='horizontal-line'></div>
            <div className='ThreeColum'>
                <ul className='FooterUl'>
                    <li>ABOUT US</li>
                    <li className='PaddingOnly'>FAQ</li>
                    <li>CONTACT</li>
                </ul>
                <ul className='FooterUl'>
                    <li>CUSTOMER SERVICE</li>
                    <li className='PaddingOnly'>info@car.com</li>
                    <li>240-865-3730</li>
                </ul>
                <ul className='FooterUl'>
                    <li>3926 Calvin Street,
                        Baltimore, Maryland,
                        21201,
                        United State
                    </li>
                    <li className='PaddingOnly'>FB IG YTB</li>
                </ul>
            </div>
            <div className='horizontal-line'></div>
            <div className='Copyright'>2021 Autohunt. All Rights reserved</div>
        </div>
    )
}

export default Footer

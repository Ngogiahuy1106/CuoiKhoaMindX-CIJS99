import React from 'react'
import AboutUs from './AboutUs'

import CarsLogoList from './CarsLogoList'
import Contact from './Contact'
import './Home.css'
import OurService from './OurService'
function Home() {
    return (
         <>
         <Contact></Contact>
         <CarsLogoList></CarsLogoList>
         <OurService></OurService>
         <AboutUs></AboutUs>
         </>
    )
}

export default Home

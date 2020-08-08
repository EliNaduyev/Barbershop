import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './Navbar/Navbar'
import Services from './Services/Services'
import Hours from './Hours/Hours'

import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Services/>
            <Hours/>      
        </div>
    )
}

export default Home

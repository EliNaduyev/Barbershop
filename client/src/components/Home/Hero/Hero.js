import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'
 

const Hero = () => {
    return (
        <div className='hero' id='hero-navigate'>
            <div className='hero-text'>
                <h1 className='hero-h1'>We Make Amazing Haircuts</h1>
                <div className='hero-para-div'>
                    <p className='hero-para'>
                        The Barberia opened in the fall of 1989. We specialize in
                        cutting mens hair and shaving their faces. Let's see 
                        all our awesome features below! Thanks for choose us!
                    </p>
                </div>
                <Link to='/appointment'>
                    <button className='hero-btn'>Book Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Hero

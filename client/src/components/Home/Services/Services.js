import React from 'react'
import beardShave from '../../../assets/beard_shave.jpg'
import hair_cut from '../../../assets/hair_cut.jpg'
import pic3 from '../../../assets/pic3.jpg'
import logo from '../../../assets/logo.png'
// import ScrollAnimation from 'react-animate-on-scroll';
// import "animate.css/animate.min.css";



import './Services.css'

const Services = () => {
    return (
        <div className='services' id='what-we-do'>

            <div className='services-container'>

                <div className='services-info'>
                    <img src={logo} alt=''></img>
                    <h1>What We Do?</h1>
                    <p className='mr-bottom services-para'>Duis aute irure dolor in reprehenderit volupte velit esse cillum dolore eu fugiat</p>
                    <p className='mr-bottom services-para'>pariatursint occaecat cupidatat non proident culpa.</p>
                </div>

                <div className='services-grid'>
                    <div className='services-box'>
                        <img src={hair_cut} alt=''></img>
                        <h2>Haircut Styles</h2>
                        <p className='mr-bottom services-para'>Duis aute irure dolor in reprehenderit in volupte</p>
                        <p className='mr-bottom services-para'>velit esse cillum dolore fugiat nulla.</p>
                    </div>
                    <div className='services-box'>
                        <img src={beardShave} alt=''></img>
                        <h2>Beard Trim</h2>
                        <p className='mr-bottom services-para'>Duis aute irure dolor in reprehenderit in volupte</p>
                        <p className='mr-bottom services-para'>velit esse cillum dolore fugiat nulla.</p>
                    </div>
                  
                    <div className='services-box'>
                        <img src={pic3} alt=''></img>
                        <h2>Hot Shave</h2>
                        <p className='mr-bottom services-para'>Duis aute irure dolor in reprehenderit in volupte</p>
                        <p className='mr-bottom services-para'>velit esse cillum dolore fugiat nulla.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services

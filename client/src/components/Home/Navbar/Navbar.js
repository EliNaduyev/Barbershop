import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import {time, fullTime} from '../../../time'
import {checkCookie, getCookie, deleteCookie} from '../../../cookies'
import SideNav from '../../SideNav/SideNav'

const Navbar = () => {
    const [day, setDay] = useState('sun')
    const [workTime, setWorkTime] = useState('')
    const [name, setName] = useState('user')
    
    useEffect(()=>{
        
        let loginAndReg = document.querySelector('.login-reg-links')
        let helloUser = document.querySelector('.user-loggedIn')
        let controlPanel = document.querySelector('.cp')
        let userProfile = document.querySelector('.up')

        let {day} = time()
        console.log(day)
        dayOfWeek(day)
        setName(getCookie('name'))
        if(getCookie('admin') === 'true'){
            controlPanel.style.display = 'block'
            userProfile.style.display = 'none'

        }
        else{
            controlPanel.style.display = 'none'
            userProfile.style.display = 'block'
        }
 
        if(checkCookie('status')){
            helloUser.style.display = 'flex'
            loginAndReg.style.display = 'none'
            
        }else{
            helloUser.style.display = 'none'
            loginAndReg.style.display = 'flex'
            userProfile.style.display = 'none'
        }
    },[])

    const logout = () =>{
        console.log('user logout')
        deleteCookie('name')
        deleteCookie('id')
        deleteCookie('status')
        deleteCookie('admin')
        window.location.replace('/')
    }

    const toggleSideNav = () =>{
        let sideNavbar = document.querySelector('.side-navbar')
        let humburger = document.querySelectorAll('.line')
        sideNavbar.classList.toggle('side-navbar-avtive')

        humburger.forEach((line)=>{
            line.classList.toggle('humburger-active')
        })
    }

    const dayOfWeek = (num) =>{
        let obj = fullTime(num)
        setDay(obj.day)
        setWorkTime(obj.workTime)
    }

    return (
        <div>
            <SideNav/>
            <div className='navbar'>
                <h1 onClick={()=>window.location.replace('/')} className='navbar-logo'>
                    Barber Shop
                </h1>
                <ul className='navbar-ul'>
                    <li className='nav-items'>
                        <a href="./#hero-navigate" className='links'>Home</a>
                    </li>
                    <li className='nav-items'>
                        <a href="./#what-we-do" className='links'>Service</a> 
                    </li>
                    <li className='nav-items'>
                        <a href="./#hours-navigate" className='links'> Hours</a>
                    </li>
                    <li className='nav-items'>
                        <Link className='links cp' to='/admin'>
                            Control Panel
                        </Link>
                    </li>
                    <li className='nav-items'>
                        <Link className='links up' to='/profile'>
                            User Profile
                        </Link>
                    </li>
                </ul>

                <div className='date-and-phone'>
                    <div>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <label> (+972) 54-225-6896 </label>
                    </div>
                    <div className='nav-date'>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <label> {day} - {workTime} </label>
                    </div>
                </div>

                <div className='login-reg-links'>
                    <Link className='links login-link disappear' to='/login'>
                        Login
                    </Link>
                
                    <span className='log-reg-separator disappear'> / </span>
                    <Link className='links disappear' to='/register'>
                        Register
                    </Link>
                </div>

                <div className='user-loggedIn'>
                    <p className='disappear'>Hello, {name} !</p>
                    <button className='disappear' onClick={logout}>Logout</button>
                </div>

            
                <div onClick={toggleSideNav} className="humburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        </div>

    )

}

export default Navbar

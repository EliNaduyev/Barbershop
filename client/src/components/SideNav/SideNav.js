import React, {useState, useEffect} from 'react'
import './SideNav.css'
import { Link } from 'react-router-dom';
import {checkCookie, getCookie, deleteCookie} from '../../cookies'
import {time, fullTime} from '../../time'

const SideNav = () => {

    const [day, setDay] = useState('sun')
    const [workTime, setWorkTime] = useState('')
    const [name, setName] = useState('user')


    useEffect(()=>{
        let loginAndReg = document.querySelector('.side-log-reg')
        let helloUser = document.querySelector('.side-logout')
        let controlPanel = document.querySelector('.side-cp')
        let userProfile = document.querySelector('.side-up')

        let {day} = time()
        console.log(day)
        dayOfWeek(day)
        if(getCookie('name'))
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
            console.log('user logged')
            helloUser.style.display = 'flex'
            loginAndReg.style.display = 'none'
        }else{
            console.log('user not logged')
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

    const dayOfWeek = (num) =>{
        let obj = fullTime(num)
        setDay(obj.day)
        setWorkTime(obj.workTime)
    }

    return (
        <div className='side-navbar'>
            <h1 className=''>Hello, {name} !</h1>
            <div className='side-navbar-info'>
                <div className='side-nav-info'>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <label> (972) 546643231 </label>
                </div>
                <div className='side-nav-info'>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                    <label> {day} - {workTime} </label>
                </div>
            </div>
            <ul className='side-navbar-ul'>
                    <li className=''>
                        <i className="fa fa-home" aria-hidden="true"></i>
                        <a href="./#hero-navigate" className='links'>Home</a>
                    </li>
                    <li className=''>
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <a href="./#what-we-do" className='links'>Service</a> 
                    </li>
                    <li className=''>
                        <i className="fa fa-money" aria-hidden="true"></i>
                        <a href="./#hours-navigate" className='links'> Hours</a>
                    </li>
                    <li id='control-panel' className='nav-items'>
                        <Link className='links side-cp' to='/admin'>
                            Control Panel
                        </Link>
                    </li>
                    <li id='user-profile' className='nav-items'>
                        <Link className='links side-up' to='/profile'>
                            User Profile
                        </Link>
                    </li>
                </ul>
                <div className='side-logout'>       
                    <button className='side-btn' onClick={logout}>Logout</button>
                </div>
                <div className='side-log-reg'>
                    <Link className='side-log-reg-link' to='/login'>
                        Login
                    </Link>
                
                    <span className='side-separator'></span>

                    <Link className='side-log-reg-link' to='/register'>
                        Register
                    </Link>
                </div>
        </div>
    )
}

export default SideNav

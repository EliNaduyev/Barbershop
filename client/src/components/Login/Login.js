import React, {useState, useEffect} from 'react'
import {setCookie} from '../../cookies'
import './Login.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ErrorMsg from '../ErrorMsg/ErrorMsg'
import loadingIcon from '../../assets/loading_icon.gif'
import Navbar from '../Home/Navbar/Navbar'


const Login = (props) => {
    const [email, setEmail] = useState('eli@gmail.com')
    const [pass, setPass] = useState('123')
    const [error, setError] = useState('')

    useEffect(()=>{
        console.log('Login Rendered')

        
    },[])

    const handleLogin = async () => {
        let loading = document.querySelector('.login-loading')
        loading.style.display = 'block'
        
        let userData = {}
        userData.email = email
        userData.pass = pass

        let response = await axios.post('https://barber-appointments.herokuapp.com/login', userData)
        let {id, status, error, name, admin, phone} = response.data
        if(error){
            loading.style.display = 'none'
            console.log(error)
            setError(error)
            setTimeout( ()=>{
                setError('')
            },6000)
        }else{
            
            loading.style.display = 'none'
            setCookie('id', id ,2)
            setCookie('status', status ,2)
            setCookie('name', name ,2)
            setCookie('admin', admin ,2)
            setCookie('phone', phone ,2)

            if(admin)
                props.history.push({ pathname: '/admin' });
            else
                props.history.push({ pathname: '/appointment' });
            console.log('login succeed')
        }
    }

    const loginByPress = (e) =>{
        if(e.key === 'Enter')
            handleLogin()
      }

    return (
        <div className='register'>
            <Navbar/>
            <div className='login-container'>
                <div className='register-form'>
                    <div className='register-info'>
                        <h1>Login</h1>
                        <img src={logo} alt=''></img>
                    </div>
                    <div className='form-container'> 
                    {error !== '' ?  <ErrorMsg info={error}/>
                        
                        : ''}
                        <p>Email:</p>
                        <input type="text" 
                            placeholder='Email...'
                            className='form-container-input'
                            name='email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>Password:</p>
                        <input type="password"
                            placeholder='Password...'
                            className='form-container-input'
                            name='password'
                            onChange={(e) => setPass(e.target.value)}
                            onKeyPress={(e) => loginByPress(e)}
                        />
                        <div className='reg-btn-div'>
                            <button onClick={handleLogin} className='reg-submit'>Login</button>
                        </div> 
                        <div className='new-account-login'>
                            <Link to='/register' className='new-account-link'>
                                Do you have account?
                            </Link> 
                        </div>
                        <div className='login-div'>
                            <img className='login-loading' src={loadingIcon} alt=""/>
                        </div>         
                    </div>
                </div>
                <div className='register-img'></div>
            </div>  
        </div>
    )
}

export default Login

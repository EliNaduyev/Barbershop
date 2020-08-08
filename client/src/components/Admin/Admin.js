import React from 'react'
import './Admin.css'
import Tabs from '../Tabs/Tabs'
import Navbar from '../Home/Navbar/Navbar'

const Admin = () => {
    return (
        <div className='admin'>
            <Navbar/>
            <div className='admin-container'>
                <div className='admin-tabs'>
                    <Tabs/>
                </div>
            </div>   
        </div>
    )
}

export default Admin

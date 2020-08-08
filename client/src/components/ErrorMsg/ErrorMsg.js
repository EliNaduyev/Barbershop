import React from 'react'
import './ErrorMsg.css'

const ErrorMsg = ({info}) => {

    return (
        <div className='error-msg'>
           <i className="fa fa-exclamation-circle" aria-hidden="true"></i>
           <span>{info}</span>
        </div>
    )
}

export default ErrorMsg

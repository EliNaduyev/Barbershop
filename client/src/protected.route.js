import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {checkCookie} from './cookies'

export const ProtectedRoute = ({component: Components, ...rest}) => {

  console.log('Protected route rendred')
  return (
        <Route {...rest} render={props => {
            if(checkCookie('status')) {
              return <Components {...props} />;
            } else {
              return (
                <Redirect from={`${props.location}`} to='/login'/>
              );
            }
        }}
      />
    )
}



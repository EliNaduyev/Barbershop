import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getCookie} from './cookies'

export const AdminRoute = ({component: Components, ...rest}) => {



    console.log('Admin route rendred')
    return (
        <Route {...rest} render={props => {
            if(getCookie('admin') === 'true') {
              return <Components {...props} />;
            } else {
                console.log('not admin')
              return (
                <Redirect from={`${props.location}`} to='/appointment'/>
              );
            }
        }}
      />
    )
}



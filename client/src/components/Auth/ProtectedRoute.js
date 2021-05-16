import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function ProtectedRoute(props){
    const { path, type, redirectTo, component: C, token, ...rest } = props
    return token ? 
        <Route path={path}  render={() => <C type={type} {...rest}/>} /> :
        <Redirect to={redirectTo} />
}
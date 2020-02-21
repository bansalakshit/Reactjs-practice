import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import { Page } from './Page'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Route path='/' exact component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/page' component={Page} />
        </BrowserRouter>
    )
} 
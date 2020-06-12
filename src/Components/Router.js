import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import { Page } from './Page'
import { About } from './About'
import { Contact } from './Contact'
import { Voting } from './Voting'
import { Elections } from './Elections'
import { Updatepassword } from './Update'
import { Results } from './Results'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Page} />
                <Route path='/register' exact component={Register} />
                <Route path='/login' exact component={Login} />
                <Route path='/about' exact component={About} />
                <Route path='/contact' exact component={Contact} />
                <Route path='/update' exact component={Updatepassword} />
                {/* <Route path='/voting' exact component={Voting} /> */}
                <Route path='/election' exact component={Elections} />
                <Route path='/results' exact component={Results} />
            </Switch>
        </BrowserRouter>
    )
} 
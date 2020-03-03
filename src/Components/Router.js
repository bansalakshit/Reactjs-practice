import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Login } from './Login'
import { Register } from './Register'
import { Page } from './Page'
import { About } from './About'
import { Contact } from './Contact'
import { Voting } from './Voting'
import { Election } from './Election'
import { Updatepassword } from './Update'
import { Results } from './Results'

export const Routing = () => {
    return (
        <BrowserRouter>
            {/* <Switch> */}
            <Route path='/page' component={Page} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={Login} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/update' component={Updatepassword} />
            <Route path='/voting' component={Voting} />
            <Route path='/election' component={Election} />
            <Route path='/result' component={Results} />
            {/* </Switch> */}
        </BrowserRouter>
    )
} 
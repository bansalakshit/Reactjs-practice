import React from 'react'
import { List } from 'semantic-ui-react'
import '../Form/css/Login.css'

export const Login = () => {
    return (
        <div className='bg'>
            <h1>Login Form</h1>
            <List>
                <List.Item>
                    Username: <input type='text' name='name' />
                </List.Item>
                <List.Item>
                    Password: <input type='text' name='username' />
                </List.Item>
            </List>
        </div>
    )
}
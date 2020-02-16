import React from 'react'
import { List, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './css/Register.css'

var rootStyle = {
    backgroundColor: '#58CCED',
    color: 'black',
    height: '100vh'
}

export const Register = () => {
    return (
        <div className='register' style={rootStyle}>
            <div className='form'>
                <h1 style={{ fontSize: 40, color: '#00008b' }}> SIGN UP </h1>
                <List>
                    <List.Item>
                        <input type='text' name='name' placeholder='Name' class='textarea' />
                    </List.Item>
                    <List.Item>
                        <input type='text' name='email' placeholder='Email Address' class='textarea' />
                    </List.Item>
                    <List.Item>
                        <input type='text' name='password' placeholder='Password' class='textarea' />
                    </List.Item>
                    <List.Item>
                        <input type='text' name='cpassword' placeholder='Confirm Password' class='textarea' />
                    </List.Item>
                </List>
                <button>
                    <Link to='/login' style={{ textDecoration: 'none' }} >
                        <MenuItem style={{ color: '#00008b', fontSize: 35 }}>Submit</MenuItem>
                    </Link>
                </button>
            </div>
        </div>
    )
}
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
                        <input type='text' name='first' placeholder='Firstname' class='half-textarea half-margin-textarea' required />
                        <input type='text' name='last' placeholder='Lastname' class='half-textarea' required />
                    </List.Item>
                    <List.Item>
                        <input type='email' name='email' placeholder='Email Address' class='full-textarea' required />
                    </List.Item>
                    <List.Item>
                    <input type='number' name='contact' placeholder='Contact No' class='contact-textarea half-margin-textarea' required />
                        <select class='box' required >
                            <option value="gender">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </List.Item>
                    <List.Item>
                        <input type='text' name='adhaar' placeholder='Adhaar No' class='full-textarea' required />
                    </List.Item>
                    <List.Item>
                        <input type='text' name='address' placeholder='Address' class='full-textarea' required />
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
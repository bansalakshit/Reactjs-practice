import React, { useState } from 'react';
import { List, MenuItem } from 'semantic-ui-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import image from '../Images/page.jpg';
import * as axios from 'axios';
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Login.css';

export const Login = () => {
    const [voterId, setVoterId] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async() => {
        let status = true;
        if (voterId === '' || email === '' || password === '') status = false;
        if (status === false) alert('Incomplete Details');
        else {
            const object = {
                voterId,
                email,
                password
            }
            await axios.post('http://localhost:3002/voting/login', object)
                .then(res => {
                    if (res.status === 200) {
                        console.log(object)
                        window.open('http://localhost:3000/voting', '_self');
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert('Incorrect Details..')
                })
        }
    }
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='login'>
                <h1>Login</h1>
                <List>
                    <List.Item>
                        <input
                            value={voterId}
                            onChange={e => setVoterId(e.target.value)}
                            type='text'
                            name='voterId'
                            placeholder='Voter Id'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type='text'
                            name='email'
                            placeholder='Email Address'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            type='password'
                            name='password'
                            placeholder='Password'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <button>
                        <Link style={{ textDecoration: 'none', color: 'black' }} >
                            <MenuItem className='login-button' onClick={handleSubmit}>Login</MenuItem>
                        </Link>
                    </button>
                </List>
            </div>
            <Footer />
        </div>
    )
}

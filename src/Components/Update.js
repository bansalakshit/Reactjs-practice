import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { List, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import image from '../Images/page.jpg'
import * as axios from 'axios';
import '../Css/Page.css';
import '../Css/Navigation.css';
import '../Css/Register.css';
import '../Css/Update.css';

export const Updatepassword = () => {
    const [email, setEmail] = useState('')
    const [current, setCurrent] = useState('')
    const [newPass, setNewPass] = useState('')

    const handleSubmit = async() => {
        let status = true;
        if (email === '' || current === '' || newPass === '') status = false;
        if (status === false) alert('Incomplete Details');
        else {
            const object = {
                email,
                password: current,
                newPassword: newPass
            }
            await axios.post('http://localhost:3002/voting/password', object)
                .then(res => {
                    if (res.status === 200) {
                        console.log(object)
                        alert('Password Updated Successfully..')
                    }
                })
                .catch(err => {
                    console.log(err)
                    alert(err)
                })
            // window.open('http://localhost:3000/register', '_self');
        }
    }
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='update'>
                <h1>Update Password</h1>
                <List>
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
                            value={current}
                            onChange={e => setCurrent(e.target.value)}
                            type='text'
                            name='current'
                            placeholder='Current Password'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <input
                            value={newPass}
                            onChange={e => setNewPass(e.target.value)}
                            type='password'
                            name='new'
                            placeholder='New Password'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <button>
                        <Link style={{ textDecoration: 'none', color: 'black' }} >
                            <MenuItem className='login-button' onClick={handleSubmit}>Update</MenuItem>
                        </Link>
                    </button>
                </List>
            </div>
            <Footer />
        </div>
    )
}
import React, { useState } from 'react';
import { List, MenuItem } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import * as axios from 'axios';
import '../Css/Page.css';
import '../Css/Register.css';

export const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [adhaar, setAdhaar] = useState('')
    const [state, setState] = useState('')

    const handleSubmit = async () => {
        let status = true;
        if (firstname === '' || lastname === '' || email === '' || gender === '' || contact === ''
            || adhaar === '' || state === '') status = false;
        if (status === false) alert('Incomplete Details');
        else {
            const object = {
                firstname,
                lastname,
                email,
                contact,
                gender,
                adhaar,
                state
            }
            const result = await axios.post('http://localhost:4000/', object)
            if (result) {
                console.log(object)
                alert('Registered Successfully..')
            }
        }
    }

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='form'>
                <h1> SIGN UP </h1>
                <List>
                    <List.Item>
                        <input
                            value={firstname}
                            onChange={e => setFirstname(e.target.value)}
                            placeholder='Firstname'
                            type='text'
                            name='firstname'
                            className='half-textarea half-margin-textarea'
                            required />
                        <input
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            type='text'
                            name='lastname'
                            placeholder='Lastname'
                            className='half-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            type='email'
                            name='email'
                            placeholder='Email Address'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <input
                            value={contact}
                            onChange={e => setContact(e.target.value)}
                            type='number'
                            name='contact'
                            placeholder='Contact No'
                            className='contact-textarea half-margin-textarea'
                            required />
                        <select
                            value={gender}
                            onChange={e => setGender(e.target.value)}
                            className='gender-box'
                            required >
                            <option value=''>Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
                            <option value='Others'>Others</option>
                        </select>
                    </List.Item>
                    <List.Item>
                        <input
                            value={adhaar}
                            onChange={e => setAdhaar(e.target.value)}
                            type='text'
                            name='adhaar'
                            placeholder='Adhaar No'
                            className='full-textarea'
                            required />
                    </List.Item>
                    <List.Item>
                        <select
                            value={state}
                            onChange={e => setState(e.target.value)}
                            className='state-box'
                            required >
                            <option value=''>States</option>
                            <option value='Andra Pradesh'>Andra Pradesh</option>
                            <option value='Arunachal Pradesh'>Arunachal Pradesh</option>
                            <option value='Assam'>Assam</option>
                            <option value='Bihar'>Bihar</option>
                            <option value='Chhattisgarh'>Chhattisgarh</option>
                            <option value='Goa'>Goa</option>
                            <option value='Gujarat'>Gujarat</option>
                            <option value='Haryana'>Haryana</option>
                            <option value='Himachal Pradesh'>Himachal Pradesh</option>
                            <option value='Jammu and Kashmir'>Jammu and Kashmir</option>
                            <option value='Jharkhand'>Jharkhand</option>
                            <option value='Karnataka'>Karnataka</option>
                            <option value='Kerala'>Kerala</option>
                            <option value='Madya Pradesh'>Madya Pradesh</option>
                            <option value='Maharashtra'>Maharashtra</option>
                            <option value='Manipur'>Manipur</option>
                            <option value='Meghalaya'>Meghalaya</option>
                            <option value='Mizoram'>Mizoram</option>
                            <option value='Nagaland'>Nagaland</option>
                            <option value='Orissa'>Orissa</option>
                            <option value='Others'>Punjab</option>
                            <option value='Rajasthan'>Rajasthan</option>
                            <option value='Tamil Nadu'>Tamil Nadu</option>
                            <option value='Telagana'>Telagana</option>
                            <option value='Tripura'>Tripura</option>
                            <option value='Uttaranchal'>Uttaranchal</option>
                            <option value='Uttar Pradesh'>Uttar Pradesh</option>
                            <option value='West Bengal'>West Bengal</option>
                        </select>
                    </List.Item>
                </List>
                <button>
                    <Link style={{ textDecoration: 'none', color: 'black' }} >
                        <MenuItem className='form-button' onClick={handleSubmit}>Submit</MenuItem>
                    </Link>
                </button>
            </div>
            <Footer />
        </div>
    )
}
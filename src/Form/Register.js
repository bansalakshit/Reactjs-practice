import React, { useState } from 'react'
import { List, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './css/Register.css'
import * as axios from 'axios'

const rootStyle = {
    backgroundColor: '#58CCED',
    color: 'black',
    height: '100vh'
}

export const Register = () => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [contact, setContact] = useState('')
    const [adhaar, setAdhaar] = useState('')
    const [state, setState] = useState('')
    return (
        <div className='register' style={rootStyle}>
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
                            className='box'
                            required >
                            <option value=''>Gender</option>
                            <option value='Male'>Male</option>
                            <option value='Female'>Female</option>
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
                        <input
                            value={state}
                            onChange={e => setState(e.target.value)}
                            type='text'
                            name='state'
                            placeholder='State'
                            className='full-textarea'
                            required />
                    </List.Item>
                </List>
                <button>
                    <Link to='/login' style={{ textDecoration: 'none' }} >
                        <MenuItem style={{ color: '#00008b', fontSize: 35 }} onClick={e => {
                            const object = {
                                firstname,
                                lastname,
                                email,
                                contact,
                                gender,
                                adhaar,
                                state
                            }
                            console.log(object)
                            axios.post('http://localhost:4000', object)
                            .then(res => console.log('res', res))
                            .catch(err => console.log(err))
                        }}>Submit</MenuItem>
                    </Link>
                </button>
            </div>
        </div>
    )
}
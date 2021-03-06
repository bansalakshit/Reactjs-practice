import React, { useState } from 'react'
import { Navigation } from './Navigation'
import { Footer } from './Footer'
import { List, MenuItem } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import image from '../Images/page.jpg'
import address from '../Images/location.jpg'
import epabx from '../Images/telephone.png'
import email from '../Images/email.png'
import fax from '../Images/fax.jpg'
import controlroom from '../Images/controlroom.jpg'
import * as axios from 'axios'
import '../Css/Page.css'
import '../Css/Contact.css'

export const Contact = () => {
  const [from, setFrom] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async () => {
    let status = true
    if (from === '' || subject === '' || message === '') status = false
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(from))
      alert('Invalid Email Address')
    else {
      if (status === false) alert('Incomplete Details')
      else {
        const object = {
          from,
          subject,
          message
        }
        await axios
          .post('http://localhost:3002/voting/contact', object)
          .then(res => {
            if (res.status === 200) {
              console.log(object)
              alert('Your information has been submitted successfully..')
            }
          })
          .catch(err => {
            console.log(err)
            alert(err)
          })
      }
    }
  }
  const handleCancel = () => {
    setFrom('')
    setSubject('')
    setMessage('')
  }
  return (
    <div>
      <Navigation />
      <img src={image} alt='page' className='image' />
      <p className='p-1'>Contact Us</p>
      <div className='address'>
        <img src={address} alt='Address' className='common-img' />
        <h1 className='common-h1'>Address:</h1>
        <ul>
          <li className='common-p'>
            Election Commission Office, South Delhi, 110001
          </li>
        </ul>
      </div>
      <div className='epabx'>
        <img src={epabx} alt='Epabx' className='common-img' />
        <h1 className='common-h1'>EPABX:</h1>
        <ul>
          <li className='common-p'>9956771141, 9110971732</li>
        </ul>
      </div>
      <div className='email'>
        <img src={email} alt='Email' className='common-img' />
        <h1 className='common-h1'>Email:</h1>
        <ul>
          <li className='common-p'>electioncommissionofindia91@gmail.com</li>
        </ul>
      </div>
      <div className='fax'>
        <img src={fax} alt='Fax' className='common-img' />
        <h1 className='common-h1'>Faxline:</h1>
        <ul>
          <li className='common-p'>23052219, 23052162/63/19/45</li>
        </ul>
      </div>
      <div className='controlroom'>
        <img src={controlroom} alt='ControlRoom' className='common-img' />
        <h1 className='common-h1'>Control Room:</h1>
        <ul>
          <li className='common-p'>23052220, 23052221</li>
        </ul>
      </div>
      <List className='contact-form'>
        <List.Item>
          <font className='contact-from'>From</font>
          <input
            type='text'
            value={from}
            onChange={e => setFrom(e.target.value)}
            className='contact-from-input'
          />
        </List.Item>
        <List.Item className='contact-subject'>
          <font>Subject</font>
          <input
            type='text'
            value={subject}
            onChange={e => setSubject(e.target.value)}
            className='contact-subject-input'
          />
        </List.Item>
        <List.Item className='contact-message'>
          <font>Message</font>
          <textarea
            type='text'
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows='10'
            className='contact-message-input'
          />
        </List.Item>
        <List.Item className='contact-message'>
          <Link style={{ textDecoration: 'none' }}>
            <MenuItem className='contact-button1' onClick={handleSubmit}>
              Submit
            </MenuItem>
          </Link>
          <Link to='/contact' style={{ textDecoration: 'none' }}>
            <MenuItem className='contact-button2' onClick={handleCancel}>
              Cancel
            </MenuItem>
          </Link>
        </List.Item>
      </List>
      <Footer />
    </div>
  )
}

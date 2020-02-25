import React, { useState } from 'react';
import { List, MenuItem } from 'semantic-ui-react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Login.css';
import '../Css/Election.css';

export const Election = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <a href="#">Andaman and Nicobar Islands</a>
                    <a href="#">Andhra Pradesh</a>
                    <a href="#">Arunachal Pradesh</a>
                    <a href="#">Assam</a>
                    <a href="#">Bihar</a>
                    <a href="#">Chandigarh</a>
                    <a href="#">Chhattisgarh</a>
                    <a href="#">Dadra and Nagar Haveli</a>
                    <a href="#">Daman and Diu</a>
                    <a href="#">Delhi</a>
                    <a href="#">Goa</a>
                    <a href="#">Gujarat</a>
                    <a href="#">Haryana</a>
                    <a href="#">Himachal Pradesh</a>
                    <a href="#">Jammu and Kashmir</a>
                    <a href="#">Jharkhand</a>
                    <a href="#">Karnataka</a>
                    <a href="#">Kerala</a>
                    <a href="#">Lakshadweep</a>
                    <a href="#">Madhya Pradesh</a>
                    <a href="#">Maharashtra</a>
                    <a href="#">Manipur</a>
                    <a href="#">Meghalaya</a>
                    <a href="#">Mizoram</a>
                    <a href="#">Nagaland</a>
                    <a href="#">Orissa</a>
                    <a href="#">Pondicherry</a>
                    <a href="#">Punjab</a>
                    <a href="#">Rajasthan</a>
                    <a href="#">Sikkim</a>
                    <a href="#">Tamil Nadu</a>
                    <a href="#">Telangana</a>
                    <a href="#">Tripura</a>
                    <a href="#">Uttar Pradesh</a>
                    <a href="#">Uttarakhand</a>
                    <a href="#">West Bengal</a>
                </div>
            </div>
            <div className='election'>
                <h1>Upcoming Elections</h1>
                <hr className='line1' />
                <hr className='line2' />
                <hr className='line3' />
                <div className='election-grid'>
                    <p>House/State</p>
                    <p>From</p>
                    <p>To</p>
                    <p>Seat</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

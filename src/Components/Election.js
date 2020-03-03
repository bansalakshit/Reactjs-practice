import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import Search from './Search';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Login.css';
import '../Css/Election.css';



export const Election = () => {
    const [data, setData] = useState('')

    const handleCallback = (res) => {
        console.log(res)
    }

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
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
            <div className='search'>
                <Search callback={handleCallback} />
            </div>
            <Footer />
        </div>
    )
}

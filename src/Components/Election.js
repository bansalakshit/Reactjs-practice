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
    const array = [];
    const [data, setData] = useState(array)

    const handleCallback = (res) => {
        for (let value of res) {
            array.push(value)
        }
        setData(array)
    }

    const result = () => {
        if (data.length != 0) {
            data.map(res => {
                <>
                    <p>{res.state}</p>
                    <p>{res.from}</p>
                    <p>{res.to}</p>
                    <p>{res.seat}</p>
                </>
            })
        }
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
                    {result}
                </div>
            </div>
            <div className='search'>
                <Search callback={handleCallback} />
            </div>
            <Footer />
        </div>
    )
}

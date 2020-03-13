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
    const [data, setData] = useState([])

    const handleCallback = (res) => {
        console.log("chala", res);

        for (let value of res) {
            array.push(value)
        }
        setData(array)
        console.log("data: ", data)
    }

    const result = () => {
        if (data.length !== 0) {
            data.map(res => {
                return (
                    <div>
                        <p>{res.state}</p>
                        <p>{res.from}</p>
                        <p>{res.to}</p>
                        <p>{res.seat}</p>
                    </div>
                )
            })
        }
    }
    console.log("aditya")

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='election'>
                <h1>Upcoming Elections</h1>
                <hr className='line1' />
                <hr className='line2' />
                {/* <hr className='line3' /> */}


                {data.map(res => {
                    return (
                        <div className='election-grid'>
                            <p>{res.state}</p>
                            <p>{res.from}</p>
                            <p>{res.to}</p>
                            <p>{res.seat}</p>
                        </div>)

                }
                )}

            </div>
            <div className='search'>
                <Search callback={handleCallback} data={data} />
            </div>
            <Footer />
        </div>
    )
}

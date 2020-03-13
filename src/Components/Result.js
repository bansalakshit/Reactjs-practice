import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Results.css';
import { Results } from './Results';

export const Result = () => {
    const handleCallback = (res) => {
        console.log(res)
    }

    const handleData = () => {
        
    }
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <h1 className='results-h1'><u>Result</u></h1>
            <Results callback={handleCallback} />
            
            <Footer />
        </div >
    )
}
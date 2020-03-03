import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Results.css';

export const Results = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <h1 className='results-h1'><u>Results</u></h1>
            <div className='results-grid'>
                <p>Northern region</p>
                <p>Central region</p>
                <p>Western region</p>
                <p>Eastern region</p>
                <p>Southern region</p>
                <p>Noretheastern region</p>
                <p>Union Territories</p>
            </div>
            <hr className='results-hr-line1' />
            <hr className='results-hr-line2' />
            <hr className='results-hr-line3' />
            <hr className='results-hr-line4' />
            <hr className='results-hr-line5' />
            <hr className='results-hr-line6' />
            <hr className='results-hr-line7' />
            <Footer />
        </div >
    )
}
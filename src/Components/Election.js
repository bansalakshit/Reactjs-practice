import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import image from '../Images/page.jpg'
import aap from '../Images/aap.jpg'
import BJP from '../Images/BJP.jpg'
import Congress from '../Images/Congress.jpg'
import arrow from '../Images/arrow.jpeg'
import '../Css/Page.css';
import '../Css/Navigation.css';
import '../Css/Election.css';

export const Election = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='grid'>
                <p>1.</p>
                <p>BJP</p>
                <img src={BJP} />
                <img src={arrow} />
                <button><Link style={{ textDecoration: 'none', color: 'black' }}>Click here</Link></button>
                <p>2.</p>
                <p>CONGRESS</p>
                <img src={Congress} />
                <img src={arrow} />
                <button><Link style={{ textDecoration: 'none', color: 'black' }}>Click here</Link></button>
                <p>3.</p>
                <p>AAM ADMI PARTY</p>
                <img src={aap} />
                <img src={arrow} value={arrow} />
                <button><Link style={{ textDecoration: 'none', color: 'black' }}>Click here</Link></button>
            </div>
            <Footer />
        </div>
    )
}
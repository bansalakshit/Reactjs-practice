import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg'
import '../Css/Page.css';
import '../Css/Navigation.css';

export const Updatepassword = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <Footer />
        </div>
    )
}
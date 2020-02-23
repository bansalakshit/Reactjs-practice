import React from 'react';
import insta from '../Images/insta.jpg';
import fb from '../Images/fb.jpg';
import twitter from '../Images/twitter.jpg';
import linkedin from '../Images/linkedin.jpg';
import '../Css/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const instafunction = () => {
        const url = 'https://instagram.com';
        window.open(url, '_blank');
    }
    const fbfunction = () => {
        const url = 'https://fb.com';
        window.open(url, '_blank');
    }
    const twitterfunction = () => {
        const url = 'https://twitter.com';
        window.open(url, '_blank');
    }
    const linkedinfunction = () => {
        const url = 'https://linkedin.com';
        window.open(url, '_blank');
    }
    return (
        <div>
            <Link><img src={insta} alt='insta' className='insta' onClick={instafunction} /></Link>
            <Link><img src={fb} alt='fb' className='fb' onClick={fbfunction} /></Link>
            <Link><img src={twitter} alt='twitter' className='twitter' onClick={twitterfunction} /></Link>
            <Link><img src={linkedin} alt='linkedin' className='linkedin' onClick={linkedinfunction} /></Link>
        </div>
    )
}

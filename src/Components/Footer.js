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










// Andaman and Nicobar Islands
// Andhra Pradesh    
// Arunachal Pradesh
// Assam
// Bihar
// Chandigarh
// Chhattisgarh
// Dadra and Nagar Haveli
// Daman and Diu
// Delhi
// Goa
// Gujarat
// Haryana
// Himachal Pradesh
// Jammu and Kashmir
// Jharkhand
// Karnataka
// Kerala
// Lakshadweep
// Madhya Pradesh
// Maharashtra
// Manipur
// Meghalaya
// Mizoram
// Nagaland
// Odisha
// Puducherry
// Punjab
// Rajasthan
// Sikkim
// Tamil Nadu
// Telangana
// Tripura
// Uttar Pradesh
// Uttarakhand
// West Bengal

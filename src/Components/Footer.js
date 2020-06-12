import React from 'react';
import insta from '../Images/insta.jpg';
import fb from '../Images/fb.jpg';
import linkedin from '../Images/linkedin.jpg';
import '../Css/Footer.css';
import { Link } from 'react-router-dom';

export const Footer = () => {
    const instafunction = () => {
        const url = 'https://www.instagram.com/election_commission_india/';
        window.open(url, '_blank');
    }
    const fbfunction = () => {
        const url = 'https://www.facebook.com/electioncommissionofindia.india';
        window.open(url, '_blank');
    }
    const linkedinfunction = () => {
        const url = 'https://www.linkedin.com/in/election-commission-8842aa1b0';
        window.open(url, '_blank');
    }
    return (
        <div>
            <Link><img src={insta} alt='insta' className='insta' onClick={instafunction} /></Link>
            <Link><img src={fb} alt='fb' className='fb' onClick={fbfunction} /></Link>
            <Link><img src={linkedin} alt='linkedin' className='linkedin' onClick={linkedinfunction} /></Link>
        </div>
    )
}

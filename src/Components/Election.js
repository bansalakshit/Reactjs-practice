import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
import { MenuItem } from 'semantic-ui-react';
import image from '../Images/page.jpg'
import aapImage from '../Images/aap.jpg'
import bjpImage from '../Images/BJP.jpg'
import congressImage from '../Images/Congress.jpg'
import arrow from '../Images/arrow.png'
import '../Css/Page.css';
import '../Css/Navigation.css';
import '../Css/Election.css';

export const Election = () => {

    const [BJP] = useState('BJP')
    const [Congress] = useState('Congress')
    const [AAP] = useState('AAP')

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='grid'>
                <p>1.</p>
                <p>BJP</p>
                <img src={bjpImage} alt='BJP' className='party-image' />
                <img src={arrow} alt='BJP' className='arrow-image' />
                <button>
                    <Link style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem value='BJP' onClick={() => {
                            console.log(BJP)
                            alert('Thank you for choosing BJP Party..')
                        }}>
                            Click here
                        </MenuItem>
                    </Link>
                </button>
                <p>2.</p>
                <p>CONGRESS</p>
                <img src={congressImage} alt='Congress' className='party-image' />
                <img src={arrow} alt='Congress' className='arrow-image' />
                <button>
                    <Link style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem onClick={() => {
                            console.log(Congress)
                            alert('Thank you for choosing CONGRESS Party..')
                        }}>
                            Click here
                        </MenuItem>
                    </Link>
                </button>
                <p>3.</p>
                <p>AAM ADMI PARTY</p>
                <img src={aapImage} alt='AAP' className='party-image' />
                <img src={arrow} alt='AAP' className='arrow-image' />
                <button>
                    <Link style={{ textDecoration: 'none', color: 'white' }}>
                        <MenuItem onClick={() => {
                            console.log(AAP)
                            alert('Thank you for choosing AAM ADMI PARTY Party..')
                        }}>
                            Click here
                        </MenuItem>
                    </Link>
                </button>
            </div>
            <Footer />
        </div>
    )
}
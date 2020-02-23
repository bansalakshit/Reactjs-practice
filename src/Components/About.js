import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg'
import '../Css/Page.css'
import '../Css/About.css' 

export const About = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <p className='para-1'>About Us</p>
            <p className='para-2'>A Constitutional Body</p>
            <p className='para-3'>India is a Socialist, Secular, Democratic Republic and the largest democracy in the World. The modern Indian nation state
            came into existence on 15th of August 1947. Since then free and fair elections have been held at regular intervals as per
            the principles enshrined in the Constitution, Electoral Laws and System.<br/>
            The Constitution of India has vested in the Election Commission of India the superintendence, direction and control of the
            entire process for conduct of elections to Parliament and Legislature of every State and to the offices of President and
            Vice-President of India . Read more</p>
            <Footer />
        </div>
    )
} 
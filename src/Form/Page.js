import React from 'react'
import image from './images/page.jpg'
import './css/Page.css'

export const Page = () => {
    return (
        <div>
            <img src={image} alt='page' className='image' />
            <img src={image} alt='page' className='image' />
        </div>
    )
}
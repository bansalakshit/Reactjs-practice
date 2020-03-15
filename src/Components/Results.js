import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Results.css';
import { NavLink } from 'react-router-dom';
import { Northern, Central, Western, Eastern, Union, Northeastern, Southern } from '../helpers';

export const Results = (props) => {
    const handleNorthern = () => {
        props.callback(Northern)
    }
    // const handleCentral = () => {
    //     props.callback(Central)
    // }
    // const handleWestern = () => {
    //     props.callback(Western)
    // }
    // const handleEastern = () => {
    //     props.callback(Eastern)
    // }
    // const handleSouthern = () => {
    //     this.props.callback(Southern)
    // }
    // const handleNoretheastern = () => {
    //     this.props.callback(Northeastern)
    // }
    // const handleUnion = () => {
    //     this.props.callback(Union)
    // }
    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <h1 className='results-h1'><u>Results</u></h1>
            <div className='results-grid'>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleNorthern} to='/result'><p>Northern region</p></NavLink>
                {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleCentral} to='/result'><p>Central region</p></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleWestern} to='/result'><p>Western region</p></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleEastern} to='/result'><p>Eastern region</p></NavLink> */}
                {/* <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleSouthern} to='/result'><p>Southern region</p></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleNoretheastern} to='/result'><p>Noretheastern region</p></NavLink>
                <NavLink style={{ textDecoration: 'none', color: 'black' }} onClick={handleUnion} to='/result'><p>Union Territories</p></NavLink> */}
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
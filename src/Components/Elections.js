import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Array } from '../helpers'
import * as moment from 'moment'
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Login.css';
import '../Css/Election.css';

export const Elections = () => {

    const handleStates = () => {
        const States = Array.filter(res => moment(res.date) < moment() && moment(res.date).add(1, 'days') > moment().valueOf())
        States.forEach(element => element.date = moment(element.date).format("MMM Do YY"))
        return States
    }

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='election'>
                <h1>Upcoming Elections</h1>
                <p className='p1'>State</p>
                <p className='p2'>Date</p>
                <hr className='line1' />
                <marquee className="marquee1" direction="up" >
                    <div>
                        {
                            <BootstrapTable data={handleStates()}>

                                <TableHeaderColumn isKey
                                    dataField='state'
                                    tdStyle={
                                        {
                                            paddingTop: '20px',
                                            paddingLeft: '105px'
                                        }} />

                                <TableHeaderColumn
                                    dataField='date'
                                    tdStyle={
                                        {
                                            paddingTop: '20px',
                                            paddingLeft: '380px',
                                        }} />

                            </BootstrapTable>
                        }
                    </div>
                </marquee>

            </div>
            <Footer />
        </div>
    )
}

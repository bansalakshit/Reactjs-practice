import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import Search from './Search';
import image from '../Images/page.jpg';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Login.css';
import '../Css/Election.css';

export const Election = () => {
    const array = [];
    const [data, setData] = useState([])
    const obj = {
        state: 'State',
        from: 'From',
        to: 'To',
        seat: 'Seat'
    }
    const handleCallback = (res) => {
        console.log("chala", res);

        for (let i = 0; i < res.length + 1; i++) {
            if (i === 0) {
                array.push(obj)
            } else {
                array.push(res[i - 1])
            }
        }
        setData(array)
        console.log("data: ", data)
    }

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <div className='election'>
                <h1>Upcoming Elections</h1>
                <hr className='line1' />

                <div className='abc'  >
                    {
                        <BootstrapTable data={data} className='election-grid'>

                            <TableHeaderColumn isKey
                                dataField='state'
                                dataAlign='center'
                                tdStyle={
                                    {
                                        paddingLeft: '105px'
                                    }}
                                className='grid-item' />

                            <TableHeaderColumn
                                dataField='from'
                                dataAlign='center'
                                tdStyle={
                                    {
                                        paddingLeft: '60px',
                                        paddingTop: '10px'
                                    }}
                                className='grid-item' />

                            <TableHeaderColumn
                                dataField='to'
                                dataAlign='center'
                                tdStyle={
                                    {
                                        paddingLeft: '110px',
                                        paddingTop: '10px'
                                    }}
                                className='grid-item' />

                            <TableHeaderColumn
                                dataField='seat'
                                dataAlign='center'
                                tdStyle={
                                    {
                                        paddingLeft: '140px',
                                        paddingTop: '10px'
                                    }}
                                width="30%"
                                className='grid-item' />

                        </BootstrapTable>
                    }
                </div>

            </div>
            <div className='search'>
                <Search callback={handleCallback} data={data} />
            </div>
            <Footer />
        </div>
    )
}

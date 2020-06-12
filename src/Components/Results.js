import React, { useState } from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import * as axios from 'axios';
import Search from './Search';
import image from '../Images/page.jpg';
import '../Css/Page.css';
import '../Css/Register.css';
import '../Css/Results.css';

export const Results = () => {
    const [state, setState] = useState('----------------------')
    const [bjp, setBjp] = useState('---')
    const [congress, setCongress] = useState('---')
    const [other, setOther] = useState('---')
    const [party, setParty] = useState('--------- has won.')

    const handleCallback = async (res) => {

        await axios.post('http://localhost:3002/voting/stateResult', { state: res.value })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.state)
                    setState(res.data.state)
                    setBjp(res.data.BJP)
                    setCongress(res.data.congress)
                    setOther(res.data.other)
                    if (res.data.BJP > res.data.congress && res.data.BJP > res.data.other) setParty('BJP has won.')
                    else if (res.data.congress > res.data.BJP && res.data.congress > res.data.other) setParty('CONGRESS has won.')
                    else if (res.data.other > res.data.BJP && res.data.other > res.data.congress) setParty('OTHER has won.')
                    else if (res.data.BJP === res.data.congress && res.data.BJP > res.data.other) setParty('Tie between BJP and CONGRESS.')
                    else if (res.data.BJP === res.data.other && res.data.BJP > res.data.congress) setParty('Tie between BJP and OTHER.')
                    else if (res.data.congress === res.data.other && res.data.congress > res.data.BJP) setParty('Tie between CONGRESS and OTHER.')
                    else if (res.data.BJP === res.data.congress && res.data.congress  === res.data.other) setParty('Its a tie.')
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        <div>
            <Navigation />
            <img src={image} alt='page' className='image' />
            <h1 className='state'>{state}</h1>
            <div className='party'>
                <h1>Result</h1>
                <p className='bjp'>BJP</p>
                <p className='congress'>CONGRESS</p>
                <p className='other'>OTHER</p>
                <p className='bjp1'>{bjp}</p>
                <p className='congress1'>{congress}</p>
                <p className='other1'>{other}</p>
            </div>
            <p className='won'>{party}</p>
            <div className='search'>
                <Search callback={handleCallback}/>
            </div>
            <Footer />
        </div>
    )
}

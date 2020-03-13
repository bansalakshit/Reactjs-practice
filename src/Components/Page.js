import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import image from '../Images/page.jpg';
import ashok from '../Images/ashok.jpg';
import sunil from '../Images/sunil.jpg';
import sushil from '../Images/sushil.jpg';
import '../Css/Page.css';

export const Page = () => {
    return (
        <div>
            <Navigation />
            <div>
                <img src={image} alt='page' className='image' />
                <marquee className="marquee" direction="up" >
                    <div>Election Commission (EC) is a constitutional organization that administers the election
                        process in India. The Lok Sabha , Rajya Sabha , State legislatures, and offices of President and vice President
                        elections falls under the ambit of the Election Commission.<br />
                        The commission in order to curb the channelizing of black money through political route decided to strike more
                        than 400 parties off ‘the income tax exemption on contributions and donations’ list.
                        India has nearly 1900 political parties but over 400 never fought any elections. The commission suspected these
                        parties to be conduits of turning black money into white.<br />
                        The commission works under Article 324 of Constitution of India. It was set up back in 1950. Under Election
                        Commission Act, 1993 it is headed by three members, Chief Election Commissioner and two other Election
                        Commissioners.
                    </div>
                </marquee>
                <div className='commission'>
                    <h1>HON'BLE COMMISSION</h1>
                    <img src={sunil} alt='page' className='sunil' />
                    <div className='sunil-desc'>
                        <p className='para1'>Shri Sunil Arora</p>
                        <p>(Cheif Election Commissioner)</p>
                    </div>
                    <img src={sushil} alt='page' className='sushil' />
                    <div className='sushil-desc'>
                        <p className='para1'>Shri Sushil Chandra</p>
                        <p>(Election Commissioner)</p>
                    </div>
                    <img src={ashok} alt='page' className='ashok' />
                    <div className='ashok-desc'>
                        <p className='para1'>Shri Ashok Lavasa</p>
                        <p>(Election Commissioner)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

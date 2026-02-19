import React from 'react';

function Brokerage() {
    return ( 
     <div className='container '>
            <div className="row mt-5 p-5 text-center border-top">
                <div className="col-8 p-4 ">
                  <a style={{textDecoration:"none"}} href="#">
                    <h3 className='fs-5'> Brokerage calculator </h3> 
                </a>
                <ul className='mt-3 text-muted' style={{textAlign:"left", lineHeight:"2.5", fontSize:"15px"}}>
                    <li className='text-muted'> Calculate your brokerage charges for equity, commodity, currency, and mutual fund trades. </li>
                    <li className='text-muted'> Understand how much you pay towards brokerage and other charges on each trade you make. </li>
                    <li className='text-muted'> Plan your trades better by knowing the exact charges you will incur. </li>
                    <li className='text-muted'> Call & and Trade and auto-squareoff: Additional charge of rs.50 + GST per order. </li>
                    <li className='text-muted'> Digital contract notes will be sent via e-mail. </li>
                    
                </ul>
                </div>
                <div className="col-4 p-4">
                    <a style={{textDecoration:"none"}} href="">
                        <h3 className='fs-5'> List of charges </h3>
                    </a>
                </div>
            </div>
    </div>
     );}

export default Brokerage;
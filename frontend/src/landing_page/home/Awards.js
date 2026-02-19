import React from 'react';

function Awards() {
    return (<div className="container p-5">
        <div className="row">
            <div className="col-6">
                <img src="media/images/largestBroker.svg" alt="Award Image" />
            </div>
            <div className="col-6">
                <h1> Largest stick broker in India</h1>
                <p className='mb-5 mt-5 text-muted'>1.5+ Crore Zerodha clients contribute to over 15% of 
                        all retail order volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Futures and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                    
                        <div className='col-6'>
                            <li><p> Stocks & IPOs </p> </li>
                            <li><p> Direct mutual Funds </p> </li>
                            <li><p> Bonds and Govt. securities </p> </li>
                        </div>
                         <img className='pr-5 pl-5' src='media/images/presslogos.png' alt='press-logos'/>
                    </div>
               
            </div>
        </div>
    </div>);
}

export default Awards;
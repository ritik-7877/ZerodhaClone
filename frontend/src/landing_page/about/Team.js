import React from 'react';

function Team() {
    return (
         <div className='container'>
            <div className="row mt-5">
                <div className='col-6'></div>
                <div className='col-6'>
                <h1 className='fs-3  text-muted'>
                    People
                </h1>
                </div>
            </div>
            <div className='row text-muted fs-6' style={{lineHeight:'1.8',fontSize:"normal"}} >
                <div className="col-6 p-5 text-center"> 
                    <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%", width:"70%"}}/>
                    <h4 className='mt-5'> Nitin Kamath </h4>
                    <h6> Founder, CEO </h6>
                </div>
                <div className="col-6 pt-5"> 
                    <p> 
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader.
                        Today, Zerodha has changed the landscape of the Indian broking industry.
                    </p>
                    <p>
                        He is a member of the SEBI Secondary Market Advisory Committee (SMAC) 
                        and the Market Data Advisory Committee (MDAC).
                       
                    </p>
                    <p>
                        Playing basketball is his zen.
                    </p>
                    <p>
                        Connect on  <a href="#" style={{textDecoration:"none"}}> Homepage </a> / <a href="#" style={{textDecoration:"none"}}> TradingQnA </a> / <a href="#" style={{textDecoration:"none"}}> Twitter </a> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Team
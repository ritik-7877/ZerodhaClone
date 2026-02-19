import React from 'react';

function Pricing() {
    return (
        <div className="container p-5 mb-5">
            <div className="row">
                <div className="col-5">
                    <h1 className='mb-3 fs-2'> Unbeatable pricing </h1>
                    <p> We poineered the concenpt of discount broking and pricing transparency in India. Flat fees and no hidden charges. </p>
                    <a href="#" style={{ textDecoration: "none" }}> See pricing <i class="fa-solid fa-arrow-right-long"></i> </a>
                </div>
                <div className="col-2"> </div>
                <div className="col-5">
                    <div className='row text-center border-dark rounded'>
                        <div className='col-6 p-3 border '>
                            <h2 className='mb-3'> ₹0 </h2>
                            <p> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className='col-6 p-3 border '>
                            <h2 className='mb-3'> ₹20 </h2>
                            <p> Intraday & F&O </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
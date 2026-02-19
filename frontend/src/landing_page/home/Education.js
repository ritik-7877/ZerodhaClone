import React from 'react';

function Education() {
    return (
        <div className="container pt-5 mt-5">
            <div className='row'>
                <div className='col-6 text-center '>
                    <img src='media/images/education.svg' alt='Education Hero' style={{width: "75%"}}/>
                </div>

                <div className='col-1'></div>
               
                <div className="col-5">
                    <h1 className='mb-3 fs-3'> Free and open market education</h1>
                    <div className='col pb-3 pt-3'>
                    <p className='mb-3'>  Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading. </p>
                    <a href="#" style={{ textDecoration: "none" }} className='my-5'>Varsity<i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className='col pb-3 pt-3'>
                    <p className='mb-3'> TradingQ&A, the most active trading and investment community in India for all your market related queries. </p>
                    <a href="#" style={{ textDecoration: "none" }}> TradingQ&A <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>);
}

export default Education;
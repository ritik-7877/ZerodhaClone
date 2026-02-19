import React from 'react';

function CreateTicket() {
    return (<div className="create-ticket">
        <div className="row p-5 mt-5 mb-5">
            <h1 className='fs-2'>To create a ticket, select a relevant category topic</h1>
            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''><i class="fa-solid fa-circle-plus"></i> Account Opening </h4>
                <ul className='mt-4' >
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Resident individual</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Minor</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Non Resident Indian (NRI)</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Company, Partnership, HUF and LLP</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Glossary</a></li>
                </ul>
                
            </div>
            
            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''> <i class="fa-regular fa-circle-user"></i> Your Zerodha Account </h4>
                <ul className='mt-4'>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Your Profile</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Account modification</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Client Master Report (CMR) and Depository Participant(DP)</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Nomination</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Transfer and conversion of securities</a></li>
                </ul>
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''>  <i class="fa-solid fa-bars-staggered"></i> Kite </h4>
                <ul className='mt-4' >
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>IPO </a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Trading FAQs</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Margin Trading Facility (MTF) AND Margins</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Charts and orders</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Alerts and Nudges</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>General</a></li>
                </ul>
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''> <i class="fa-solid fa-indian-rupee-sign"></i> Funds </h4>
                <ul className='mt-4' >
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Add money </a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Withdraw money</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Add abank accounts</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>eMandates</a></li>
                </ul>
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''> <i class="fa-solid fa-terminal"></i> Console </h4>
                <ul className='mt-4' >
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Portfolio </a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Corporate actions</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Funds statement</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Reports</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Profile</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Segments</a></li>
                </ul>
            </div>

            <div className="col-4 p-5 mt-2 mb-2">
                <h4 className=''> <i class="fa-solid fa-coins"></i> Coin </h4>
                <ul className='mt-4' >
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Mutual funds</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>National Pension Scheme (NPS)</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Features on Coin</a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>Payments and Orders </a></li>
                    <li className='fs-6'><a href="#" style={{textDecoration: 'none', lineHeight:"3"}}>General</a></li>
                </ul>
            </div>
        </div>
    </div>);
}

export default CreateTicket;
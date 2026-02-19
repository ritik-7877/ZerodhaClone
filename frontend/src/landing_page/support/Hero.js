import React from 'react';

function Hero() {
    return (<div className="container-fluid bg-light p-5  mb-5">
        <div className='row'>
            <div className="d-flex justify-content-between align-items-center ">
            <h1 className="text-muted"> Support Portal </h1>
            <button className="btn btn-primary">My Ticket</button>
            </div>
            <input type="text" placeholder="Eg: How do I open my account, How do i activate F&Q..." className="p-3 mt-5"></input>
        </div>
    </div>);
}

export default Hero;

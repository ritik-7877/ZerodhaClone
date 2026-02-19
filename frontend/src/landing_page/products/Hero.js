import React from 'react';

function Hero() {
    return (
        <div className='container'>
            <div className="row text-center m-5 p-5 border-bottom">
                <h2> Zerodha Products </h2>
                <p className="fs-5"> Sleek, modern, and intuitive trading platforms </p>
                <p> Check out our <a href="#" style={{textDecoration:"none"}}>investment offerings → </a> </p>
            </div>
        </div>
    );
}

export default Hero;
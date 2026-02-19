import React from 'react';

function RightSection({
    imageUrl,
    productName,
    productDesription,
    learnMore,
}) {
    return (<div className='container'>
            <div className="row text-muted">
                <div className="col-5 p-5 d-flex flex-column justify-content-center">
                    <h1 className='fs-3 mb-5'> {productName} </h1>
                    <p> {productDesription} </p>
                    <a href={learnMore} style={{textDecoration:"none"}}> Learn More </a>
                </div>
                <div className="col-1"></div>
                 <div className="col-6 p-5">
                    <img src={imageUrl} style={{width:"90%"}}/>
                </div>
            </div>

        </div> );
}

export default RightSection;
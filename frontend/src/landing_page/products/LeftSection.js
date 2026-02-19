import React from 'react';

function LeftSection({
    imageUrl,
    productName,
    productDesription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className='container'>
            <div className="row text-muted">
                <div className="col-6 p-5">
                    <img src={imageUrl} />
                </div>
                <div className="col-1 "></div>
                <div className="col-5 p-5 d-flex flex-column justify-content-center">
                    <h1 className='fs-3 mb-5'> {productName} </h1>
                    <p> {productDesription} </p>
                    <a href={tryDemo} style={{textDecoration:"none"}}> Try Demo </a>
                    <a href={learnMore} style={{textDecoration:"none"}}> Learn More </a>
                    <div className="d-flex gap-3 mt-3">
                        <a href={googlePlay} style={{textDecoration:"none"}}><img src="media/images/googlePlayBadge.svg" /></a>
                        <a href={appStore} style={{textDecoration:"none"}}> <img src="media/images/appstoreBadge.svg"/> </a>
                    </div>

                </div>
            </div>
        </div>
     );
}

export default LeftSection;
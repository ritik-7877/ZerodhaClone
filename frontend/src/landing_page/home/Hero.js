import React from 'react';

function Education() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                    <img src='media/images/homeHero.png' alt='Hero Image' />
                    <h1> Invest in everything </h1>
                    <p> Online platform to invest in stocks, derivatives, matual funds, and more </p>
                    <div className="row text-center mt-5 mb-5">
                    <div className="col-12">
                        <Link to="/signup">
                            <button
                                className="btn btn-primary fs-5 px-4 mx-auto d-block"
                            >
                                Signup Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education
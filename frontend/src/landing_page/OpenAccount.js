import React from 'react';
import {Link} from "react-router-dom"

function OpenAccount() {
    return (
        <div className="container p-5">
            <div className="row text-center">
                <h1 className="fs-3 m-3 text-dark"> Open a Zerodha account </h1>
                <p className="mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <div className="row text-center mt-5 mb-5">
                    <div className="col-12">
                        <Link to="/signup">
                            <button
                                className="btn btn-primary fs-5 px-4 mx-auto d-block"
                            >
                                Sign up now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>);
}

export default OpenAccount;
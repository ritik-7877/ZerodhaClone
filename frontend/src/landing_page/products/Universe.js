import React from 'react';

function Universe() {
    return (
        <div className='container'>
            <div className="row text-center p-5">
                <p className="fs-4"> Want to know more about our technology stack? Check out the <a href="https://zerodha.tech" style={{ textDecoration: "none" }}>Zerodha.tech</a> blog. </p>
                <div className='col-12 mt-5'>
                    <h2 className='fs-3 mb-4'> The Zerodha Universe </h2>
                    <p>Extend your trading and investment experience even further with our partner platforms</p>
                </div>
                <div />
                <div className='row text-center m-4 g-4'>
                    <div className='col-4 '>
                        <img src="media/images/zerodhaFundhouse.png" style={{ width: "60%" }} />
                    </div>
                    <div className='col-4'>
                        <img src="media/images/sensibullLogo.svg" style={{ width: "60%" }} />
                    </div>
                    <div className='col-4'>
                        <img src="media/images/tijori.svg" style={{ width: "60%" }} />
                    </div>
                    <div className='col-4'>
                        <p className="text-small text-muted"> Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.
                        </p>
                    </div>
                    <div className='col-4 '>
                        <p className="text-small fs-6 text-muted"> Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </div>
                    <div className='col-4 '>
                        <p className="text-small text-muted"> Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more. </p>
                    </div>
                </div>
                <div className='row text-center m-4 g-4'>
                    <div className='col-4'>
                        <img src="media/images/streakLogo.png" style={{ width: "60%" }} />
                    </div>
                    <div className='col-4'>
                        <img src="media/images/smallcaseLogo.png" style={{ width: "60%" }} />
                    </div>
                    <div className='col-4'>
                        <img src="media/images/dittoLogo.png" style={{ width: "50%" }} />
                    </div>
                    <div className='col-4'>
                        <p className="text-small text-muted"> Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling. </p>
                    </div>
                    <div className='col-4'>
                        <p className="text-small text-muted"> Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding. </p>
                    </div>

                    <div className='col-4'>
                        <p className="text-small text-muted"> Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs. </p>
                    </div>

                </div>
                <div className='col-12 mt-5 mb-5'>
                    <button className="p-2 m-auto fs-5 btn btn-primary" style={{ width: "20%" }}>Sign up for Free</button>
                </div>
            </div>
        </div>
    );
}

export default Universe;
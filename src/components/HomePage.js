import React, { useState, useRef }from 'react'

function HomePage(props) {
    return (
        <div>
            <div className="hero">
                <div className="heroTxtCont">
                    <h1>Interactive Concert Experience</h1>
                    <p class="mb-3">Experience your favourite artists like never <br /> before and from the comfort of your own home.</p>
                    <div className="btn btn-1" onClick={props.moveToPricing} >Try It Now</div>
                </div>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active w-100">
                            <div className="d-flex container-fluid mx-auto image1 banner heroImg">
                            </div>
                        </div>
                        <div class="carousel-item w-100">
                            <div className="d-flex container-fluid mx-auto image2 banner heroImg">
                            </div>
                        </div>
                        <div class="carousel-item w-100">
                            <div className="d-flex container-fluid mx-auto image3 banner heroImg">
                            </div>
                        </div>
                        
                    </div>
                    {/* <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a> */}
                    </div>
            </div>
        </div>
    )
}

export default HomePage

import React, { useState, useRef } from 'react';

function Yellow() {
    const [ revealImg, setRevealImg ] = useState( false );
    function showImg() {
        if(revealImg===false){
            setRevealImg(true)
        } else{
            setRevealImg(false)
        }
    }

    return (
        <div className="backg22 mx-auto height100">
            <div className="wrapper">
                <div className="backgroundSource">
                </div>
                <div className={revealImg===false ? "revealImg" : "revealImg hideSlow"}></div>
                <div className="yellowBckg"></div>
                <div className="revealBtn" onClick={showImg}>REVEAL</div>
                <div className="yellowContent row justify-content-end mx-auto">
                    <div className="col-lg-6 text-left mt-5">
                        <h3>Front Row Seats</h3>
                        <p>Experience concerts up close <br /> and personal</p>
                        <div className="btn btn-2">
                            see demo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Yellow

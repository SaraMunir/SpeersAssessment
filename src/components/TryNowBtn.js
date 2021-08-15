import React from 'react'

function TryNowBtn(props) {
    return (
        <div className="buttonStatic">
            <div className="d-flex mx-auto col-lg-11 justify-content-end">
                <div className="tryBtn" onClick={props.moveToPricing}>try on</div>
            </div>
        </div>
    )
}

export default TryNowBtn

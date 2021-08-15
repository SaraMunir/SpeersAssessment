import React from 'react'
import speakerImgLeft from './assets/speakeIconrLeft.png'
import speakerImgRight from './assets/speakeIconrRght.png'
function Red(props) {
    function dosomething2(){
        console.log('bla bla')
    }

    return (
        <div className="redSection height100">
            <div className="wrapper row mx-auto col-lg-11 pt-5">
                <div className="col-lg-6">
                    <h3>Superior Sound</h3>
                    <p>Experience live versions of your favourite songs</p>
                    <div className="btn btn-2">
                        see demo
                    </div>
                </div>
                <div className="col-lg-6">
                    div
                    <img  className="speakers speakLeft col-lg-6" src={speakerImgLeft} alt="" />
                    <img  className="speakers  speakRight col-lg-6" src={speakerImgRight} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Red

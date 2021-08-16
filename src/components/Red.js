import React from 'react'
import speakerImgLeft from './assets/speakeIconrLeft.png'
import speakerImgRight from './assets/speakeIconrRght.png'
function Red(props) {
    function playMusic(type){
        console.log('music1 ', type)
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
                <div className="col-lg-6 row mx-auto">
                    <div className="col-lg-6">
                        <img  className="speakers speakLeft" onClick={()=>playMusic('music1')} src={speakerImgLeft} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img  className="speakers  speakRight" src={speakerImgRight} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Red

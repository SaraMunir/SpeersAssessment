import React, { useState, useRef }  from 'react'
import speakerImgLeft from './assets/speakeIconrLeft.png'
import speakerImgRight from './assets/speakeIconrRght.png'
import audio1 from './assets/583583__josefpres__bass-loops-021-short-loop-120-bpm.wav'
import audio2 from './assets/583257__timbre__wires-remix-of-erokia-s-freesound-583109.flac'
function Red(props) {
    const [ music, setMusic ] = useState( false );
    const [ music2, setMusic2 ] = useState( false );
    const [ playBtn, setPlayBtn ] = useState( false );

    function playMusic(type){
        var audio1 = document.getElementById("aud1");
        var audio2 = document.getElementById("aud2");
        if(type==="music1"){
            if(music===false){
                setMusic(true);
                setMusic2(false)
                // console.log('music1 ', type)
                audio1.play();
                audio2.pause();
                audio1.loop = true;
            } else{
                setMusic(false)
                audio1.pause();
            }
        }
        if(type==="music2"){
            if(music2===false){
                setMusic2(true);
                setMusic(false);
                audio2.play();
                audio1.pause();
                audio2.loop = true;
            } else{
                setMusic2(false)
                audio2.pause();
            }
        }
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
                <div className="col-lg-6 mx-auto speakerCntnr">
                    <div className="d-flex mx-auto" style={{geight: "69vh"}}>
                        <div className="col-6 leftSpCnt">
                            <img  className="speakers speakLeft" onClick={()=>playMusic('music1')} src={speakerImgLeft} alt="speakers"/>
                        </div>
                        <div className="col-6">
                            <img  className="speakers  speakRight" src={speakerImgRight} alt="" onClick={()=>playMusic('music2')}/>
                        </div>
                    </div>
                    <div className="clickToPlay">click speakers <br />
                    to play</div>
                </div>
                <audio id="aud1"src={audio1}></audio>
                <audio id="aud2"src={audio2}></audio>
            </div>
        </div>
    )
}

export default Red

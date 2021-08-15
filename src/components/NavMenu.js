import React, { useState, useEffect, useRef }  from 'react'

function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    // function showMenu(){
    //     console.log('lets see')
    // }
    function dosomething(){
        console.log('something happaned?')
        setShowMenu2(false)
    }

    return (
        <div className="navMenu">
            <div className="hamburger p-5">
                <div className="hamburgerMenCont row mx-auto">
                    <i class="fas fa-bars fa-2x pr-2 m-1 hamBtn"
                    onClick={()=>setShowMenu2(true)}
                    ></i>
                    <h2 class="m-0">EXP|CON</h2>
                </div>
                <div onMouseLeave={()=>dosomething()} className='bla'>
                    <div className={showMenu2==false ? "backgnd" : "backgnd backgnd2"} >
                        hello
                    </div>
                    <ul className={showMenu2==false ? "hide hamburgerMen" : "hamburgerMen"}>
                        <li class="hamburgerMenItem">what is it</li>
                        <li class="hamburgerMenItem">perks</li>
                        <li class="hamburgerMenItem">pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMenu

import React from 'react'
import Logo from '../assets/img/logo.svg'

const Header = () =>{
    return(
        <header>
            <hr/>
            <img className="logo" src={Logo}></img>
            <ul className="navbar-links">
                <li>
                  Rethe nesh  
                </li>
                <li>
                    Kontakto
                </li>
            </ul>
        </header>
    )
}

export default Header;
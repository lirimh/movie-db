import React from 'react'
import Logo from '../assets/img/big-logo.svg'

function Search({ handleInput,search }) {
    return (
        <section className="searchbox-wrap">
             <img className="big-logo" src={Logo}></img>
            <input 
                type="text"
                placeholder="search for a movie..." 
                className="searchbox" 
                onChange={handleInput} 
                onKeyPress={search}>
            </input>
        </section>
    )
}

export default Search

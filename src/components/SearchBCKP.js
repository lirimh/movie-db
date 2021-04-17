import React from 'react'

function Search({ handleInput,search }) {
    return (
        <section className="searchbox-wrap">
            <h1>lirim</h1>
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

import React from 'react'
import GamingIcon from '../assets/img/gaming-icon.svg'
import AnimeIcon from '../assets/img/anime-icon.svg'
import MovieIcon from '../assets/img/movie-icon.svg'

const Category = () =>{
    return(
        <div className="category">
        <h3>Kategoritë</h3>
        <img className="gaming-icon" src={GamingIcon}></img>
        <img className="movie-icon" src={AnimeIcon}></img>
        <img className="anime-icon" src={MovieIcon}></img>
        </div>
    )
}

export default Category;
import React from 'react'
import GamingIcon from '../assets/img/gaming-icon.svg'
import AnimeIcon from '../assets/img/anime-icon.svg'
import MovieIcon from '../assets/img/movie-icon.svg'
import { CATEGORIES } from '../App'

const Category = ({ onCategoryChanged }) =>{
    return(
        <div className="category">
        <h3>Kategoritë</h3>
        <img onClick={() => onCategoryChanged(CATEGORIES.GAME)} className="gaming-icon" src={GamingIcon}></img>
        <img onClick={() => onCategoryChanged(CATEGORIES.MOVIE)} className="movie-icon" src={AnimeIcon}></img>
        <img onClick={() => onCategoryChanged(CATEGORIES.ANIME)} className="anime-icon" src={MovieIcon}></img>
        </div>
    )
}

export default Category;
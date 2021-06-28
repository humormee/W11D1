import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({ id, imageUrl, name }) => {
  return (
    <li className="pokemon-index-item">
      <Link to="/pokemon/:pokemonId">
        <span>{id}</span>
        <img src={imageUrl}/>
        <span>{name}</span>      
      </Link>
    </li>
  )
}
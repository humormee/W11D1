import React from 'react';
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({ poke: {id, imageUrl, name }}) => {
  // console.log(id);
  debugger
  return (
    <li className="pokemon-index-item">
      <Link to={`/pokemon/${id}`}>
        <span>{id}</span>
        <img src={imageUrl}/>
        <span>{name}</span>      
      </Link>
    </li>
  )
  }
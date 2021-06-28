import React from 'react';
import { PokemonIndexItem } from "./pokemon_index_item"
import PokemonDetailContainer from "./pokemon_detail_container";
import { Route } from "react-router-dom"

class PokemonIndex extends React.Component{
  constructor(props){
  super(props)
  }
  
  componentDidMount(){
  this.props.requestAllPokemon()
  }
  
  render(){
    // debugger
   
    let pokemonItems = this.props.pokemon.map((poke) => {
      return <PokemonIndexItem key={poke.id} poke={poke} />
    });
    // debugger
    return (
       
      <section className="pokedex">
        <Route path="/pokemon/:id" component={PokemonDetailContainer} />
        <ul>{pokemonItems}</ul>
      </section>
    )
  }
} 
  
  
  export default PokemonIndex;
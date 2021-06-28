import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    debugger
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  render() {
    debugger
    return (
    <div>
      <img src={this.props.pokemon.imageUrl} alt="" />
    </div>
    )
  }
}

export default PokemonDetail;
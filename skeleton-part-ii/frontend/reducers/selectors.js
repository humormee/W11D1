export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemonDetail = (state, ownProps) => {
  return {
    items: Object.values(state.entities.items),
    moves: Object.values(state.entities.moves),
    pokemon: state.entities.pokemon[ownProps.match.params.id]
  }
}
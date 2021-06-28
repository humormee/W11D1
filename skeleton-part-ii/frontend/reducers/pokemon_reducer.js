import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from './../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
    return Object.assign({}, state, action.pokemon);
  case RECEIVE_POKEMON:
    return Object.assign({}, state, action.pokemon.pokemon);
  default:
    return state;
  }
}
  
export default pokemonReducer;

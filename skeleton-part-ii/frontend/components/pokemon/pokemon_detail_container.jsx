import {connect} from 'react-redux';
import {requestSinglePokemon} from './../../actions/pokemon_actions';
import {selectPokemonDetail} from './../../reducers/selectors';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemonDetail(state, ownProps)
});



const mapDispatchToProps = (dispatch) => {
  return {
    requestSinglePokemon: (pokemonId) => dispatch(requestSinglePokemon(pokemonId))
  }
}
// const mapDispatchToProps = (dispatch) => ({
  
//   requestSinglePokemon: (pokemonId) => {
//     debugger
//     return dispatch(requestSinglePokemon(pokemonId))
//   }
// });

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
import * as types from './types';
import pokemonReducer from '../reducers';
export function fetchPokemon(params) {
  return (dispatch, getState) => {
    console.log('hello reached this action', params);
    // return Api.get(null, params).then(res => {
      dispatch(setSearchedPokemons({ pokemons:'name' }));
    // }).catch((ex) => {
    //   console.log(ex);
    // });
  };
}

export function setSearchedPokemons({ pokemons }) {
  console.log(pokemons);
  pokemonReducer();
  return {
    type: types.SEARCH_POKEMON,
    pokemons
  };
}

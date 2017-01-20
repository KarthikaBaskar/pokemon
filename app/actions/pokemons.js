import * as types from './types';

export function fetchPokemon(params) {
  // return (dispatch, getState) => {
    console.log('hello reached this action', params);
    // return Api.get(null, params).then(res => {
    //   dispatch(setSearchedGifs({ gifs: res.data }));
    // }).catch((ex) => {
    //   console.log(ex);
    // });
  // };
}

export function setSearchedGifs({ pokemons }) {
  return {
    type: types.SEARCH_POKEMON,
    pokemons
  };
}

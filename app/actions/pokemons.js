import { SEARCH_POKEMON } from './types';

// export function fetchPokemon(params) {
//   return (dispatch, getState) => {
//     // return Api.get(null, params).then(res => {
//       dispatch(setSearchedPokemons({ pokemons:'name' }));
//     // }).catch((ex) => {
//     //   console.log(ex);
//     // });
//   };
// }

export function fetchPokemon(params) {
  // TODO fetch API
  return (dispatch) => {
    return fetch('https://lb1.popety.com/api/v2/propertyTypes')
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json().then((pokemons) => {
          dispatch({
            type: SEARCH_POKEMON,
            pokemons
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  }
}

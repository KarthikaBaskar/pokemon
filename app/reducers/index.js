export default function pokemonReducer(state = {}, action) {
  console.log(state, action);
  switch(action){
    case 'SEARCH_POKEMON':
      return action.pokemons;
    default:
      return state;
  }
}

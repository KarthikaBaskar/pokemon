export default function pokemon(state = {}, action) {
  switch(action){
    case 'SEARCH_POKEMON':
      return action.pokemons;
    default:
      return state;
  }
}

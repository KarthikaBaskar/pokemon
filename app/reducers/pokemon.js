export default function pokemon(state = {}, action) {
  console.log("reducer", state, action);
  switch(action.type){
    case 'SEARCH_POKEMON':
      return action.pokemons;
    default:
      return state;
  }
}

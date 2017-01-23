const initialState = {
  home: {
    navbar: {
      title: "PlopPlop"
    }
  },
  leads: {
    
  }
}

export default function i18n(state = initialState, action) {
  switch(action.type){
    default:
      return state;
  }
}

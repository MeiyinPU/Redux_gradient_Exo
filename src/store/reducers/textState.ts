const initialState={
  name:"Gollum"
}

function textState(state=initialState,action){
  switch(action.type){
      case "CHANGE_NAME":
          return { ...state, name: action.newName };
          default:
              return state
  }
}

export default textState
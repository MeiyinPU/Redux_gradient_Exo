//Fichier qui va return mon state en fonction des actions reçues

const initialState = {
  firstColor: "#e367a4",
  lastColor: "#48b1f3",
  direction: "90deg",
  nbColors: 0,
};

//Renvoi le state avec une partie modifiée en fonction de action.type ("ordre reçu => fais ceci ou cela")
const colorReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_NB_COLOR":
      return { ...state, nbColors: state.nbColors + 1 };
    case "CHANGE_DIRECTION_TO_LEFT":
      return { ...state, direction: "270deg" };
    case "CHANGE_DIRECTION_TO_RIGHT":
      return { ...state, direction: "90deg" };
    //On récupère la charge utile ("payload") depuis notre action
    case "CHANGE_COLOR_FIRST":
      return {
        ...state,
        firstColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case "CHANGE_COLOR_LAST":
      return {
        ...state,
        lastColor: action.payload,
        nbColors: state.nbColors + 1,
      };
    case "CHANGE_ALL_COLORS":
      return {
        ...state,
        lastColor: action.payload.lastColor,
        firstColor: action.payload.firstColor,
        nbColors: state.nbColors + 1,
      };

    default:
      return state;
  }
};

export default colorReducer;

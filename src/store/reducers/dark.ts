

const initialState = {
  dark: false,
};

const darkReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CHANGE_TO_DARK_MODE":
  return { ...state, dark:!state.dark}
    default:
      return state;
  }
};

export default darkReducer;
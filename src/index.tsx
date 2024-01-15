//Import du store pour avoir accès au state
import store from "./store";


// == State
const state = {
  dark: false,
};

store.dispatch({ type: "MY_FIRST_ACTION" });

store.subscribe(() => {
  console.log(store.getState());
  renderBg();
});


// == Rendu dans le DOM

function renderBg() {
  document.getElementById("app").style.background = `${
    store.getState().darkReducer.dark ? "#000000" : "#FFFFFF"
  }
  `;
}

// == Initialisation
renderBg();

// == Controls
document.getElementById("theme-button").addEventListener("click", () => {
  // debug
  console.log("Activate dark mode");
  // data
  // state.dark = !state.dark;
  store.dispatch({type: "CHANGE_TO_DARK_MODE"})
  // ui
  renderBg();
});



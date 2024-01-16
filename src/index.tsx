//Import du store pour avoir accès au state
import store from "./store";


// == State
// const state = {
//   dark: false,
//   name: "Gollum"
// };

// store.dispatch({ type: "MY_FIRST_ACTION" });

store.subscribe(() => {
  // console.log(store.getState());
  renderBg();
  renderName();
});


// == Rendu dans le DOM

function renderBg() {
  document.getElementById("app").style.background = `${
    store.getState().darkReducer.dark ? "#000000" : "#FFFFFF"
  }
  `;
}

function renderName() {
  document.getElementById("footer")!.innerText = store.getState().textState!.name
  document.getElementById("footer")!.style.color = `${
    store.getState().darkReducer.dark ? "#FFFFFF" : "#000000"
  }
  `;



// == Initialisation
renderBg();
renderName();

// == Controls
document.getElementById("theme-button").addEventListener("click", () => {
  // debug
  console.log("Activate dark mode");
  // data
  // state.dark = !state.dark;
  document.getElementById("input").addEventListener("input", (event) => {
  store.dispatch({type: "CHANGE_TO_DARK_MODE"})
  });
  // ui
  // renderBg();
});
}
import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./reducers/color";
import darkReducer from "./reducers/dark";
import textState from "./reducers/textState";

// const store=configureStore({reducer:{colorReducer,darkReducer}}) ok?
const store=configureStore({reducer:{darkReducer,textState}})

export default store
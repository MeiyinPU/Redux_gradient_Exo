import { configureStore } from "@reduxjs/toolkit";
// import colorReducer from "./reducers/color";
import darkReducer from "./reducers/dark";


// const store=configureStore({reducer:{colorReducer,darkReducer}}) ok?
const store=configureStore({reducer:{darkReducer}})

export default store
import {configureStore} from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";

const ReduxStore = configureStore({
    preloadedState: {},
    reducer: {RootReducer: RootReducer}
})

export default ReduxStore;
// Redux Store Created For Storage
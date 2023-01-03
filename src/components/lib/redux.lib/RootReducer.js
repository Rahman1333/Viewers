import {combineReducers} from "@reduxjs/toolkit";
import UsersReducer from "./UsersReducer";

const RootReducer = combineReducers({
    UsersReducer: UsersReducer
})
export default RootReducer;

// RootReducer For Redux Store
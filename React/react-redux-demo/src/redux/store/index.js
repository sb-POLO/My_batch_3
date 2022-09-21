import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "react-redux"; ---> Old format
import counterReducer from "../reducers/counterReducer";

const reducer = {
    reducer1: counterReducer
}

const store = configureStore({ reducer });

export default store;
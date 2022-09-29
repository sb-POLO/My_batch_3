import { configureStore } from "@reduxjs/toolkit";
import addReducer from "../reducers/addReducer";
import apiReducer from "../reducers/apiReducer";
// import { createStore } from "react-redux"; ---> Old format
import counterReducer from "../reducers/counterReducer";

const reducer = {
    reducer1: counterReducer,
    reducer2: addReducer,
    apiReducer: apiReducer
}

const store = configureStore({ reducer });

export default store;
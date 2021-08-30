import {combineReducers} from "redux";
import meReducer from "./me/reducer";
import loading from "./loding";

export const rootReducer=combineReducers({
    meReducer,
    loading
})
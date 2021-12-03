import {combineReducers} from "redux";
import meReducer from "./me/reducer";
import loading from "./loding";
import theme from "./me/theme";

export const rootReducer = combineReducers({
    meReducer,
    loading,
    theme
});
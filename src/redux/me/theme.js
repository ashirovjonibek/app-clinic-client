import {CHANGE_THEME, CHANGE_EYE, CHANGE_IMG_LESS, CHANGE_SCROLL} from "./actionType";

const initialState = {
    filter: "",
    eye: 1,
    imgless: false,
    scroll: 0
};

const theme = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                filter: action.data,
            };
        case CHANGE_EYE:
            return {
                ...state,
                eye: action.data,
            };
        case CHANGE_IMG_LESS:
            return {
                ...state,
                imgless: action.data,
            };
        case CHANGE_SCROLL:
            return {
                ...state,
                scroll: action.data,
            };
        default:
            return state;
    }
};

export default theme;

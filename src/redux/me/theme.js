import {CHANGE_THEME, IMAGE, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE} from "./actionType";
import {allRoles} from "../../routes/authRoles";

const initialState = {
    filter:""
};

const theme = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                filter:action.data
            };
        default:
            return state
    }
}

export default theme
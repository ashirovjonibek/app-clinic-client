import {IMAGE, ME_DATA, ME_EMAIL, ME_FULL_NAME, ME_USERNAME, ROLE} from "./actionType";
import {allRoles} from "../../routes/authRoles";

const initialState = {
    me: {},
    meUsername:"",
    meEmail:"",
    meFullName:"",
    role:[],
    image:""
}

const meReducer = (state = initialState, action) => {
    switch (action.type) {
        case ME_DATA:
            return {
                ...state,
                me:action.data
            };
        case ME_USERNAME:
            return {
                ...state,
                meUsername:action.data
            };
        case ME_FULL_NAME:
            return {
                ...state,
                meFullName:action.data
            };
        case ME_EMAIL:
            return {
                ...state,
                meEmail:action.data
            };
        case ROLE:
            return {
                ...state,
                role:action.data
            };
        case IMAGE:
            return {
                ...state,
                image:action.data
            };
        default:
            return state
    }
}

export default meReducer
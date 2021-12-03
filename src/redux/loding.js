import {LOADING} from "./me/actionType";


const initialState = {
    isLoading: false,
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: !state.isLoading
            }
        default:
            return state
    }
}

export default loading
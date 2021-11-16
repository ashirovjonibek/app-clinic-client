import { CHANGE_THEME, CHANGE_EYE } from "./actionType";

const initialState = {
  filter: "",
  eye: 1,
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
    default:
      return state;
  }
};

export default theme;

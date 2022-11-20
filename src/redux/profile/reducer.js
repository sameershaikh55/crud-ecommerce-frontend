import { PROFILE } from "./types";

const initialState = {
  profile: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

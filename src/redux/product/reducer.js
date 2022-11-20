import { ALL_PRODUCTS, USER_PRODUCTS } from "./types";

const initialState = {
  allProducts: "",
  userProducts: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
    case USER_PRODUCTS:
      return {
        ...state,
        userProducts: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

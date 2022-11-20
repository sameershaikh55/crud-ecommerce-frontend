import { configureStore } from "@reduxjs/toolkit";

// // IMPORTING REDUCERS
// import authReducer from "./auth/reducer";
import profileReducer from "./profile/reducer";
import productReducer from "./product/reducer";

const store = configureStore({
  reducer: {
    // authReducer,
    profileReducer,
    productReducer,
  },
});

export default store;

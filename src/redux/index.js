import { configureStore } from "@reduxjs/toolkit";
import paymentMethod from "./Reducers/paymentMethod";
import todoCart from "./Reducers/todoCart";
const rootReducer = {
  todoCart,
  paymentMethod,
};
export const store = configureStore({
  reducer: rootReducer,
});

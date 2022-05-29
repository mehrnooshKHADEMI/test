import { configureStore } from "@reduxjs/toolkit";
import uislice from "./Ui-slice";
import cartslice from "./Cart-slice";

const store = configureStore({
  reducer: { ui: uislice.reducer, cart: cartslice.reducer },
});
export default store;

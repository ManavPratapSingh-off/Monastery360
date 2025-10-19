import { configureStore } from "@reduxjs/toolkit";
import monasteryslice from "./monasteryslice.js";
import eventslice from "./eventslice.js";
import imageslice from "./imageslice.js";

const reduxstore = configureStore({
  reducer: {
    monastery: monasteryslice,
    event: eventslice,
    image: imageslice,
  },
});

export default reduxstore;

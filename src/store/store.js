import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "./reservationSlice";

const store = configureStore({
    reducer:{
        reservation: reservationSlice,
    },
})

export default store;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reservations: [],
    resAdded: false
}

export const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers:{
        addReservation: (state, action) => {
            state.reservations.push(action.payload)
            state.resAdded = true
        }
    }
})

export const {addReservation} = reservationSlice.actions
export default reservationSlice.reducer
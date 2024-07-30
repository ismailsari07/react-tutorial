import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: false,
    data: false,
    isOpen: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.name = action.payload.name
            state.data = action.payload?.data || false
            state.isOpen = true
        },
        closeModal: (state) => {
            state.name = false
            state.data = false
            state.isOpen = false
        }
    }
})

export const {openModal, closeModal} = modalSlice.actions;
export default modalSlice.reducer;
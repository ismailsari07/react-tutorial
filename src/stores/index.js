import { configureStore } from "@reduxjs/toolkit";

import todoSlice from "./todo";
import authSlice from "./auth";
import modalSlice from "./modal";

const store = configureStore({
    reducer: {
        todo: todoSlice,
        auth: authSlice,
        modal: modalSlice
    }
})

export default store;
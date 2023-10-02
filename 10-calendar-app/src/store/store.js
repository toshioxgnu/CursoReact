import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, CalendarSlice } from "./";
import { authSlice } from "../auth";

export const store = configureStore({
    reducer: {
        calendar: CalendarSlice.reducer,
        ui: uiSlice.reducer,
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, 
    })
})
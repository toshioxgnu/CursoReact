import { configureStore } from "@reduxjs/toolkit";
import { uiSlice, CalendarSlice } from "./";

export const store = configureStore({
    reducer: {
        calendar: CalendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, 
    })
})
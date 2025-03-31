import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import registerReducer from "./slices/RegisterSlice";

export const store = configureStore({
    reducer:{
        register : registerReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import registerReducer from "./slices/RegisterSlice";
import userReducer from "./slices/UserSlice";

export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

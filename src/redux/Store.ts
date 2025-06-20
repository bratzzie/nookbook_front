import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit";
import registerReducer from "./slices/RegisterSlice";
import userReducer from "./slices/UserSlice";
import forgotPassowrdReducer from "./slices/ForgotPasswordSlice";
export const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    forgotPassword: forgotPassowrdReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

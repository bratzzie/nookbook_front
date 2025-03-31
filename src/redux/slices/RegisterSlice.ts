import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterSliceState {
    loading: boolean,
    error: boolean,
    name: string,
    nameValid: boolean,
    email: string,
    emailValid: boolean,
    username: string,
    usernameValid: boolean
}

interface UpdatePayload {
    name: string,
    value : string | number | boolean
}

const initialState : RegisterSliceState = {
    loading: false,
    error: false,
    name: "",
    nameValid: false,
    email: "",
    emailValid: false,
    username: "",
    usernameValid: false
}

export const RegisterSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        updateRegister(state, action: PayloadAction<UpdatePayload>) {
            let {name, value} = action.payload
            state = {...state, [name]: value}
            return state
    }
}})


export const {updateRegister} = RegisterSlice.actions
export default RegisterSlice.reducer

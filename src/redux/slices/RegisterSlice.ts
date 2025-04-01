import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterSliceState {
  loading: boolean;
  error: boolean;
  name: string;
  nameValid: boolean;
  email: string;
  emailValid: boolean;
  username: string;
  usernameValid: boolean;
  step: number;
  islandName?: string;
  hemisphere?: string;
  nativeFruit?: string;
  creatorId?: string;
}

interface UpdatePayload {
  name: string;
  value: string | number | boolean;
}

const initialState: RegisterSliceState = {
  loading: false,
  error: false,
  name: "",
  nameValid: false,
  email: "",
  emailValid: false,
  username: "",
  usernameValid: false,
  step: 1,
};

export const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    updateRegister(state, action: PayloadAction<UpdatePayload>) {
      let { name, value } = action.payload;
      state = { ...state, [name]: value };
      return state;
    },

    incremenetStep(state) {
      state.step++;
      return state;
    },

    decrementStep(state) {
      if (state.step === 1 || state.step === 4 || state.step >= 6) return state;
      else {
        state.step--;
        return state;
      }
    },
  },
});

export const { updateRegister, incremenetStep, decrementStep } =
  RegisterSlice.actions;
export default RegisterSlice.reducer;

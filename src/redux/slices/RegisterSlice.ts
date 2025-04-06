import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface RegisterSliceState {
  loading: boolean;
  error: string;
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

interface RegisterUser {
  name: string;
  email: string;
  username: string;
  islandName?: string;
  hemisphere?: string;
  nativeFruit?: string;
  creatorId?: string;
}

const initialState: RegisterSliceState = {
  loading: false,
  error: "",
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
      if (state.step === 1 || state.step >= 6) return state;
      else {
        state.step--;
        return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state.loading = true;
      return state;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.step++;
      return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = (action.payload as string) || "An unknown error occurred";
      state.loading = false;
      return state;
    });
  },
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (user: RegisterUser, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8080/auth/reg", user);
      return await req.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const { updateRegister, incremenetStep, decrementStep } =
  RegisterSlice.actions;
export default RegisterSlice.reducer;

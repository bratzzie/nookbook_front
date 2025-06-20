import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface ForgotPassowrdSliceState {
  step: number;
  email: string;
  error: string;
}

interface UpdatePayload {
  name: string;
  value: string | number | boolean;
}

interface VerificationCode {
  email: string;
  code: string;
}

const initialState: ForgotPassowrdSliceState = {
  step: 1,
  email: "",
  error: "",
};

export const ForgotPasswordSlice = createSlice({
  name: "forgotPassword",
  initialState,
  reducers: {
    incrementStep(state) {
      state.step++;
      return state;
    },

    decrementStep(state) {
      if (state.step === 1) return state;
      else {
        state.step--;
        return state;
      }
    },

    updateForgotPassword(state, action: PayloadAction<UpdatePayload>) {
      let { name, value } = action.payload;
      state = { ...state, [name]: value };
      return state;
    },

    cleanForgotPasswordState(state) {
      state = initialState;
      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(
      requestForgotPasswordCodeVerification.fulfilled,
      (state) => {
        state.error = "";
        return state;
      }
    );
    builder.addCase(
      requestForgotPasswordCodeVerification.rejected,
      (state, action) => {
        state.error = action.payload as string;
        return state;
      }
    );
    builder.addCase(validateForgotPasswordCode.fulfilled, (state) => {
      state.error = "";
      let nextStep = state.step + 1;
      state.step = nextStep;
      return state;
    });
    builder.addCase(validateForgotPasswordCode.rejected, (state, action) => {
      state.error = action.payload as string;
      return state;
    });
  },
});

export const requestForgotPasswordCodeVerification = createAsyncThunk(
  "auth/forgot/code",
  async (email: string, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8080/auth/forgot/code", {
        email,
      });

      return await req.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const validateForgotPasswordCode = createAsyncThunk(
  "auth/forgot/verify",
  async (body: VerificationCode, thunkAPI) => {
    try {
      const req = await axios.post(
        "http://localhost:8080/auth/forgot/verify",
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await req.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const {
  incrementStep,
  decrementStep,
  cleanForgotPasswordState,
  updateForgotPassword,
} = ForgotPasswordSlice.actions;
export default ForgotPasswordSlice.reducer;

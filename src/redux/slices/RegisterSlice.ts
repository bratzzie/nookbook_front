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
  login: boolean;
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

interface VerificationCode {
  username: string;
  code: string;
}

interface UpdatePassword {
  username: string;
  password: string;
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
  login: false,
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
    cleanRegisterState(state) {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {
      state = {
        ...state,
        loading: true,
      };
      return state;
    });

    builder.addCase(requestEmailVerification.pending, (state, action) => {
      state = {
        ...state,
        loading: true,
      };
      return state;
    });

    builder.addCase(updatePassword.pending, (state, action) => {
      state = {
        ...state,
        loading: true,
      };
      return state;
    });

    builder.addCase(registerUser.fulfilled, (state, action) => {
      let nextStep = state.step + 1;

      state = {
        ...state,
        loading: false,
        error: "",
        step: nextStep,
      };

      return state;
    });

    builder.addCase(requestEmailVerification.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        error: "",
      };

      return state;
    });

    builder.addCase(verifyEmail.fulfilled, (state, action) => {
      let nextStep = state.step + 1;
      state = {
        ...state,
        step: nextStep,
        loading: false,
        error: "",
      };
      return state;
    });

    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state = {
        ...state,
        loading: false,
        error: "",
        login: true,
      };
      return state;
    });

    builder.addCase(requestEmailVerification.rejected, (state, action) => {
      state = {
        ...state,
        loading: false,
        error:
          (action.payload as string) ||
          "An unknown error during generating verification code occurred",
      };

      return state;
    });

    builder.addCase(registerUser.rejected, (state, action) => {
      state = {
        ...state,
        loading: false,
        error:
          (action.payload as string) ||
          "An unknown error during registration occurred",
      };

      return state;
    });

    builder.addCase(verifyEmail.rejected, (state, action) => {
      state = {
        ...state,
        loading: false,
        error:
          (action.payload as string) ||
          "An unknown error during verifying email occurred",
      };

      return state;
    });

    builder.addCase(updatePassword.rejected, (state, action) => {
      state = {
        ...state,
        loading: false,
        error:
          (action.payload as string) ||
          "An unknown error during creating password occurred",
      };

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

export const requestEmailVerification = createAsyncThunk(
  "auth/email/code",
  async (username: string, thunkAPI) => {
    try {
      const req = await axios.post(
        "http://localhost:8080/auth/email/code",
        {
          username: username,
        },
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

export const verifyEmail = createAsyncThunk(
  "auth/email/verify",
  async (body: VerificationCode, thunkAPI) => {
    try {
      const req = await axios.post(
        "http://localhost:8080/auth/email/verify",
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

export const updatePassword = createAsyncThunk(
  "auth/password",
  async (body: UpdatePassword, thunkAPI) => {
    try {
      const req = await axios.put(
        "http://localhost:8080/auth/reg/password",
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
  updateRegister,
  incremenetStep,
  decrementStep,
  cleanRegisterState,
} = RegisterSlice.actions;
export default RegisterSlice.reducer;

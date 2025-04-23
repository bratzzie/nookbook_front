import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/GlobalInterfaces";
import axios from "axios";

interface UserSliceState {
  loggedIn: User | undefined;
  username: string;
  fromRegistration: boolean;
  error: boolean;
  step: number;
}

interface LoginData {
  username: string;
  password: string;
}

interface VerifyUserBody {
  email: string;
  username: string;
}

interface UpdatePayload {
  name: string;
  value: string | number | boolean;
}

const initialState: UserSliceState = {
  loggedIn: undefined,
  username: "",
  fromRegistration: false,
  error: false,
  step: 1,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setFromRegistration(state, action: PayloadAction<boolean>) {
      state = {
        ...state,
        fromRegistration: true,
      };

      return state;
    },

    incrementStep(state) {
      state.step++;
      return state;
    },

    decrementStep(state) {
      if (state.step === 1) return state; // TODO: end state as well
      else {
        state.step--;
        return state;
      }
    },

    cleanLoginState(state) {
      state = initialState;
      return state;
    },

    updateLogin(state, action: PayloadAction<UpdatePayload>) {
      let { name, value } = action.payload;
      state = { ...state, [name]: value };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state = {
        ...state,
        loggedIn: {
          userId: action.payload.user.userId,
          name: action.payload.user.name,
          email: action.payload.user.email,
          username: action.payload.user.username,
          profilePicture: action.payload.user.profilePicture,
        },
      };
      return state;
    });
    builder.addCase(verifyUsername.fulfilled, (state, action) => {
      state = {
        ...state,
        username: action.payload,
      };

      return state;
    });
    builder.addCase(verifyUsername.pending, (state, action) => {
      state = {
        ...state,
        error: false,
      };

      return state;
    });
    builder.addCase(verifyUsername.rejected, (state, action) => {
      state = {
        ...state,
        error: true,
      };
      return state;
    });
  },
});

export const loginUser = createAsyncThunk(
  "user/login",
  async (body: LoginData, thunkAPI) => {
    try {
      const req = await axios.post("http://localhost:8080/auth/login", body);
      return req.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const verifyUsername = createAsyncThunk(
  "user/find",
  async (body: VerifyUserBody, thunkAPI) => {
    console.log(body);
    try {
      const req = await axios.post(
        "http://localhost:8080/auth/login/find",
        body.username != ""
          ? { username: body.username }
          : { email: body.email }
      );
      return req.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const {
  setFromRegistration,
  incrementStep,
  decrementStep,
  cleanLoginState,
  updateLogin,
} = UserSlice.actions;
export default UserSlice.reducer;

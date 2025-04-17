import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../utils/GlobalInterfaces";
import axios from "axios";

interface UserSliceState {
  loggedIn: User | undefined;
  fromRegistration: boolean;
  error: boolean;
}

interface LoginData {
  username: string;
  password: string;
}

const initialState: UserSliceState = {
  loggedIn: undefined,
  fromRegistration: false,
  error: false,
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

export const { setFromRegistration } = UserSlice.actions;
export default UserSlice.reducer;

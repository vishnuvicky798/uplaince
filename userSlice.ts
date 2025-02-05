import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  name: string;
  address: string;
  email: string;
  phone: string;
}

const initialState: UserState = {
  id: "",
  name: "",
  address: "",
  email: "",
  phone: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;

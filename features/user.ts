import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: null | string;
  nickname: null | string;
}

const initialState: UserState = {
  email: null,
  nickname: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<UserState>) => {
      const { email, nickname } = action.payload;
      state.email = email;
      state.nickname = nickname;
    },
    logout: (state) => {
      state.email = null;
      state.nickname = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, updateUser } = userSlice.actions;

export default userSlice.reducer;

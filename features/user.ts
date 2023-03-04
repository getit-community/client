import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  email: null | string;
  nickname: null | string;
  isMobile: null | boolean;
}

const initialState: UserState = {
  email: null,
  nickname: null,
  isMobile: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Omit<UserState, 'isMobile'>>) => {
      const { email, nickname } = action.payload;
      state.email = email;
      state.nickname = nickname;
    },
    logout: (state) => {
      state.email = null;
      state.nickname = null;
    },
    updateUserAgent: (
      state,
      action: PayloadAction<Pick<UserState, 'isMobile'>>,
    ) => {
      state.isMobile = action.payload.isMobile;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, updateUser, updateUserAgent } = userSlice.actions;

export default userSlice.reducer;

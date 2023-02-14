import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: null | string;
  password: null | string;
}

const initialState: UserState = {
  id: null,
  password: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserState>) => {
      const { id, password } = action.payload;
      state.id = id;
      state.password = password;
    },
    logout: (state) => {
      state.id = null;
      state.password = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logout, login } = userSlice.actions;

export default userSlice.reducer;

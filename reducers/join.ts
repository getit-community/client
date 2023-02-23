import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface JoinState {
  email: string;
  password: string;
  authNums?: string;
}

const initialState: JoinState = {
  email: '',
  password: '',
  authNums: '',
};

const joinSlice = createSlice({
  name: 'join',
  initialState,
  reducers: {
    emailAuth: (state, action: PayloadAction<Omit<JoinState, 'authNums'>>) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    updateAuthNums: (
      state,
      action: PayloadAction<Pick<JoinState, 'authNums'>>,
    ) => {
      state.authNums = action.payload.authNums;
    },
    resetAuthNum: (state) => {
      state.authNums = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { emailAuth, updateAuthNums, resetAuthNum } = joinSlice.actions;

export default joinSlice.reducer;

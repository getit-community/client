import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SignupState {
  email: string;
  password: string;
  authNums?: string;
}

const initialState: SignupState = {
  email: '',
  password: '',
  authNums: '',
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    emailAuth: (
      state,
      action: PayloadAction<Omit<SignupState, 'authNums'>>,
    ) => {
      const { email, password } = action.payload;
      state.email = email;
      state.password = password;
    },
    updateAuthNums: (
      state,
      action: PayloadAction<Pick<SignupState, 'authNums'>>,
    ) => {
      state.authNums = action.payload.authNums;
    },
    resetAuth: (state) => {
      state.email = '';
      state.password = '';
      state.authNums = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { emailAuth, updateAuthNums, resetAuth } = signupSlice.actions;

export default signupSlice.reducer;

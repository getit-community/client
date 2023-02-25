import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userSlice, { UserState } from 'features/user';
import signupSlice, { SignupState } from 'features/signup';

export interface RootState {
  user: UserState;
  signup: SignupState;
}

const combineReducer = combineReducers({
  user: userSlice,
  signup: signupSlice,
});

export const rootReducer: Reducer<RootState, AnyAction> = (
  state: RootState | undefined,
  action: AnyAction,
) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default: {
      return combineReducer(state, action);
    }
  }
};

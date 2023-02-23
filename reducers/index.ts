import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import userReducers, { UserState } from 'reducers/user';
import joinReducers, { JoinState } from 'reducers/join';

export interface RootState {
  user: UserState;
  join: JoinState;
}

const combineReducer = combineReducers({
  user: userReducers,
  join: joinReducers,
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

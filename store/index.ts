import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger';
import { rootReducer } from 'reducers';

const isDev = process.env.NODE_ENV !== 'production';

const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      isDev ? [...getDefaultMiddleware(), logger] : [...getDefaultMiddleware()],
    // ? getDefaultMiddleware().concat([logger])
    // : getDefaultMiddleware(),
    devTools: isDev,
  });

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: isDev });

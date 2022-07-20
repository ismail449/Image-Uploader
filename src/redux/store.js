import { configureStore } from '@reduxjs/toolkit';
//import { getDefaultMiddleware } from '@reduxjs/toolkit';
import uploadReducer from './features/uploadSlice';

export const store = configureStore({
  reducer: {
    upload: uploadReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

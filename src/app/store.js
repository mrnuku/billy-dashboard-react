import { configureStore } from '@reduxjs/toolkit';
import billyDataReducer from './billy-data'

export default configureStore({
  reducer: {
    billyData: billyDataReducer,
  },
});

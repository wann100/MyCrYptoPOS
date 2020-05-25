import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

// Create root reducer by combining all reducers we have for the redux state
const rootReducer = combineReducers({
  counter: counterReducer,
});

// Root State for redux
export type RootState = ReturnType<typeof rootReducer>;

// Root Reducer
export default rootReducer;

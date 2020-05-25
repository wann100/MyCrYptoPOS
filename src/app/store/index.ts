import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { useDispatch, useSelector } from 'react-redux';

// Create and configure redux store
const store = configureStore({
  reducer: rootReducer,
});

// Hot Module Replacement
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  });
}

// App Dispatch Type
export type AppDispatch = typeof store.dispatch;

// Use App Dispatcher Function
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();

// Use App Selector, it basically is an alias for useSelector() from redux
export const useAppSelector = useSelector;

// Export store
export default store;

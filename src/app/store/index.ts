import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

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

// Export store
export default store;

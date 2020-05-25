import { createSlice } from '@reduxjs/toolkit';
import { CounterState, CounterCaseReducers } from './counterTypes';
import { RootState } from '@app/store/rootReducer';
import counterEvents from './counterEvents';

// Initial state values for counter
export const CounterInitialState = {
  normal: 0,
  even: 0,
  odd: 0,
};

// Create Counter Slice for redux
export const counterSlice = createSlice<CounterState, CounterCaseReducers>({
  name: 'counter',
  initialState: CounterInitialState,
  reducers: {
    incrementNormal(state): void {
      const old = state.normal;
      state.normal = state.normal + 1;
      counterEvents.onIncrementNormal(state.normal, old);
    },
    incrementEven(state): void {
      const old = state.even;
      state.even = Math.floor(state.even + 2) & ~1;
      counterEvents.onIncrementEven(state.even, old);
    },
    incrementOdd(state): void {
      const old = state.odd;
      state.odd = Math.floor(state.odd + 1) | 1;
      counterEvents.onIncrementOdd(state.odd, old);
    },
  },
});

// Export Counter Slice actions to use somewhere elses
export const {
  incrementNormal,
  incrementEven,
  incrementOdd,
} = counterSlice.actions;

// Select 'counter' state from RootState
export const selectCounter = (state: RootState): CounterState => state.counter;

// Export Counter Slice reducer
export default counterSlice.reducer;

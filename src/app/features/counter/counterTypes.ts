import {
  CaseReducer,
  PayloadAction,
  SliceCaseReducers,
} from '@reduxjs/toolkit';

// Counter State
export interface CounterState {
  normal: number;
  odd: number;
  even: number;
}

// Counter Action Types
export type CounterActionType<T> = CaseReducer<CounterState, PayloadAction<T>>;

// Counter Case Reducers
export interface CounterCaseReducers extends SliceCaseReducers<CounterState> {
  incrementNormal: CounterActionType<number>;
  incrementOdd: CounterActionType<number>;
  incrementEven: CounterActionType<number>;
}

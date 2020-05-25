import React from 'react';
import {
  selectCounter,
  incrementNormal,
  incrementEven,
  incrementOdd,
} from '../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@app/store';

const CounterWidget: React.FC = () => {
  const counter = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  // Handle counter button click
  const handleButtonClick = (type: string): void => {
    switch (type) {
      case 'normal':
        dispatch(incrementNormal());
        break;
      case 'even':
        dispatch(incrementEven());
        break;
      case 'odd':
        dispatch(incrementOdd());
        break;
    }
  };

  // Render Component
  return (
    <div>
      <p>
        Click below button to update the counter state using 🔥 Hot Module
        Replacement :
      </p>
      <button onClick={(): void => handleButtonClick('normal')}>
        Normal Counter &nbsp;
        <span>{counter.normal}</span>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={(): void => handleButtonClick('even')}>
        Even Counter &nbsp;
        <span>{counter.even}</span>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={(): void => handleButtonClick('odd')}>
        Odd Counter &nbsp;
        <span>{counter.odd}</span>
      </button>
    </div>
  );
};

export default CounterWidget;

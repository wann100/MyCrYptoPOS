import React from 'react';
import {
  selectCounter,
  incrementNormal,
  incrementEven,
  incrementOdd,
} from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

const CounterWidget: React.FC = () => {
  const counter = useSelector(selectCounter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>
        Click below button to update the counter state using 🔥 Hot Module
        Replacement :
      </p>
      <button onClick={() => dispatch(incrementNormal())}>
        Normal Counter &nbsp;
        <span>{counter.normal}</span>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(incrementEven())}>
        Even Counter &nbsp;
        <span>{counter.even}</span>
      </button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={() => dispatch(incrementOdd())}>
        Odd Counter &nbsp;
        <span>{counter.odd}</span>
      </button>
    </div>
  );
};

export default CounterWidget;

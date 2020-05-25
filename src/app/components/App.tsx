import React from 'react';
import { hot } from 'react-hot-loader';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import CounterWidget from './CounterWidget';
import '../styles/index.less';

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <CounterWidget />
    </div>
  );
};

const AppWithRouter = withRouter(App);

export default hot(module)(AppWithRouter);

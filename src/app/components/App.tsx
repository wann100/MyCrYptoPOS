import React from 'react';
import { hot } from 'react-hot-loader';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import HomeScreen from '../screens/HomeScreen';
import Header from './Header';
import CounterWidget from './CounterWidget';
import '../styles/index.less';

interface AppProps extends RouteComponentProps {
  title?: string;
}

interface AppState {
  counter: number;
}

class App extends React.Component<AppProps, AppState> {
  readonly state: AppState = { counter: 0 };

  render(): React.ReactElement {
    return (
      <div className='container'>
        <Header />
        <HomeScreen />
        <CounterWidget />
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default hot(module)(AppWithRouter);

import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <MemoryRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  </React.StrictMode>,
  document.getElementById('app'),
);

/** Hot Module Replacement */
if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept();
}

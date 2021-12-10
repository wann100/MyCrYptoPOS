import { hot } from 'react-hot-loader';
import './Application.less';
import React, {Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AppContextProvider, I18nContextProvider } from '../common/contexts';
import { Routes } from '../common/enums';
import { LoadScreen } from '../common/components';
import Terminal from '../terminal/terminal';
import Admin from '../admin/admin';
import '../i18n';
import '../bootstrap.scss';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-toastify/dist/ReactToastify.css';
import '../colors.scss';
import '../index.css';

// Say something
console.log('[ERWT] : Renderer execution started');

const NoMatch = () => (
    <div>
      <h1>404</h1>
      Page Not Found
    </div>
  );
type Props = {
  title: string;
  version: string;
};

const Application: React.FC<Props> = (props) => {
  return (
  <>
 <Suspense fallback={<LoadScreen />}>
    <I18nContextProvider>
      <AppContextProvider>
        <ToastContainer position="bottom-left" limit={3} />
        <HashRouter>
          <Switch>
            <Route path={Routes.Terminal}>
              <Terminal />
            </Route>
            <Route path={Routes.AdminDashboard}>
              <Admin />
            </Route>
            <Redirect strict from="/" to={Routes.Terminal} />
            <Route path="*" render={NoMatch} />
          </Switch>
        </HashRouter>
      </AppContextProvider>
    </I18nContextProvider>
  </Suspense>
  </>

  );
};

export default hot(module)(Application);

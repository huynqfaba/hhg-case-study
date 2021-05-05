/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@emotion/react';
import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from '../styles/global-styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import theme from '../styles/theme';
import 'react-toastify/dist/ReactToastify.css';

import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { Home } from './containers/Home/Loadable';
import { Counter } from './containers/Counter/Loadable';
import { Employee } from './containers/Employee/Loadable';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/employee" component={Employee} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
        <ToastContainer position="bottom-left" />
      </ThemeProvider>
    </BrowserRouter>
  );
}

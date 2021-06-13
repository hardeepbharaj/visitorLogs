/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './navbar';

import HomePage from '../HomePage/Loadable';
import VisitorLogsPage from '../VisitorLogsPage';
import LatestNewsPage from '../LatestNewsPage';
import NotFoundPage from '../NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/visitor-logs" component={VisitorLogsPage} />
        <Route exact path="/latest-news" component={LatestNewsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}

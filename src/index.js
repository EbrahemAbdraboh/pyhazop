import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Login, Forgot, PassCode, ResetPassword, NotFound, BackendError, Dashboard } from "./Pages";

import reportWebVitals from './reportWebVitals';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00abc0',
    },
    secondary: {
      main: '#eeeeee',
    },

  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route  exact path="/404" component={NotFound} />
        <Route  exact path="/500" component={BackendError} />
        <Route  exact path="/Forgot" component={Forgot} />
        <Route  exact path="/PassCode" component={PassCode} />
        <Route  exact path="/ResetPassword" component={ResetPassword} />
        <Route  path="/Admin" component={Dashboard} />
        <Route  path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

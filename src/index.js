import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route to={"/"} component={App}></Route>
  </Switch>
</BrowserRouter>, document.getElementById('root'));
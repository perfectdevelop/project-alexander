import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './pages/Login';

function Markup() {
  return (
    <BrowserRouter basename="/react">
      <div className="page-wraper">
        <Switch>
          <Login />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Markup;

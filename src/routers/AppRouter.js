import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Main, Home, About, NotFound } from '../components';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

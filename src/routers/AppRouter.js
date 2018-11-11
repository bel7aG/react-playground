import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Header, Main, Home, About, NotFound } from '../components';

export default class AppRouter extends Component {

  state = {
    test: [1, 2, 3, "Belhassen", "www.github.com/bel7aG"],
    mainClassName: "main-state",
    isOkey: true
  };

  headerToggleBackgroundColor = () => {
    this.setState((prevState) => ({
      isOkey: !prevState.isOkey
    }));
  }

  onMouseOverMain = () => {
    this.setState(() => ({
      mainClassName: "main-in"
    }))
  }


  onMouseOutMain = () => {
    this.setState(() => ({
      mainClassName: "main-out"
    }))
  }


  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header
            headerToggleBackgroundColor={this.headerToggleBackgroundColor}
          />
          <Main
            className={this.state.mainClassName}
            onMouseOverMain={this.onMouseOverMain}
            onMouseOutMain={this.onMouseOutMain}
          >
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

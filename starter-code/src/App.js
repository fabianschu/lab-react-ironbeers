import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Homepage from './components/Homepage';
import Beers from './components/Beers';
import NewBeer from './components/NewBeer';
import RandomBeer from './components/RandomBeer';
import Beer from './components/Beer';


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Switch>       */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:id" component={Beer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
        {/* </Switch> */}
      </div>
    );
  }
}

export default App;

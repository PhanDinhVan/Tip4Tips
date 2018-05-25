import React, { Component } from 'react';
import classes from './App.css';

import Route from './components/Route/Route';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Route />
      </div>
    );
  }
}

export default App;

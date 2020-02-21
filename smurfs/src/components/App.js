import React, { Component } from "react";
import "./App.css";

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {smurfReducer as reducer} from '../reducers/smurfReducer';
import SmurfForm from './SmurfForm';


const store = createStore(reducer);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>SMURFS! 2.0 W/ Redux</h1>
          {/* <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div> */}
          <SmurfForm />

        </div>
      </Provider>
    );
  }
}

export default App;

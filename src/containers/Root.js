/* @flow */

import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "../store";
import Scene from "../components/Scene";

const store = configureStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Scene />
      </Provider>
    );
  }
}

export default Root;
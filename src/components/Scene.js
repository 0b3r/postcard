/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import App from "../containers/App";
import NavigationBar from "./NavigationBar";

import {
  Navigator,
  View,
  Text
} from 'react-native';

/*
<NavigationBar
  backgroundStyle={{backgroundColor: "#eee"}}
  navigator={navigator}
  route={route}
  title={route.title}
  titleColor="#333" />
*/

class Scene extends Component{

  renderScene(route: Object, navigator: Object) {
    const Component = route.component;
    return (
      <View style={{flex: 1}}>
        <Component
          navigator={navigator}
          route={route}
          {...route.passProps}
        />
      </View>
    );
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        renderScene={this.renderScene}
        initialRoute={{
          component: App,
          title: "Starter App"
        }}
      />
    );
  }

};

export default Scene;



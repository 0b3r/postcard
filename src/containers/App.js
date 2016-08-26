/* @flow */
/*eslint-disable prefer-const */

import React, { Component } from "react";
import LinearGradient from 'react-native-linear-gradient';
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Orientation from 'react-native-orientation';
import StatusBarAndroid from 'react-native-android-statusbar';
import ImagePicker from 'react-native-image-picker';

import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  Platform
} from 'react-native';

import Postcard from '../components/Postcard';

class App extends Component {

  constructor() {
    super();
    this.openDrawer = this.openDrawer.bind(this);
  }

  openDrawer() {
    this.drawer.openDrawer();
  }

  componentWillMount() {
    Orientation.lockToLandscape();
    StatusBarAndroid.hideStatusBar();
  }

  render() {
    const navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>
        I'm in the Drawer!
        </Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(_drawer) => this.drawer = _drawer}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        drawerLockMode="locked-closed"
        renderNavigationView={() => navigationView}>
        <View style={{flex: 1}} >
          <LinearGradient 
            colors={[ '#93EDC7', '#1CD8D2']} 
            style={styles.linearGradient}>
            <View style={styles.editSelector}>
              <TouchableHighlight 
                style={styles.imageAdd}
                onPress={this.openDrawer}>
                <Text style={styles.button}>Image</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.postcardStage}>
              <Postcard />
            </View>
          </LinearGradient>
        </View>
      </DrawerLayoutAndroid>
    );
  }
}


App.propTypes = {
  dispatch: React.PropTypes.func,
  message: React.PropTypes.string,
  isFetching: React.PropTypes.bool
};

App.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  message: ""
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  editSelector: {
    backgroundColor: '#444',
    width: 100,
    height: Dimensions.get('window').height
  },
  postcardStage: {
    width: Dimensions.get('window').width - 100,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageAdd: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ededed',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    height: Dimensions.get('window').height / 4
  },
  button: {
    color: '#ededed',
    fontSize: 20
  }

});

export default connect((state) => ({
  isFetching: state.data.isFetching,
  message: state.data.message
}))(App);
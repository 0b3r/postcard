import React, { Component } from "react";

import {
  Text,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from 'react-native';

const { height, width } = Dimensions.get('window');

var styles = StyleSheet.create({
  postcardWrapper: {
    width: width - 200,
    height: height - 50,
    backgroundColor: '#FFF'
  }

});


export default () => {
  return (
    <View style={styles.postcardWrapper} >
      <Text>Postcard</Text>
    </View>
  );
};
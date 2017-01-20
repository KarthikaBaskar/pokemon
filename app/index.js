/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import  Navbar from './components/navbar';


export default class pokemon extends Component {
  render() {
    return (
      <View>
        <Navbar />
      </View>
    );
  }
}

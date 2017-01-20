import React, { Component } from 'react';
import { View } from 'react-native';
import  Navbar from '../components/navbar';
import  InputBox from '../components/input';

export default class home extends Component {
  render() {
    return (
      <View>
        <Navbar />
        <InputBox />
      </View>
    );
  }
}

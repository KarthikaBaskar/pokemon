import React, { Component } from 'react';
import { View } from 'react-native';
import  Navbar from '../components/navbar';
import  InputBox from '../components/input';
import  Card from '../components/card';
import  Button from '../components/button';



export default class home extends Component {
  render() {
    return (
      <View>
        <View>
          <Navbar />
          <Button />
        </View>
        <InputBox />
        <Card />
      </View>
    );
  }
}

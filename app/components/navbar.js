import React, { Component } from 'react';
import { Text, Navigator, TouchableHighlight } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default class navbar extends Component {
  render() {
    return (
       <NavigationBar
         title={{ title:'PokeMap'}}
         tintColor='white'
         leftButton= {{ title:'Back'}}
         rightButton={{ title:'Cancel'}}
        />
    );
  }
}

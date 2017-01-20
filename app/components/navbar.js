import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

export default class navbar extends Component {
  render() {
    return (
       <NavigationBar
         title={{ title:'PokeMap'}}
         tintColor='#b3e5fc'
         leftButton= {{ title:'Back'}}
         rightButton={{ title:'Cancel'}}
        />
    );
  }
}

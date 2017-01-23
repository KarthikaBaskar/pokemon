import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';


export default class buttonComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableHighlight
        onPress={ () => this.props.onClick() }
        style={{height: 40}}
        color='#841584'
      >
        <Text>SEARCH</Text>
      </TouchableHighlight>
    );
  }
}

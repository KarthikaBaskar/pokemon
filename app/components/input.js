import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class inputBox extends Component {
  constructor(props) {
    super(props);
  }

  changeText(text) {
    this.props.changeText(text.text);
  }

  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.changeText({text})}
        value={this.props.searchKey}
        placeHolder='Enter your favourite pokemon'
      />
    );
  }
}

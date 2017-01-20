import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

export default class card extends Component {
  render () {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1
  }
});

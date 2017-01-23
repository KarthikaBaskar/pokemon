import React, { Component, PropTypes } from 'react';
import NavigationBar from 'react-native-navbar';

export default class navbar extends Component {
  render() {
    return (
       <NavigationBar
         title={{ title:this.props.labels.title}}
         tintColor='#b3e5fc'
         leftButton= {{ title:'Back'}}
         rightButton={{ title:'Cancel'}}
        />
    );
  }
}

navbar.propTypes = {
  labels: PropTypes.object.isRequired
}

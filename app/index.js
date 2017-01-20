import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { ActionCreators } from './actions';
import Home from './containers/home';


export default class pokemonContainer extends Component {
  render() {
    return (
      <Home />
    );
  }
}

// sending actions || dispatching actions
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(ActionCreators, dispatch);
// }
//
// connect((state) => { return {} }, mapDispatchToProps)(pokemonContainer);

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import { ActionCreators } from './actions';
import Home from './containers/home';
import configureStore from './store/storeConfig';

const store = configureStore();

export default class pokemonContainer extends Component {

  render() {
    return (
      <Home store={store}/>
    );
  }
}

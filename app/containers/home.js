import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
// action
import  Navbar from '../components/navbar';
import  InputBox from '../components/input';
import  Card from '../components/card';
import  Button from '../components/button';

export default class home extends Component {
  constructor(props){
    super(props);
    this.state = { searchKey: '' };
    this.initSearch = this.initSearch.bind(this);
  }

  changeText(text) {
    console.log(text);
    this.setState({searchKey: text});
  }

  initSearch(){
    console.log(this.state);
    console.log('search done');
  }

  render() {
    return (
      <View>
        <View>
          <Navbar />
          <Button onClick={this.initSearch}/>
          <InputBox searchKey={this.state.searchKey} changeText={(text) => this.changeText(text)}/>
        </View>
        <Card />
      </View>
    );
  }
}

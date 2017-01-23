import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
// action
import { fetchPokemon } from '../actions/pokemons';
// Components
import  Navbar from '../components/navbar';
import  InputBox from '../components/input';
import  Card from '../components/card';
import  Button from '../components/button';

class home extends Component {
  constructor(props){
    super(props);
    this.state = { searchKey: '' };

    this.initSearch = this.initSearch.bind(this);
  }

  changeText(text) {
    this.setState({searchKey: text});
  }

  initSearch(){
    this.props.dispatch(fetchPokemon({searchKey: this.state.searchKey}));
  }

  render() {
    console.log(this.props.pokemons);
    return (
      <View>
        <View>
          <Navbar name={this.props.headerName} labels={this.props.labels.navbar}/>
          <Button onClick={this.initSearch}/>
          <InputBox searchKey={this.state.searchKey} changeText={(text) => this.changeText(text)}/>
        </View>
        <Card>
          <Text>Here I put what I want</Text>
        </Card>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemon,
    labels: state.i18n.home
  }
}
export default connect(mapStateToProps)(home);

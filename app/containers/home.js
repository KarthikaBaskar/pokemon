import React, { Component } from 'react';
import { View } from 'react-native';
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
    console.log(this.state);
    this.initSearch = this.initSearch.bind(this);
  }

  changeText(text) {
    this.setState({searchKey: text});
  }

  initSearch(){
    this.props.dispatch(fetchPokemon({searchKey: this.state.searchKey}));
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

function mapStateToProps(state) {
  return { pokemons: state.pokemons }
}
export default connect(mapStateToProps)(home);

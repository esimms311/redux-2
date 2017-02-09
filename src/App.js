import React, { Component } from 'react';
import { connect } from 'react-redux';
import {benchPlayer, sendPlayerToCourt} from './redux/players';
import logo from './logo.svg';
import List from './List';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <List
          title="Court"
          list={this.props.court}
          clickAction={this.props.benchPlayer}/>
        <List
          title="Bench"
          list={this.props.bench}
          clickAction={this.props.sendPlayerToCourt}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    court: state.court,
    bench: state.bench
  }
}

const mapDispatchToActions = {benchPlayer, sendPlayerToCourt}

export default connect(mapStateToProps, mapDispatchToActions)(App);

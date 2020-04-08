import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Header from './components/Header';
import Nav from './containers/Nav';
import Article from './containers/Article';
import Control from './containers/Control';
import Create from './containers/Create';
import Update from './containers/Update';

class App extends Component {
  render() {
    var article = null;
    if (this.props.mode === 'READ' || this.props.mode === 'WELCOME') {
      article = <Article />
    } else if (this.props.mode === 'CREATE') {
      article = <Create />
    } else if (this.props.mode === 'UPDATE') {
      article = <Update />
    }

    return (
      <div className="App">
        <Header />
        <Nav />
        <Control />
        {article}
      </div>
    );
  }
}

export default connect(
  function (state) {
    return {
      mode: state.mode
    }
  }
)(App);

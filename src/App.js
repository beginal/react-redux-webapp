import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './containers/Nav';
import Article from './containers/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Article />
    </div>
  );
}

export default App;

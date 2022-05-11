import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Horizontal from './components/horizontal-scroll';

function App() { 
  return (
    <div className="App">
      <Header />
      <Home />
      <Horizontal />
    </div>
  );
}

export default App;

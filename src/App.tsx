import React, { useContext } from 'react';
import './App.css';
import DotRing from './components/customMouse';
import Header from './components/header';
import Home from './components/home';
import Horizontal from './components/horizontal-scroll';
import { MouseContext } from './libs/mouseContext'

function App() { 
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <DotRing />
      <Header />
      <Home />
      <Horizontal />
      <div className='spacer'/>
      <Home />
    </div>
  );
}

export default App;

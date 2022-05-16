import React, { useContext } from 'react';
import './App.css';
import Contact from './components/contact';
import DotRing from './components/customMouse';
import Footer from './components/footer';
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

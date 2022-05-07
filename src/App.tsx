import React, { useRef } from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Horizontal from './components/horizontal-scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const scrollRef: any = useRef()
  return (
    <div className="App bg-secondary">
      <Header />
      <Home {...scrollRef}/>
      <Horizontal {...scrollRef} />
      <Home />
    </div>
  );
}

export default App;

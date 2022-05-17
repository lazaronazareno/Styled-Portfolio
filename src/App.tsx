import React, { useContext } from 'react';
import './App.css';
import AltWorks from './components/alt-works';
import Contact from './components/contact';
import DotRing from './components/customMouse';
import Footer from './components/footer';
import Header from './components/header';
import Home from './components/home';
import Horizontal from './components/horizontal-scroll';
import { MouseContext } from './libs/mouseContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/about';

function App() { 
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <div className="App">
      <BrowserRouter>
      <DotRing />
      <Header />
        <Routes>
          <Route path="/" element={[
            <Home />,
            <Horizontal />,
            <Contact />,
          ]}>
          </Route>
          <Route path='/projects' element={<AltWorks />} />
          <Route path='/contact' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

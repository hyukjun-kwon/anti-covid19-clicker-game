import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import LogIn from './components/LogIn/LogIn';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';
import Landing from './components/Landing/Landing';
import Results from './components/Results/Results';


import { PandemicProvider } from "./contexts/PandemicContext";

function App() {

  return (
    <Router>
      <div>
        <PandemicProvider>
          <Route exact path='/' component={Home} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/results' component={Results} />
        </PandemicProvider>
      </div>
    </Router>
  );
}

export default App;
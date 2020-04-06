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
          <Route exact path='/' component={LogIn} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/how-to-play' component={HowToPlay} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/logout' component={Landing} />
          <Route exact path='/results' component={Results} />
        </PandemicProvider>
      </div>
    </Router>
  );
}

export default App;
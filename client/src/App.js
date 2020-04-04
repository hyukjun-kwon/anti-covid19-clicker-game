import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import LogIn from './components/LogIn/LogInForm';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';
import PandemicContext from './contexts/PandemicContext';
import Landing from '../src/components/Landing/Landing';
import Register from '../src/components/Register/Form';

import { PandemicProvider } from "./contexts/PandemicContext";


function App() {
  const [pandemic, setPandemic] = useState({
    difficulty:"easy",
    infected: 5000,
    infectionRate: 1.05,
    cured: 0,
    dead: 0,
    funding: 2500
  })

  return (
    <Router>
      <div>
        <PandemicContext.Provider value={pandemic} >
          <Route exact path='/' component={LogIn} />
          <Route exact path='/home' render={(props) => <Home {...props} setPandemic={setPandemic} />} />
          <Route exact path='/how-to-play' component={HowToPlay} />
          <Route exact path='/game' render={(props) => <Game {...props} setPandemic={setPandemic} />} />
          <Route exact path='/logout' component={Landing} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={Register} />
        </PandemicContext.Provider>
      </div>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import LogIn from './components/LogIn/LogInForm';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';
import Landing from '../src/components/Landing/Landing';
import Register from '../src/components/Register/Form';

import { PandemicProvider } from "./contexts/PandemicContext";

function App() {

  return (
    <Router>
      <div>
        <PandemicProvider>
          <Route exact path='/' component={LogIn} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/how-to-play' component={HowToPlay} />
          <Route exact path='/game' component={Game} />
          <Route exact path='/logout' component={Landing} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={Register} />
        </PandemicProvider>
      </div>
    </Router>
  );
}

export default App;
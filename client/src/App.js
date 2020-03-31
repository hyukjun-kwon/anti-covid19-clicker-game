import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInOut from './components/LogInOut/LogInOut';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={LogInOut} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/how-to-play' component={HowToPlay} />
        <Route exact path='/game' component={Game} />
        <Route exact path='/logout' component={LogInOut} />
      </div>
    </Router>

  );
}


export default App;
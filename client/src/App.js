import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInOut from './components/LogInOut/LogInOut';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';
import PandemicContext from './contexts/PandemicContext';

function App() {
  const [pandemic, setPandemic] = useState({
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
          <Route exact path='/' component={LogInOut} />
          <Route exact path='/home' render={(props) => <Home {...props} setPandemic={setPandemic} />} />
          <Route exact path='/how-to-play' component={HowToPlay} />
          <Route exact path='/game' render={(props) => <Game {...props} setPandemic={setPandemic} />}/>
          <Route exact path='/logout' component={LogInOut} />
        </PandemicContext.Provider>
      </div>
    </Router>

  );
}


export default App;
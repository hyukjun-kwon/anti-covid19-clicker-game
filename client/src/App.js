import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import Home from './components/Home/Home';
import Game from './components/Game/Game';
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
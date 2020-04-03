import React, { useState, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LogInOut from './components/LogInOut/LogInOut';
import Home from './components/Home/Home';
import HowToPlay from './components/HowToPlay/HowToPlay';
import Game from './components/Game/Game';
import PandemicContext from './contexts/PandemicContext';
import RegisterForm from '../src/components/Register/Form';

function appReducer(state, action) {
  console.log(action);
  let updatedState = { ...state };
  if (action.type === 'SET_DIFFICULTY') {
    if (action.payload === 'EASY_SETTINGS') {
      updatedState = {
        ...state,
        infected: 5000,
        infectionRate: 1.05,
        cured: 0,
        dead: 0,
        funding: 2500
      }
    } else if (action.payload === 'MEDIUM_SETTINGS') {
      updatedState = {
        ...state,
        infected: 10000,
        infectionRate: 1.25,
        cured: 0,
        dead: 0,
        funding: 500
      }
    }
  }
  console.log(updatedState)
  return updatedState;
}

function App() {
  const [pandemic, setPandemic] = useState({
    infected: 5000,
    infectionRate: 1.05,
    cured: 0,
    dead: 0,
    funding: 2500
  })
  const initialState = {
    infected: 5000,
    infectionRate: 1.05,
    cured: 0,
    dead: 0,
    funding: 2500
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <Router>
      <div>
        <PandemicContext.Provider value={{ ...pandemic, state, dispatch }} >
          <Route exact path='/' component={LogInOut} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/how-to-play' component={HowToPlay} />
          <Route exact path='/game' render={(props) => <Game {...props} setPandemic={setPandemic} />} />
          <Route exact path='/logout' component={LogInOut} />
          <Route exact path='/register' component={RegisterForm} />
        </PandemicContext.Provider>
      </div>
    </Router>

  );
}


export default App;
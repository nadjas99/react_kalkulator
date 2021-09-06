import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Uputstvo from './components/Uputstvo';
import Prednja from './components/Prednja';
function App() {
  return (
    <BrowserRouter>

      <Switch >
        <Route path='/uputstvo'>
        
        <Uputstvo />
        </Route>
        <Route path='/'>
        <Home />
          
          
        </Route>
      </Switch>
      <Route path='/home'>
        
        <Prednja />
        </Route>


    </BrowserRouter>
  );
}

export default App;

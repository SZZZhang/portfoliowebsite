import React from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute, BrowserRouter } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Programming from './Components/Programming';
import NotFound from './Components/NotFound';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/products' component={Programming} /> 
          <Route component={NotFound}/>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

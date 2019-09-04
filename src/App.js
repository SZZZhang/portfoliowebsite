import React from 'react';
import './App.css';
import { Router, Route, browserHistory, IndexRoute, BrowserRouter } from "react-router-dom";

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import NotFound from './Components/NotFound';


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <switch>
          <Route exact path='/' component={ Home } />
          <Route exact path='/projects' component={ Projects } /> 
          <Route exact path='/resume' component={ Resume } />
          <Route component={ NotFound }/>
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React,{useEffect, useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AboutCreaters from "./components/AboutCreators";
import AboutProject from "./components/AboutProject";
import CountriesDetails from './components/CountriesDetails';
import Homepage from './components/Homepage';
import Maps from './components/Maps'
import "./style/style.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Homepage} />
            <Route exact path='/maps' component={Maps}/>
            <Route exact path="/aboutus" component={AboutCreaters}/>
            <Route exact path="/abouttheproject" component={AboutProject}/>
            <Route path='/:name' component={CountriesDetails}/> 
        </Switch>
      </BrowserRouter>
      
      <div className='flooter'>Project by Ironhack students 2020</div>
    </>
  );
}

export default App;

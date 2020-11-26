import React,{useEffect, useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

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
            <Route path='/:name' component={CountriesDetails}/>

        
        </Switch>
      </BrowserRouter>
      
      <div className='flooter'>Project by Ironhack students 2020</div>
    </>
  );
}

export default App;

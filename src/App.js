import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CountriesDetails from './components/CountriesDetails';
import Homepage from './components/Homepage'
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
    </>
  );
}

export default App;

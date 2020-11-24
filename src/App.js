import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import CountriesDetails from './components/CountriesDetails';
import Homepage from './components/Homepage'
import "./style/style.css";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/:name' component={CountriesDetails}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

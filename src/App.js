import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Contriesdetails from './components/Contriesdetails';
import Homepage from './components/Homepage'
import "./style/style.css";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path='/:name' component={Contriesdetails}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

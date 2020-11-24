import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Contriesdetails from './components/Contriesdetails';
import Homepage from './components/Homepage';
import Ticket from './components/Ticketapi';
import "./style/style.css";

function App(props) {
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/ticket' component={Ticket}/>
            <Route path='/:name' component={Contriesdetails}/>     
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

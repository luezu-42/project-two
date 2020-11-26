import React,{useEffect, useState} from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import CountriesDetails from './components/CountriesDetails';
import Homepage from './components/Homepage';
import Maps from './components/Maps'
import Home from './img/icons8-home-48.png'
import About from './img/icons8-about-48.png';
import Mark from './img/icons8-marcador-100.png';
import "./style/style.css";

function App() {
  const [classe, setClasse] = useState({
    className:"navMob"
  })

  function handleScroll() {
    if(window.pageYOffset == 640){
     setClasse({className:"testeDet"})
    }else{
      setClasse({className:"navMob"})
    }
  }

  useEffect(()=>{
    window.onscroll = () => handleScroll()
  })
  return (
    <>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/maps' component={Maps}/>
            <Route path='/:name' component={CountriesDetails}/>

        
        </Switch>
            <div className={classe}>
          <Link to='/'>
            <img className="iconM" src={Home}></img>
          </Link>

          <Link to="/">
            <img className="iconM" src={Mark}></img>
          </Link>
          <Link to='/'>
            <img className='iconM' src={About}></img>
          </Link>

      </div>
      </BrowserRouter>
      
      <div className='flooter'>Project by Ironhack students 2020</div>
    </>
  );
}

export default App;

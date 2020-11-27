import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import Home from "../img/icons8-home-48.png";
import About from "../img/icons8-about-48.png";
import Mark from "../img/icons8-marcador-100.png";
import SearchBar from './Searchbar'


function AboutProject () {

    const [navButton, setNavbutton] = useState({
        className: "navMob",
      });
    
      function handleScroll() {
        if (window.scrollY < 25) {
          setNavbutton({ className: "navMob" });
        } else {
          setNavbutton({ className: "navBotton" });
        }
      }
    
      useEffect(() => {
        window.onscroll = () => handleScroll();
      });

    return (

        <>
        <div className="detailTwo">
            <h1 >About the project</h1>



<p>Wanderlust is the result of the second project of the Web Development course at Ironhack São Paulo.</p>

<p>The page must be used on mobile version.</p>

<p>The objective was to build a website using ReactJS and APIs.</p> 
<p>Wanderlust was built using two APIs, one with the countries' information and another one using a map to provide the location of each country.</p>

<p>The purpose of this page is to help users to find important information about their destination when they are planning a trip.</p>
<p>Feel free to make your search!</p>

<p style={{paddingBottom:"90px"}}>Everything was used for educational purposes.</p>


      
        </div>


<div className={navButton.className}>
        <Link to="/">
          <img className="iconM" src={Home}></img>
        </Link>

        <Link to="/abouttheproject">
          <img className="iconM" src={Mark}></img>
        </Link>
        <Link to="/aboutus">
          <img className="iconM" src={About}></img>
        </Link>
      </div>
      <Link to="/">
        <div className="title">Wanderlust</div>
      </Link>
<div className="testeDet">
        <SearchBar homepage={false}></SearchBar>
      </div>

        </>
    );
}

export default AboutProject;
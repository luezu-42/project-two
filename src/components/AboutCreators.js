import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Home from "../img/icons8-home-48.png";
import About from "../img/icons8-about-48.png";
import Mark from "../img/icons8-marcador-100.png";

import SearchBar from "./Searchbar";

function AboutCreaters() {
  const [navButton, setNavbutton] = useState({
    className: "navMob",
  });

  function handleScroll() {
    if (window.scrollY < 155) {
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
        <h1>About us</h1>

        <p>
          Laura Ferraz e Leonardo Uezu, project creators, are Web Development
          students at Ironhack São Paulo and this was their second project at
          the bootcamp.
        </p>

        <h3>Laura Ferraz</h3>
        <p>
          Graduated in Tourism, she worked for 3 years in the area and decided
          to change her career because she didn't feel fulfilled with the work
          she performed. In early 2020 she found her new path in programming.
        </p>
        <p>
          After research and short courses, she enrolled in Ironhack's full-time
          Web Development Full-Stack bootcamp lasting 9 weeks and concluded in
          December / 20.
        </p>
        <p>Contact: lauraferraz5@gmail.com</p>

        <h3>Leonardo Uezu</h3>

        <p>
          As a technology student, I was very curious about the possibilities
          that I could have, but little contact with Java and C ++, I ended up
          becoming more interested in the Front-end area.
        </p>

        <p style={{paddingBottom:"50px"}}>
          I am always looking to update myself and seek new knowledge, currently
          I am focusing my learning in Javascript and React.
        </p>
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
        <SearchBar homepage={false} ></SearchBar>
      </div>
    </>
  );
}

export default AboutCreaters;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Lupa from '../img/loupe.png'

function SearchBar(props) {
  const [countries, setCountries] = useState({
    name: "",
  });

  const [classe, setClasse] = useState({
    className:"bnt-r",
    place:"Search"
  })
  function handleChange(e) {
    const { value } = e.target;
    setCountries(value);
  }
  

  //function filterCountries(term) {
  //  const filteredArr = countries.filter((country) => {
  //    return country.name.includes(term);
  //  });
  //  setCountries(filteredArr);
  //}

  //function handleScroll() {
  //  if(document.documentElement.scrollTop > 280){
  //   setClasse({className:"bnt-mobi",place:"A"})
  //  }
  //}

  //useEffect(()=>{
  //  window.onscroll = () => handleScroll()
  //})

  return (
    <>
      <input
      className="Search"
        type="text"
        name="name"
        placeholder="Which country do you want to visit?"
        required
        // value={search}
        onChange={handleChange}
      />
        <Link to={`/${countries}?format=json`}>
  <button className="bnt-r">{props.homepage ? "Search" : <img style={{height:"20px", width:"20px"}} src={Lupa}></img>}</button>
        </Link>
    </>
  );
}

export default SearchBar;

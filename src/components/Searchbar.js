import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SearchBar(props) {
  const [countries, setCountries] = useState({
    name: "",
  });

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

  
  return (
    <div>
      <input
      className="Search"
        type="text"
        name="name"
        placeholder="Which country do you want to visit?"
        // value={search}
        onChange={handleChange}
      />
        <Link to={`/${countries}?format=json`}>
          <button className="bnt-r">Search</button>
        </Link>;
    </div>
  );
}

export default SearchBar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchBar from "./Searchbar";

import Money from "../img/iStock-960079552-864x520.jpg";
import Road from "../img/road_asphalt_turn_193187_1920x1080.jpg";
import City from "../img/city_buildings_sunset_193193_1920x1080.jpg";

function Homepage() {
  const [countriesInfo, setCountriesInfo] = useState([
    {
      countriesList: [],
      isLoading: true,
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://travelbriefing.org/countries.json"
        );
        console.log(response);
        setCountriesInfo({
          ...countriesInfo,
          countriesList: [...response.data],
        });
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(countriesInfo);
  }, [countriesInfo]);

  return (
    <div>
      <div className="HomeP">
        <div className="Wall"></div>

        <div className="container">
          <SearchBar />
        </div>
      </div>

        <Link to='/ticket'>COMPRAAAA</Link>
        <br></br>
        <Link to='./maps'>MAPAAAAA</Link>

      <div className="containerInfos">
        <div className="infos">
          <img src={Money} className="imgInf"></img>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>

        <div className="infos">
          <img src={Road} className="imgInf"></img>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>

        <div className="infos">
          <img src={City} className="imgInf"></img>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./Searchbar";
import { Link } from "react-router-dom";

import ProjectPicture from "../img/imgAboutTheProject.jpg";
import AboutPicture from "../img/imgAboutUs.jpg";
import Wanderlust from "../img/imgWanderlust.jpg";


function Homepage(props) {
  const [classe, setClasse] = useState({
    className:"container",
  })
  
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


    function handleScroll() {
      if(document.documentElement.scrollTop > 260){
       setClasse({className:"testeDet"})
      }else{
        setClasse({className:"container"})
      }
    }

    useEffect(()=>{
      window.onscroll = () => handleScroll()
    })



  return (
    <div className='first'>
      <div>
      <div className="HomeP">
   
        <div className="Wall"></div>
          <div className="titulo">Wanderlust</div>
        <div className={classe.className}>
          <SearchBar homepage={true}/>
        </div>
        
      </div>
    
      <div className="containerInfos">
        <div className="infos">
        <Link to="/abouttheproject">
          <img src={ProjectPicture} className="imgInf"></img>
        
          <div className="text">
            About Wanderlust
          </div>
          </Link>
        </div>

        <div className="infos">
        <Link to="/aboutus">
          <img src={AboutPicture} className="imgInf"></img>
        
          <div className="text">
            About Us
          </div>
          </Link>
        </div>
        <div className="infos">
          <img src={Wanderlust} className="imgInf"></img>
          <div className="text">
            Wanderlust Definition
          </div>
        </div>
        </div>
      </div>
      </div>


    
  );
}

export default Homepage;

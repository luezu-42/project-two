import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

import SearchBar from './Searchbar';
import Maps from "./Maps";

function CountriesDetails(props) {
  const [countries, setCountries] = useState({
    names: { name: "", full: "", continent: "" },
    timezone: { name: "" },
    language: [{ language: "", official: "" }],
    electricity: { voltage: "", plugs: [] },
    telephone: { calling_code: "", police: "", ambulance: "", fire: "" },
    vaccinations: [],
    currency: { name: "", code: "", symbol: "", rate: "" },
    weather: {
      January: { tAvg: "" },
      February: { tAvg: "" },
      March: { tAvg: "" },
      April: { tAvg: "" },
      May: { tAvg: "" },
      June: { tAvg: "" },
      July: { tAvg: "" },
      August: { tAvg: "" },
      September: { tAvg: "" },
      October: { tAvg: "" },
      November: { tAvg: "" },
      December: { tAvg: "" },
    },
    advise: { UA: { advise: "", url: "" }, CA: { advise: "", url: "" } },
    neighbors: [{ name: "" }],
    maps: { lat: "", long: "" },
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const { name } = props.match.params;
        const response = await axios.get(
          `https://travelbriefing.org/${name}?format=json`
        );

        setCountries({ ...response.data });
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [props]);

  const rate = countries.currency.rate;

  const accordion = document.getElementsByClassName('contentBx');
  
  function handleClick(){

  for(let i = 0;i < accordion.length;i++){
      accordion[i].addEventListener('click', function(){
          this.classList.toggle('active')
      })
  }
}

  return (
    <>
        
      <div className='detail'>
          
        <h1 style={{paddingLeft:"20px"}}>{countries.names.name}</h1>
        <h3 style={{paddingLeft:"20px"}}>
          {countries.names.full}, {countries.names.continent}
        </h3>
        <p style={{paddingBottom:"35px", paddingLeft:"20px", fontWeight:"lighter"}}>Timezone: {countries.timezone.name}</p>

        <div className="accordion">
          <div onClick={handleClick} className="contentBx">
            <h4 className="label"> Language</h4>
            <div className="content">
              {countries.language.map((language, i) => {
                  
                  let native = false;
                  if(language.official == "Yes"){
                       native = true
                  }else{
                    native = false
                  }
                return <p key={i}>{language.language} {native?"is the native language":" "}</p>
              })}
            </div>
          </div>
        </div>

      <div className='accordion'>
          <div className='contentBx' onClick={handleClick}>
        <h4 className='label'>Electricity</h4>
        <div className='content'>
        <p>Voltage: {countries.electricity.voltage}v</p>
       
          
         <div> Plugs: {countries.electricity.plugs.map((plug, i) => (
                plug
          ))}</div>
          
          </div>
        </div>
      </div>

      <div className='accordion'>
            <div onClick={handleClick} className='contentBx'>
        <h4 className='label'>Telephones</h4>
            <div className='content'>
        <p>Code: {countries.telephone.calling_code}</p>
        <p>Police: {countries.telephone.police}</p>
        <p>Ambulance: {countries.telephone.ambulance}</p>
        <p>Fire: {countries.telephone.fire}</p>
        </div>
        </div>
      </div>
      <div className='accordion'>
          <div onClick={handleClick} className='contentBx'>
        <h4 className='label'>Vaccinations</h4>
        <div className='content'>
          {countries.vaccinations.map((vaccine, i) => (
            <p key={i}>
              <strong>{vaccine.name}</strong> <p>{vaccine.message}</p>
            </p>
          ))}
          </div>
        </div>
      </div>


      <div className='accordion'>
          <div onClick={handleClick} className='contentBx'>
        <h4 className='label'>Currency</h4>
        <div className='content'>
        <p>Name: {countries.currency.name}</p>
        <p>Code: {countries.currency.code}</p>
        <p>Symbol: {countries.currency.symbol}</p>
        <p>Compare with $(dollar): R$ {rate.substr(0, 4)}</p>
        </div>
        </div>
      </div>
      <div className='accordion'>
            <div className='contentBx' onClick={handleClick}>
        <h4 className='label'>Weather</h4>
        <div className='content'>
        <p>
          <div>January:</div>
          
            Average Temperature: {countries.weather.January.tAvg.substr(0, 4)}{" "}
            °C
          
        </p>
        <p>
          <div>February:</div>
        
            Average Temperature: {countries.weather.February.tAvg.substr(0, 4)}{" "}
            °C
          
        </p>
        <p>
         <div> March:</div>
          
            Average Temperature: {countries.weather.March.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div> April:</div>
          
            Average Temperature: {countries.weather.April.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div> May:</div>
          
            Average Temperature: {countries.weather.May.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div> June:</div>
          
            Average Temperature: {countries.weather.June.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div> July:</div>
          
            Average Temperature: {countries.weather.July.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div> August:</div>
          
            Average Temperature: {countries.weather.August.tAvg.substr(0, 4)} °C
          
        </p>
        <p>
         <div>September:</div>
          
            Average Temperature: {countries.weather.September.tAvg.substr(0, 4)}{" "}
            °C
          
        </p>
        <p>
         <div> October:</div>
          
            Average Temperature: {countries.weather.October.tAvg.substr(0, 4)}{" "}
            °C
          
        </p>
        <p>
         <div>November:</div>
          
            Average Temperature: {countries.weather.November.tAvg.substr(0, 4)}{" "}
            °C
         
        </p>
        <p>
          <div>December:</div>
          
            Average Temperature: {countries.weather.December.tAvg.substr(0, 4)}{" "}
            °C
          
        </p>
        </div>
        </div>
      </div>

      <div className='accordion'>
          <div className='contentBx' onClick={handleClick}>
        <h4 className='label'>Neighbors</h4>
        <div className='content'>
          {countries.neighbors.map((name, i) => (
            <p key={i}>{name.name}</p>
          ))}
          </div>
        </div>
      </div>

            <div style={{paddingTop:"20px", paddingLeft:"20px"}}>
        <h4>Advise</h4>
        <p>
          {countries.advise.UA.advise}:{" "}
          <a target="_blank" href={countries.advise.UA.url}>
            {countries.advise.UA.url}
          </a>
        </p>
      </div>
</div>

<h4 style={{paddingTop:"20px", paddingLeft:"20px", paddingBottom:"5px"}}>Map</h4>
      <Maps {...countries}/>  
      <Link to='/'>
      <div className='title'>Wanderlust</div>
      </Link>
            <div className="testeDet">
            
          <SearchBar />
        </div>
    </>
  );
}

export default CountriesDetails;

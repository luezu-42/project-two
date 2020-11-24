import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

function CountriesDetails(props) {
    const [countries, setCountries] = useState({
        names: {name: '', full: '', continent: ''},
        timezone: {name: ''},
        language: [{language: '', official: ''}],
        electricity: {voltage: '', plugs: []},
        telephone: {calling_code: '', police: '', ambulance: '', fire: ''},
        vaccinations: [],
        currency: {name: '', code:'', symbol: '', rate: ''},
        weather: {January: {tAvg: ''}, February: {tAvg: ''}, March: {tAvg: ''}, April: {tAvg: ''}, May: {tAvg: ''}, June: {tAvg: ''}, July: {tAvg: ''}, August: {tAvg: ''}, September: {tAvg: ''}, October: {tAvg: ''}, November: {tAvg: ''}, December: {tAvg: ''}},
        advise: {UA: {advise: '', url: ''}, CA: {advise: '', url: ''}},
        neighbors: [{name: ''}],
    });

    useEffect(()=>{
        async function fetchData() {
            try {
            const { name } = props.match.params;
            const response = await axios.get(`https://travelbriefing.org/${name}?format=json`);
            
            setCountries({...response.data}); 
            } catch (err) {
                console.log(err);
            }
        }
        fetchData()       
    }, [countries])
   
    console.log(countries.advise.CA.advise) 

    const rate = countries.currency.rate;


    return (
        <div>
            <div>
                <h1>{countries.names.name}</h1>
                <h3>{countries.names.full}, {countries.names.continent}</h3>
                <p>Timezone: {countries.timezone.name}</p>
                <p>Language: {countries.language.map((language, i) => (
                    <div key={i} >{language.language}</div> 
                ))} </p>
                <p>Official language? {countries.language.map((language, i) => (
                    <div key={i} >{language.official}</div> 
                ))} </p>
            </div>
            <div>
                <h4>Electricity:</h4> 
                 <p>Voltage: {countries.electricity.voltage}v</p>
                <p>Plugs: {countries.electricity.plugs.map((plug, i) => (
                    <div key={i}>{plug}</div>
                ))}</p>
            </div>
            <div>
                <h4>Telephones:</h4>
                <p>Code: {countries.telephone.calling_code}</p>
                <p>Police: {countries.telephone.police}</p>
                <p>Ambulance: {countries.telephone.ambulance}</p>
                <p>Fire: {countries.telephone.fire}</p>
            </div>
            <div>
                <h4>Vaccinations:</h4>
                <p>{countries.vaccinations.map((vaccine, i) => (
                    <div key={i}><p>{vaccine.name}</p> <p>{vaccine.message}</p></div>
                ))}</p>
            </div>
            <div>
                <h4>Currency:</h4>
                <p>Name: {countries.currency.name}</p>
                <p>Code: {countries.currency.code}</p>
                <p>Symbol: {countries.currency.symbol}</p>
                <p>Compare with $(dollar): R$ {rate.substr(0, 4)}</p>
            </div>
            <div>
                <h4>Weather:</h4>
                <p>January: 
                    <p>Average Temperature: {countries.weather.January.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>February: 
                <p>Average Temperature: {countries.weather.February.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>March: 
                <p>Average Temperature: {countries.weather.March.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>April: 
                <p>Average Temperature: {countries.weather.April.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>May: 
                <p>Average Temperature: {countries.weather.May.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>June: 
                <p>Average Temperature: {countries.weather.June.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>July: 
                <p>Average Temperature: {countries.weather.July.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>August: 
                <p>Average Temperature: {countries.weather.August.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>September: 
                <p>Average Temperature: {countries.weather.September.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>October: 
                <p>Average Temperature: {countries.weather.October.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>November: 
                <p>Average Temperature: {countries.weather.November.tAvg.substr(0, 4)} °C</p>
                </p>
                <p>December: 
                <p>Average Temperature: {countries.weather.December.tAvg.substr(0, 4)} °C</p>
                </p>
            </div>
            <div>
                <h4>Advise:</h4>
            <p>{countries.advise.UA.advise}: <a target="_blank" href={countries.advise.UA.url}>{countries.advise.UA.url}</a></p>
            <p>{countries.advise.CA.advise}: <a target="_blank" href={countries.advise.CA.url}>{countries.advise.CA.url}</a></p>
            </div>
            <div>
                <h3>Neighbors:</h3>
                <p>{countries.neighbors.map((name, i) => (
                    <div key={i} >{name.name}</div> 
                ))} </p>
            </div>

        </div>
    );
}

export default CountriesDetails;
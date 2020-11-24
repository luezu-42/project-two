import React, {useEffect} from "react";

import Money from './img/iStock-960079552-864x520.jpg';
import Road from './img/road_asphalt_turn_193187_1920x1080.jpg';
import City from './img/city_buildings_sunset_193193_1920x1080.jpg';
import "./style/style.css";

function App(props) {
  console.log(window)

  return (
    <>

      <div className="HomeP">
        <div className="Wall"></div>

        <div className="container">

          <input className="Search"></input>
          <button className="bnt-r">Search</button>

        </div>

      </div>


      <div className="containerInfos">

        <div className="infos">
          <img src={Money} className='imgInf'></img>
          <div className='text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
          </div>
        </div>

        <div className="infos">
          <img src={Road} className='imgInf'></img>
          <div className='text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
          </div>
        </div>

        <div className="infos">
          <img src={City} className='imgInf'></img>
          <div className='text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
          </div>
        </div>


      </div>
    </>
  );
}

export default App;

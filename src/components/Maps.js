import React,{useEffect, useState} from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Axios from 'axios'
import L from 'leaflet'
import Red from '../img/leaf-red.png'
import Shadow from '../img/leaf-shadow.png'
import { MapInteractionCSS } from 'react-map-interaction';

function Maps(props) {
    const [mapi, setMapi] = useState([
      1,1
    ])

    const [mapa, setMapa] = useState({
      scale:1,
      translation: { x: 0, y: 0 }
    })

    var myIcon = L.icon({
        iconUrl: Red,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: Shadow,
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

  //  useEffect(()=>{
  //   const {lat, long} =  props.maps;
  //    if(lat && long){
  //      setMapi([Number(lat),Number(long)])
//
  //    }
//
  //  }, [props.maps])



  return (
    
      <MapContainer
        className="MAPA"
        center={[-14.2401,-53.1805]}
        zoom={4}
        scrollWheelZoom={false}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-14.2401,-53.1805]}
          icon={myIcon}
        >
          <Popup>AGORA FOI.</Popup>
        </Marker>
      </MapContainer>

    
  );
}

export default Maps;

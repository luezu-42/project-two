import React,{useEffect, useState} from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import Axios from 'axios'
import L from 'leaflet'
import Red from '../img/leaf-red.png'
import Shadow from '../img/leaf-shadow.png'

function Maps(props) {
    const [mapi, setMapi] = useState([])

    var myIcon = L.icon({
        iconUrl: Red,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: Shadow,
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });

//    useEffect(()=>{
//      async function patchData(){
//        const {lat, long} = await props.maps;
//        
//       setMapi([Number(lat),Number(long)])
//
//      }
//      patchData()
//      
//    }, [props])
// console.log(mapi)
  return (
    <>
      <MapContainer
        className="MAPA"
        center={[1,1]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[1,1]}
          icon={myIcon}
        >
          <Popup>AGORA FOI.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Maps;

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from "react-leaflet";
import Axios from "axios";
import L from "leaflet";
import Red from "../img/leaf-red.png";
import Shadow from "../img/leaf-shadow.png";

function Maps(props) {
  const [mapi, setMapi] = useState([1, 1]);

  var myIcon = L.icon({
    iconUrl: Red,
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: Shadow,
    shadowSize: [68, 95],
    shadowAnchor: [22, 94],
  });

  useEffect(() => {
    const { lat, long } = props.maps;
    if (lat && long) {
      setMapi([Number(lat), Number(long)]);
    }
  }, [props.maps]);

  // Setando novamente o "mapi" para o estado inicial para forçar o reload do
   // conteudo, este useEffect tem que se manter a baixo do useEffect que esta
  //  recolocando a rota devido ao atrasado de chegada dos dados.

  useEffect(() => {
    setMapi([1, 1]);
  }, [props.params]);

  function renderMap() {
    if (mapi[0] !== 1 && mapi[1] !== 1) {
      console.log(mapi);
      return (
        <MapContainer
          className="MAPA"
          center={mapi}
          zoom={4}
          scrollWheelZoom={false}
          dragging={true}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={mapi} icon={myIcon}>
            <Popup>AGORA FOI.</Popup>
          </Marker>
        </MapContainer>
      );
    }
  }

  return <>{renderMap()}</>;
}

export default Maps;

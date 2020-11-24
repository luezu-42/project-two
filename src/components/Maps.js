import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from 'leaflet'
import Red from '../img/leaf-red.png'
import Shadow from '../img/leaf-shadow.png'
function Maps() {

    var myIcon = L.icon({
        iconUrl: Red,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        shadowUrl: Shadow,
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    });
  return (
    <>
      <MapContainer
        className="MAPA"
        center={[23.6266557, -102.5375005]}
        zoom={4}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[23.6266557, -102.5375005]}
          icon={myIcon}
        >
          <Popup>AGORA FOI.</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Maps;

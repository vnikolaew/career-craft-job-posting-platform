"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";

export interface GoogleMapProps {
   coordinates: {
      lat: number
      lng: number
   };
}

const Map = ({ coordinates }: GoogleMapProps) => {
   const position = [coordinates.lat, coordinates.lng] as LatLngExpression;

   return (
         <MapContainer className={`!w-full !min-h-[400px]`} center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
               <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
               </Popup>
            </Marker>
         </MapContainer>
   );
};

export default Map;
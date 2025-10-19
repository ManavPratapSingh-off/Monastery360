import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

const MapPage = () => {
  const { monasteries } = useSelector((state) => state.monastery);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">
        Monastery Locations Map
      </h1>
      <div className="w-full max-w-5xl h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer
          center={[31.62, 74.8765]}
          zoom={5}
          scrollWheelZoom
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {monasteries.map(({ id, name, position }) => (
            <Marker key={id} position={position}>
              <Popup>{name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;

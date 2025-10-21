import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import RedirectHome from "../components/RedirectHome.component";

const MapPage = () => {
  const { monasteries } = useSelector((state) => state.monastery);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-4">
      <RedirectHome/>
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
        🏯 Monastery Locations
      </h1>

      <div className="w-full max-w-6xl rounded-xl shadow-2xl overflow-hidden bg-white border border-gray-200">
        <MapContainer
          center={[27.3389, 88.6065]}
          zoom={10}
          scrollWheelZoom
          className="h-96 md:h-[600px] w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {monasteries.map(({ id, name, geo }) => (
            <Marker key={id} position={[geo.lat, geo.lng]}>
              <Popup>
                <span className="font-semibold text-gray-900">{name}</span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Optional: Footer / Legend */}
      <div className="mt-6 text-gray-600 text-sm">
        Map data © OpenStreetMap contributors
      </div>
    </div>
  );
};

export default MapPage;

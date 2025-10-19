import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Sample data with monastery names and geo-coordinates
const monasteries = [
  { id: 1, name: 'Golden Temple', position: [31.6200, 74.8765] },
  { id: 2, name: '[translate:Синай]', position: [29.5617, 33.9750] },
  { id: 3, name: 'Meteora', position: [39.7200, 21.6300] },
];

const MapPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Monastery Locations Map</h1>
      <div className="w-full max-w-5xl h-96 rounded-lg shadow-lg overflow-hidden">
        <MapContainer center={[31.6200, 74.8765]} zoom={5} scrollWheelZoom className="h-full w-full">
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

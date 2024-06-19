import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
interface MapPanelProps {
  centro: [number, number];
}
const Mapa: React.FC<MapPanelProps> = ({ centro }: MapPanelProps) => {
  return (
    <MapContainer center={centro} zoom={10}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
              position={centro}
              icon={L.icon({
                iconUrl: "miUbi.png",
                iconSize: [32, 32],
                iconAnchor: [16, 16],
                popupAnchor: [0, -16],
              })}
            >
            </Marker>
    </MapContainer>
  );
};
export default Mapa;


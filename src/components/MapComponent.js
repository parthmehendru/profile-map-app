import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapUpdater = ({ location }) => {
  const map = useMap();
  useEffect(() => {
    if (location && location.length === 2) {
        map.flyTo([location[0], location[1]], 13, { animate: true });
      }
      
  }, [location, map]);

  return null;
};

const MapComponent = ({ location }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);  // Simulate loading time
    return () => clearTimeout(timer);
  }, [location]);

  return isLoading ? (
    <div style={{ textAlign: "center", padding: "20px" }}>Loading map...</div>
  ) : (
    <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <MapUpdater location={location} />
      <Marker position={[location[0], location[1]]}>
        <Popup>Profile Location</Popup>
      </Marker>

    </MapContainer>
  );
};

export default MapComponent;

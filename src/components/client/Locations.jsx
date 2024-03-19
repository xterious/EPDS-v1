import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { useEffect, useState } from "react";
import data from "@/assets/db.json";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const currentItemIcon = L.icon({
  iconUrl: "/pin.png",
  iconSize: [50, 50],
  shadowUrl: iconShadow,
  iconAnchor: [24, 50],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function Locations() {
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    console.log(
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrent({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          console.log("Error has occured finding your position");
        }
      )
    );
  }, []);

  return (
    <>
      <section className='p-10 min-h-screen'>
        {current && (
          <MapContainer
            center={[current.latitude, current.longitude]}
            zoom={12}
            style={{ height: "500px", width: "100%" }}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker
              position={[current.latitude, current.longitude]}
              icon={currentItemIcon}>
              <Popup>Your location</Popup>
            </Marker>
            {data.map((position, index) => (
              <Marker
                key={index}
                position={[position.latitude, position.longitude]}>
                <Popup>{position.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        )}
      </section>
    </>
  );
}
export default Locations;

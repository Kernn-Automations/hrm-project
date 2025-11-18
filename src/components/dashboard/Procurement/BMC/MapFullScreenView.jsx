import React, { useState, useRef, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";
import CentralPopupBox from "@/utils/CentralPopupBox"; // assuming correct path
import styles from "./MapFullScreenView.module.css";

const containerStyle = {
  width: "70vw",
  height: "80vh",
};

const defaultCenter = {
  lat: 17.385044,
  lng: 78.486671,
};

export default function MapFullScreenView({ btnClass, btnName }) {
  const navigate = useNavigate();
  const [markerPosition, setMarkerPosition] = useState(defaultCenter);
  const [map, setMap] = useState(null);
  const searchBoxRef = useRef(null);
  const [address, setAddress] = useState("");
  const geocoderRef = useRef(null);

  // Reverse geocode to get address
  const fetchAddress = (lat, lng) => {
    console.log("fetch called")
    if (!geocoderRef.current) return;
    console.log("fetch not retruned")
    geocoderRef.current.geocode(
      { location: { lat, lng } },
      (results, status) => {
        if (status === "OK" && results[0]) {
          console.log("called")
          setAddress(results[0].formatted_address);
        } else {
          setAddress("Address not found");
        }
      }
    );
  };

  // Handle map click to place marker
  const handleMapClick = useCallback((event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    fetchAddress(lat, lng);
  }, []);

  const popupRef = useRef();

  const handleNoClick = () => {
    popupRef.current.closePopup(); // Close from child
  };

  // Handle place selection from search box
  const handlePlaceChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length === 0) return;

    const place = places[0];
    const location = place.geometry.location;
    const lat = location.lat();
    const lng = location.lng();

    setMarkerPosition({ lat, lng });
    map.panTo({ lat, lng });
    fetchAddress(lat, lng);
  };
  
  return (
    <CentralPopupBox btnClass={btnClass} btnName={btnName}>
      <div className={styles.mapContainer}>
        <StandaloneSearchBox
          onLoad={(ref) => (searchBoxRef.current = ref)}
          onPlacesChanged={handlePlaceChanged}
        >
          <input
            type="text"
            placeholder="Search location..."
            className={styles.searchBox}
          />
        </StandaloneSearchBox>

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={markerPosition}
          zoom={13}
          onLoad={(mapInstance) => setMap(mapInstance)}
          onClick={handleMapClick}
        >
          {markerPosition && <Marker position={markerPosition} />}
        </GoogleMap>

        {/* Example Popup for Confirming Location */}
        <div className={styles.popupBtn}>
          <CentralPopupBox
            btnName="Confirm Location"
            btnClass={"btn btn-success"}
            ref={popupRef}
          >
            <div className={styles.popcontent}>
              <h3>Selected Location</h3>
              <p>
                Latitude: <span>{markerPosition.lat}</span>
              </p>
              <p>
                Longitude: <span>{markerPosition.lng}</span>
              </p>
              <p>
                Address: <span>{address}</span>
              </p>
            </div>
          </CentralPopupBox>
        </div>
      </div>
    </CentralPopupBox>
  );
}

import React from "react";

import styles from "./EmployeeTray.module.css";
import { GoogleMap, Marker } from "@react-google-maps/api";
import FullWidthPopupBox from "@/utils/FullWidthPopupBox";
import SidePopupBox from "@/utils/SidePopupBox";

export default function EmployeeTray({ employee }) {
  const center = {
    lat: employee?.lat || 17.385044,
    lng: employee?.lng || 78.486671,
  };

  return (
    <SidePopupBox
      btnStyling={styles.viewbtn}
      btnText={"view"}
      title={"Track Employees"}
    >
      <form className={styles.approvedForm}>
        <div className={styles.approvedFeild}>
          {/* Top Column Fields */}

          <label>Date :</label>
          <input type="date" />
        </div>
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Employee Name :</label>
            <input type="text" readOnly />
          </div>

          <div className={styles.approvedFeild}>
            <label>Emp ID :</label>
            <input type="text" readOnly />
          </div>
        </div>

        {/* Row for Check IN / OUT */}
        <div className={styles.approvedRow}>
          <div className={styles.approvedFeild}>
            <label>Check IN :</label>
            <input type="text" readOnly />
          </div>

          <div className={styles.approvedFeild}>
            <label>Check OUT :</label>
            <input type="text" readOnly />
          </div>
        </div>

        {/* Map and Cancel Button */}
        <div className={styles.mapContainer}>
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "400px",
              borderRadius: "8px",
            }}
            center={center}
            zoom={16}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </form>
    </SidePopupBox>
  );
}

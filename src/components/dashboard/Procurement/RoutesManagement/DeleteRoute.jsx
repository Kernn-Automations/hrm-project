


import React, { useState } from 'react';
import styles from './Routes.module.css';
import DeleteSidepopupForm from './DeleteSidepopupForm';

function DeleteRoute() {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [showRouteForm, setShowRouteForm] = useState(false);

  const addDetails = [
    {
      districtName: "KRISHNA",
      managerName: "Karthik",
      managerId: "KA00045",
      BMCS: [
        { bmcName: "BMC One", bmcId: "BM00023", place: "Vijayawada" },
        { bmcName: "BMC Two", bmcId: "BM00024", place: "Vijayawada Urdan" }
      ]
    },
    {
      districtName: "KURNOOL",
      managerName: "Shanmukh",
      managerId: "KA00046",
      BMCS: [
        { bmcName: "BMC Three", bmcId: "BM00025", place: "Vijayawada Rural" },
        { bmcName: "BMC Four", bmcId: "BM00026", place: "Vijayawada" }
      ]
    }
  ];

  if (showRouteForm) {
    return <DeleteSidepopupForm district={selectedDistrict} onClose={() => setShowRouteForm(false)} />;
  }

  return (

    <div className={styles.addContainer}>
      {/* Left Column: Districts */}
      <div className={styles.boxContainer}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search District" />
        </div>

        {/* Map districts */}
        {addDetails.map((district, index) => (
          <div
            key={index}
            className={styles.content}
            onClick={() => setSelectedDistrict(district)}
            style={{
              cursor: 'pointer',
              backgroundColor: selectedDistrict?.districtName === district.districtName ? '#e0f0ff' : 'white'
            }}
          >
            <h4>{district.districtName}</h4>
            <p>{district.managerName} - {district.managerId}</p>
          </div>

        ))}

      </div>

      {/* Right Column: BMCS of selected district */}
      <div className={styles.boxContainer}>
        {selectedDistrict ? (
          <>
            {selectedDistrict.BMCS.map((bmc, index) => (
              <div key={index} className={styles.contentBmcs}>
                <div>
                  <h4>{bmc.bmcName}</h4>
                  <p>{bmc.place} - {bmc.bmcId}</p>
                </div>
                <button className={styles.deleteButton} onClick={() => setShowRouteForm(true)}>Delete </button>
              </div>
            ))}

          </>
        ) : (
          <p style={{ padding: '20px', color: '#888' }}>
            Select a district to view BMCs
          </p>
        )}

      </div>


    </div>
  );
}

export default DeleteRoute;

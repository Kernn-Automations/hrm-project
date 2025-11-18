import React, { useState } from "react";
import styles from "./OngoingContracts.module.css";
import ViewOngoingDetails from "./ViewOngoingDetails";

const ongoingContracts = [
  {
    id: 1,
    contractId: "C1234",
    contractName: "Ramesh Kumar",
    mobileNumber: "9876543210",
    contractType: "person",
    enabled: true,
    details: {
      contractId: "C1234",
      firstName: "Ramesh",
      lastName: "Kumar",
      surname: "N/A",
      dob: "1990-01-01",
      gender: "Male",
      aadhar: "123456789012",
      pan: "ABCDE1234F",
      religion: "Hindu",
      caste: "OC",
      subCaste: "N/A",
      bloodGroup: "O+",
      hno: "1-23",
      address1: "Main Street",
      address2: "Near Temple",
      city: "Hyderabad",
      district: "Hyderabad",
      state: "Telangana",
      pincode: "500001",
      phone: "9876543210",
      altPhone: "9123456789",
      emergencyPhone: "9876509876",
      relativeName: "Suresh",
      relation: "Brother",
      bankName: "SBI",
      accountNumber: "123456789012",
      ifsc: "SBIN0001234",
      branch: "Koti"
    }
  },
  {
    id: 2,
    contractId: "C5678",
    contractName: "Vehicle Transport",
    mobileNumber: "9988776655",
    contractType: "vehicle",
    enabled: false,
    details: {
      contractId: "C5678",
      firstName: "Raj",
      lastName: "Singh",
      surname: "",
      dob: "1985-07-15",
      gender: "Male",
      aadhar: "987654321098",
      pan: "PQRSX9876Y",
      religion: "Sikh",
      caste: "General",
      subCaste: "",
      bloodGroup: "B+",
      hno: "45-B",
      address1: "Highway Road",
      address2: "Transport Nagar",
      city: "Delhi",
      district: "Delhi",
      state: "Delhi",
      pincode: "110001",
      phone: "9988776655",
      altPhone: "9090909090",
      emergencyPhone: "9123456789",
      relativeName: "Karan",
      relation: "Friend",
      bankName: "HDFC",
      accountNumber: "987654321098",
      ifsc: "HDFC0004321",
      branch: "Nehru Place",
      vehicleType: "Truck",
      vehicleNumber: "DL01AB1234",
      license: "DL1234567890",
      rc: "RC123456",
      pollution: "P123456",
      insurance: "INS123456",
      contractFrom: "2024-01-01",
      contractTo: "2024-12-31"
    }
  }
];

const OngoingContracts = () => {
  const [contracts, setContracts] = useState(ongoingContracts);
  const [selectedContract, setSelectedContract] = useState(null);

  const handleToggle = (id) => {
    setContracts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, enabled: !c.enabled } : c
      )
    );
  };

  const handleView = (contract) => {
    setSelectedContract(contract);
  };

  if (selectedContract) {
    return (
      <ViewOngoingDetails
        contract={selectedContract}
        onBack={() => setSelectedContract(null)}
      />
    );
  }

  return (
    <div className={styles.container}>
      <table className="square-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Contract ID</th>
            <th>Contract Name</th>
            <th>Mobile Number</th>
            <th>Contract Type</th>
            <th>Enable/Disable</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={contract.id}>
              <td>{index + 1}</td>
              <td>{contract.contractId}</td>
              <td>{contract.contractName}</td>
              <td>{contract.mobileNumber}</td>
              <td>{contract.contractType}</td>
              <td>
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={contract.enabled}
                    onChange={() => handleToggle(contract.id)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </td>
              <td>
                <button
                  className={styles.viewBtn}
                  onClick={() => handleView(contract)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OngoingContracts;

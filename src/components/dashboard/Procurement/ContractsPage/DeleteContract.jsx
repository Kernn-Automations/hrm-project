import React, { useRef, useState } from "react";
import styles from "./DeleteContract.module.css";
import DeletePopupBox from "./DeletePopupBox"; // <-- new component

const initialContracts = [
  {
    id: 1,
    contractId: "C1234",
    name: "Karthik",
    mobile: "9876543210",
    type: "Person",
  },
  {
    id: 2,
    contractId: "C1234",
    name: "Karthik",
    mobile: "9876543210",
    type: "Person",
  },
];

const DeleteContract = () => {
  const [contracts, setContracts] = useState(initialContracts);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
  const deletePopupRef = useRef();

  const handleDeleteClick = (contract) => {
    setDeleteCandidate(contract);
    document.getElementById("trigger-delete").click();
  };

  const confirmDelete = () => {
    setContracts((prev) =>
      prev.filter((con) => con.id !== deleteCandidate.id)
    );
    deletePopupRef.current?.closePopup();
    setDeleteCandidate(null);
  };

  return (
    <div className={styles.appContainer}>
      <table className="square-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Contract ID</th>
            <th>Contract Name</th>
            <th>Mobile Number</th>
            <th>Contract Type</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contracts.map((contract, index) => (
            <tr key={contract.id}>
              <td>{index + 1}</td>
              <td>{contract.contractId}</td>
              <td>{contract.name}</td>
              <td>{contract.mobile}</td>
              <td>{contract.type}</td>
              <td>
                <DeletePopupBox
                  ref={deletePopupRef}
                  itemName={deleteCandidate?.name}
                  onConfirm={confirmDelete}
                />
                <button
                  id="trigger-delete"
                  onClick={() => handleDeleteClick(contract)}
                  className={styles.hiddenSetup}
                  style={{ display: "none" }}
                >
                  Setup Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteContract;

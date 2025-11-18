import React, { useState } from "react";
import EmployeeTray from "./EmployeeTray";
import styles from "./EmployeeTray.module.css";
import AccordionItem from "@/utils/AccordianItem";

const locationData = {
  "District Name 1": ["BMC A1", "BMC A2"],
  "District Name 2": [
    "BMC B1",
    "BMC B2",
    "BMC B3",
    "BMC B4",
    "BMC B5",
    "BMC B6",
  ],
  "District Name 3": ["BMC C1", "BMC C2"],
  "District Name 4": ["BMC D1"],
  "District Name 5": ["BMC E1", "BMC E2"],
};

const employeesData = {
  "BMC A1": ["John Doe", "Jane Smith"],
  "BMC A2": ["David", "Raj"],
  "BMC B2": ["Alice", "Bob", "Charlie"],
  "BMC B5": ["Manish Kumar", "Sita Devi"],
};

export default function LiveLocationsPage() {
  const [trayOpen, setTrayOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedBMC, setSelectedBMC] = useState("");

  const handleDistrictClick = (district) => {
    setSelectedDistrict((prev) => (prev === district ? null : district));
    setSelectedBMC(""); // reset BMC on district switch
  };

  const handleBMCChange = (e) => {
    setSelectedBMC(e.target.value);
  };

  return (
    <>
      <div
        style={{
          width: "50%",
          minWidth: "400px",
          maxWidth: "600px",
          margin: "40px auto",
          //   border: "1px solid #ccc",
          borderRadius: "5px",
        }}
      >
        {/* State Accord */}
        <AccordionItem
          title="Section 1"
          btnStyling={styles.mainAccord}
          contentStyling={styles.accordionContent}
          button={
            <div>
              <h5 className="text-white text-center m-0">District 1</h5>
            </div>
          }
        >
          {/* District Accord 1 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 1 - Shanmukh - ID</h6>
              </div>
            }
          >
            {/* Villlage Accord 1 */}
            <div className={styles.villageBox}>
              <p>Jhon Doe - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Jane Smith - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Kane Willamson - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>

          {/* District Accord 2 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 2 - Karthik - ID</h6>
              </div>
            }
          >
            {/* D2 BMC Accord 1 */}

            <div className={styles.villageBox}>
              <p>Employee 1 - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>
        </AccordionItem>

        {/* Acc 2 */}

        <AccordionItem
          title="Section 1"
          btnStyling={styles.mainAccord}
          contentStyling={styles.accordionContent}
          button={
            <div>
              <h5 className="text-white text-center m-0">District 2</h5>
            </div>
          }
        >
          {/* BMC Accord 1 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 1 - Hemanth - ID</h6>
              </div>
            }
          >
            {/* Emp Accord 1 */}
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>

          {/* District Accord 2 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 2 - Ajay - ID</h6>
              </div>
            }
          >
            <div className={styles.villageBox}>
              <p>Employee 1 - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>
        </AccordionItem>

        {/* Accord 3 */}
        <AccordionItem
          title="Section 1"
          btnStyling={styles.mainAccord}
          contentStyling={styles.accordionContent}
          button={
            <div>
              <h5 className="text-white text-center m-0">District 3</h5>
            </div>
          }
        >
          {/* District Accord 1 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 1 - Hemanth - ID</h6>
              </div>
            }
          >
            {/* Villlage Accord 1 */}
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
            <div className={styles.villageBox}>
              <p>Employee Name - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>

          {/* District Accord 2 */}
          <AccordionItem
            btnStyling={styles.innerAccord}
            contentStyling={styles.innerContent}
            button={
              <div className="d-flex justify-content-between">
                <h6 className="m-0">BMC 2 - Ajay - ID</h6>
              </div>
            }
          >
            <div className={styles.villageBox}>
              <p>Employee 1 - code</p>
              <EmployeeTray />
            </div>
          </AccordionItem>
        </AccordionItem>
      </div>
    </>
  );
}

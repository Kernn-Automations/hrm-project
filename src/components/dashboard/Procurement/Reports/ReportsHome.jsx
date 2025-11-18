import React, { useState } from "react";
import AccordionItem from "@/utils/AccordianItem";

import styles from "./Reports.module.css";
import BMCForm from "./BMCForm";
import VilllageForm from "./VilllageForm";
import DistrictForm from "./DistrictForm";
import KarimnagarBMC from "./KarimnagarBMC";

function ReportsHome({ navigate }) {
  const [villageClick, setVillageClick] = useState(false);
  const [bmcClick, setBmcClick] = useState(false);
  const [districtClick, setDistrictClick] = useState(false);
  const [knrclick, setKnrclick] = useState(false);

  const onVillageClick = (e) => {
    e.stopPropagation();
    setBmcClick(false);
    setDistrictClick(false);
    setVillageClick(!villageClick);
    setKnrclick(false)
  }

   const onDistrictClick = (e) => {
    e.stopPropagation();
    setBmcClick(false);
    setVillageClick(false);
    setDistrictClick(!districtClick);
    setKnrclick(false)
  }

  const onBMCClick = (e) => {
    e.stopPropagation();
    setBmcClick(!bmcClick);
    setVillageClick(false);
    setDistrictClick(false);
    setKnrclick(false)
  }

  

  const onKNRClick = (e) => {
   e.stopPropagation();
    setBmcClick(false);
    setVillageClick(false);
    setDistrictClick(false);
    setKnrclick(!knrclick)
  }
  

  return (
    <>
      {!bmcClick && !villageClick &&  !knrclick && !districtClick && (
        <div
          style={{
            width: "50%",
            minWidth: "300px",
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
                <h5 className="text-white text-center m-0">Telengana</h5>
              </div>
            }
          >
            {/* District Accord 1 */}
            <AccordionItem
              btnStyling={styles.innerAccord}
              contentStyling={styles.innerContent}
              button={
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">Karimnagar - Shanmukh - ID</h6>
                  <button className={styles.viewbtn} onClick={(e) => onDistrictClick(e)}>view</button>
                </div>
              }
            >
              {/* BMC Accord 1*/}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">Karimnagar - 001 - Area Name </p>
                    <button
                      className={styles.viewbtn}
                      onClick={(e) => onKNRClick(e)}
                    >
                      view
                    </button>
                  </div>
                }
              >
                {/* Villlage Accord 1 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button className={styles.viewbtn} onClick={(e) => setVillageClick(e)}>view</button>
                </div>
              </AccordionItem>

              {/* BMC accor 2 */}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">BMC Name - BMC Code - Area Name </p>
                    <button className={styles.viewbtn} onClick={(e) => onBMCClick(e)}>view</button>
                  </div>
                }
              >
                {/* Villlage Accord 1 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button className={styles.viewbtn} onClick={(e) => onVillageClick(e)}>view</button>
                </div>
                {/* Village Accord 2 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button className={styles.viewbtn} onClick={(e) => onVillageClick(e)}>view</button>
                </div>
              </AccordionItem>
            </AccordionItem>

            {/* District Accord 2 */}
            <AccordionItem
              btnStyling={styles.innerAccord}
              contentStyling={styles.innerContent}
              button={
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">Hyderabad - Karthik - ID</h6>
                  <button className={styles.viewbtn} onClick={(e) => onDistrictClick(e)}>view</button>
                </div>
              }
            >
              {/* D2 BMC Accord 1 */}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">BMC Name - BMC Code - Area Name </p>
                    <button className={styles.viewbtn} onClick={(e) => onBMCClick(e)}>view</button>
                  </div>
                }
              >
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button className={styles.viewbtn} onClick={(e) => onBMCClick(e)}>view</button>
                </div>
              </AccordionItem>
            </AccordionItem>
          </AccordionItem>

          <AccordionItem
            title="Section 1"
            btnStyling={styles.mainAccord}
            contentStyling={styles.accordionContent}
            button={
              <div>
                <h5 className="text-white text-center m-0">Andhra Pradesh</h5>
              </div>
            }
          >
            {/* District Accord 1 */}
            <AccordionItem
              btnStyling={styles.innerAccord}
              contentStyling={styles.innerContent}
              button={
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">Vijayawada - Shanmukh - ID</h6>
                  <button
                    className={styles.viewbtn}
                    onClick={(e) => onDistrictClick(e)}
                  >
                    view
                  </button>
                </div>
              }
            >
              {/* BMC Accord 1*/}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">BMC Name - BMC Code - Area Name </p>
                    <button
                      className={styles.viewbtn}
                      onClick={(e) => onBMCClick(e)}
                    >
                      view
                    </button>
                  </div>
                }
              >
                {/* Villlage Accord 1 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button
                    className={styles.viewbtn}
                    onClick={(e) => onVillageClick(e)}
                  >
                    view
                  </button>
                </div>
              </AccordionItem>

              {/* BMC accor 2 */}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">BMC Name - BMC Code - Area Name </p>
                    <button
                      className={styles.viewbtn}
                      onClick={(e) => onBMCClick(e)}
                    >
                      view
                    </button>
                  </div>
                }
              >
                {/* Villlage Accord 1 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button
                    className={styles.viewbtn}
                    onClick={(e) => onVillageClick(e)}
                  >
                    view
                  </button>
                </div>
                {/* Village Accord 2 */}
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button
                    className={styles.viewbtn}
                    onClick={(e) => onVillageClick(e)}
                  >
                    view
                  </button>
                </div>
              </AccordionItem>
            </AccordionItem>

            {/* District Accord 2 */}
            <AccordionItem
              btnStyling={styles.innerAccord}
              contentStyling={styles.innerContent}
              button={
                <div className="d-flex justify-content-between">
                  <h6 className="m-0">Vizag - Karthik - ID</h6>
                  <button className={styles.viewbtn} onClick={(e) => onDistrictClick(e)}>view</button>
                </div>
              }
            >
              {/* D2 BMC Accord 1 */}
              <AccordionItem
                btnStyling={styles.bmcAccord}
                contentStyling={styles.bmcContent}
                button={
                  <div className="d-flex justify-content-between">
                    <p className="m-0 p-0">BMC Name - BMC Code - Area Name </p>
                    <button className={styles.viewbtn} onClick={(e) => onBMCClick(e)}>view</button>
                  </div>
                }
              >
                <div className={styles.villageBox}>
                  <p>Village Name - code</p>
                  <button className={styles.viewbtn} onClick={(e) => onVillageClick(e)}>view</button>
                </div>
              </AccordionItem>
            </AccordionItem>
          </AccordionItem>

          {/* <AccordionItem title="Section 1" btnStyling={styles.mainAccord} contentStyling={styles.accordionContent} button={<div className="d-flex justify-content-between">
            <h5>Andhra Pradesh</h5>
            <button className={styles.viewbtn}>view</button>
        </div>}>
          <AccordionItem title={"inner"} button={<button>View</button>}>
            <AccordionItem title={"inner"}>content</AccordionItem>
          </AccordionItem>
          <AccordionItem title={"inner"}>
            <AccordionItem title={"inner"}>content</AccordionItem>
          </AccordionItem>
        </AccordionItem> */}
        </div>
      )}

      {bmcClick && <BMCForm onBMCClick={onBMCClick} />}
      {knrclick && <KarimnagarBMC onKNRClick={onKNRClick}/>}
      {villageClick && <VilllageForm onVillageClick={onVillageClick} />}
      {districtClick && <DistrictForm onDistrictClick={onDistrictClick} />}
    </>
  );
}

export default ReportsHome;

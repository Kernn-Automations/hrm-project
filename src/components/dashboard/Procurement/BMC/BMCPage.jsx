import React, { useState } from "react";
import styles from "./BMCPage.module.css";
import AccordionItem from "@/utils/AccordianItem";
import ViewBmcPopup from "./ViewBmcPopup";
import AddBmcPopup from "./AddBmcPopup";
import DeleteBmcPopup from "./DeleteBmcPopup";

export default function BmcPage() {
  return (
    <>
      <div className={styles.bmcButtons}>
        <AddBmcPopup btnName={"+ Add BMC / CC"} btnStyling={styles.addBMCBtn} />
        <DeleteBmcPopup
          btnName={"- Delete BMC / CC"}
          btnStyling={styles.deleteBMCBtn}
        />
      </div>

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

          {/* Villlage Accord 1 */}
          <div className={styles.villageBox}>
            <p>BMC 1 - Karthik - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
          <div className={styles.villageBox}>
            <p>BMC 1 - Shanmukh - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
          <div className={styles.villageBox}>
            <p>BMC 1 - Hemanth - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
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

          {/* Emp Accord 1 */}
          <div className={styles.villageBox}>
            <p>BMC 1 - Harikrishna - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
          <div className={styles.villageBox}>
            <p>BMC 1 - Ajay - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
          <div className={styles.villageBox}>
            <p>BMC 1 - Kaushik - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>

          {/* District Accord 2 */}
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

          {/* Villlage Accord 1 */}
          <div className={styles.villageBox}>
            <p>BMC 1 - Hemanth - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
          <div className={styles.villageBox}>
            <p>BMC 1 - Hemanth - ID</p>
            <ViewBmcPopup btnStyling={styles.viewbtn} btnName={"view"} />
          </div>
        </AccordionItem>
      </div>
    </>
  );
}

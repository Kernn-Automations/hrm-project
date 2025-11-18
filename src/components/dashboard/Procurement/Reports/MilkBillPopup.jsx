import React from "react";
import styles from "./Reports.module.css";
import SidePopupBox from "@/utils/SidePopupBox";

function MilkBillPopup({ btnName, btnStyle, row }) {
  const milkDetails = [
    {
      date: "2025-07-20",
      milktype: "Cow",
      qty: 12,
      fat: 3.5,
      snf: 8.5,
      clr: 28,
    },
    {
      date: "2025-07-21",
      milktype: "Cow",
      qty: 10,
      fat: 3.6,
      snf: 8.4,
      clr: 29,
    },
    {
      date: "2025-07-22",
      milktype: "Cow",
      qty: 11.5,
      fat: 3.4,
      snf: 8.6,
      clr: 30,
    },
    {
      date: "2025-07-20",
      milktype: "Buffalo",
      qty: 8,
      fat: 6.5,
      snf: 9.0,
      clr: 33,
    },
    {
      date: "2025-07-21",
      milktype: "Buffalo",
      qty: 9,
      fat: 6.2,
      snf: 8.8,
      clr: 32,
    },
    {
      date: "2025-07-22",
      milktype: "Buffalo",
      qty: 7.5,
      fat: 6.4,
      snf: 9.1,
      clr: 34,
    },
  ];

  return (
    <>
      <SidePopupBox btnStyling={btnStyle} btnText={btnName} title={"Milk Bill"}>
        <form className={styles.approvedForm}>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>From : </label>
              <input type="date" value={row["From date"] ?? "-"}/>
            </div>
            <div className={styles.approvedFeild}>
              <label>To : </label>
              <input type="date" value={row["To date"] ?? "-"} />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Center Code : </label>
              <input type="text" value={row["Center Code"] ?? "-"}/>
            </div>
            <div className={styles.approvedFeild}>
              <label>Center Name : </label>
              <input type="text" value={row["Center Name"] ?? "-"} />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <label>Sub Code : </label>
              <input type="text" value={row["Sub Code"] ?? "-"} />
            </div>
          </div>

          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <h3 className={styles.head}>Milk Details</h3>
              {milkDetails.map((milk) => (
                <div>
                  <h3 className={styles.milktype}>
                    {milk.date} <span className={styles.icon}><i class="bi bi-arrow-right"></i></span> <span>{milk.milktype}</span>
                  </h3>
                  <p className={styles.milkp}>
                    Qunantity : {milk.qty}, Fat : {milk.fat}, SNF : {milk.snf},
                    CLR : {milk.clr}
                  </p>
                </div>
              ))}
            </div>         
          </div>
          <div className={styles.approvedRow}>
            <div className={styles.approvedFeild}>
              <h3 className={styles.head}>Totals</h3>
                <div>
                  <h3 className={styles.milktype}>
                    Cow Milk <span className={styles.icon}><i class="bi bi-arrow-right"></i></span> <span>1000L</span>
                  </h3>
                </div>
                <div>
                  <h3 className={styles.milktype}>
                    Buffalo Milk <span className={styles.icon}><i class="bi bi-arrow-right"></i></span> <span>1000L</span>
                  </h3>
                </div>
                 <div>
                  <h3 className={styles.milktype}>
                    Cow Milk Price <span className={styles.icon}><i class="bi bi-arrow-right"></i></span> <span>₹ 300</span>
                  </h3>
                </div>
                 <div>
                  <h3 className={styles.milktype}>
                    Buffalo Milk Price <span className={styles.icon}><i class="bi bi-arrow-right"></i></span> <span>₹ 300</span>
                  </h3>
                </div>
            </div>         
          </div>
        </form>
      </SidePopupBox>
    </>
  );
}

export default MilkBillPopup;

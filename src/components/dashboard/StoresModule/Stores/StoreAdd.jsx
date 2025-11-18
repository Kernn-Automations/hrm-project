import React from "react";
import styles from '../../../dashboard/Procurement/Employees/ViewEmployeeDetails.module.css'
import { useNavigate } from "react-router-dom";

const StoreAdd = ({ onBack }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.pageWrapper}>
            {/* Top Profile Row */}
            {/* <div className={styles.profileRow}>
                <div className={styles.profileImage}>
                    <div className={styles.imageCircle}></div>
                </div>
                <button className={styles.backButton} onClick={onBack}>
                    ⬅ Back
                </button>

            </div> */}
            <div className={styles.formContainer}>
                {/* Personal Details */}
                <div className={styles.section}>
                    {/* <h2>Personal Details</h2> */}
                    <div className={styles.fieldGroup}>
                        <label>Name of the Store :</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Store Code : </label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Department :</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Incharge : </label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Code : </label>
                        <input type="text" />
                    </div>

                </div>


                <div className={styles.section}>
                    {/* <h2>Emergency Contact Details</h2> */}
                    <div className={styles.fieldGroup}><label>H.No : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 1 : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 2 : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>City / Village : </label><input type="text" /></div>

                    {/* <h2>Bank Account Details</h2> */}
                    <div className={styles.fieldGroup}><label>District : </label><input type="text" /></div>
                    {/* <div className={styles.fieldGroup}><label>State : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Pincode : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Locate on Map : </label><input type="text" /></div> */}
                    {/* <div className={styles.fieldGroup}><label>Address</label><input type="text" /></div> */}
                </div>

                {/* Address Section */}
                <div className={styles.section}>
                    {/* <h2>Temporary Address</h2> */}
                    <div className={styles.fieldGroup}><label>State : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Pincode : </label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Locate on Map : </label><input type="text" /></div>
                    {/* <div className={styles.fieldGroup}><label>City/Village</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>District</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>State</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Pincode</label><input type="text" /></div>

                    <h2>Permanent Address</h2>
                    <div className={styles.fieldGroup}><label>H.No</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 1</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 2</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>City/Village</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>District</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>State</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Personal Email</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Contact Number</label><input type="text" /></div> */}
                </div>

                {/* Emergency + Bank */}
                {/* <button className="">Submit</button>
                <button className="">Cancel</button> */}
            </div>
        </div>
    );
};

export default StoreAdd;


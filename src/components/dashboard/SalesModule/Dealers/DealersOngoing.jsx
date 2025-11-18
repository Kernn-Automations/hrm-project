import React from "react";
// import styles from "./ViewEmployeeDetails.module.css";
import styles from '../../../dashboard/Procurement/Employees/ViewEmployeeDetails.module.css'
import { useNavigate } from "react-router-dom";

const DealersOngoing = ({ onBack }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.pageWrapper}>
            {/* Top Profile Row */}
            <div className={styles.profileRow}>
                <div className={styles.profileImage}>
                    <div className={styles.imageCircle}></div>
                </div>
                <button className={styles.backButton} onClick={onBack}>
                    ⬅ Back
                </button>

            </div>
            <div className={styles.formContainer}>
                {/* Personal Details */}
                <div className={styles.section}>
                    <h2>Personal Details</h2>
                    <div className={styles.fieldGroup}>
                        <label>Employee ID</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>First Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Last Name</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Surname</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Date of Birth</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Gender</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Marital Status</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Adhaar Number</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>PAN Number</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Religion</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Caste</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Sub Caste</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Blood Group</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>Passport Number</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>UAN Number</label>
                        <input type="text" />
                    </div>
                    <div className={styles.fieldGroup}>
                        <label>PF Number</label>
                        <input type="text" />
                    </div>
                </div>

                {/* Address Section */}
                <div className={styles.section}>
                    <h2>Temporary Address</h2>
                    <div className={styles.fieldGroup}><label>H.No</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 1</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address Line 2</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>City/Village</label><input type="text" /></div>
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
                    <div className={styles.fieldGroup}><label>Contact Number</label><input type="text" /></div>
                </div>

                {/* Emergency + Bank */}
                <div className={styles.section}>
                    <h2>Emergency Contact Details</h2>
                    <div className={styles.fieldGroup}><label>Email</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Phone Number</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Relative Name</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Relation</label><input type="text" /></div>

                    <h2>Bank Account Details</h2>
                    <div className={styles.fieldGroup}><label>Bank Name</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Account Number</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>IFSC Code</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Branch name</label><input type="text" /></div>
                    <div className={styles.fieldGroup}><label>Address</label><input type="text" /></div>
                </div>
            </div>
        </div>
    );
};

export default DealersOngoing;

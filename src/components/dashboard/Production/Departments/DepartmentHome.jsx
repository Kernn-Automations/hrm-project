


// import React, { useState } from 'react';
// import styles from './Department.module.css';
// import { useNavigate } from 'react-router-dom';
// import Incoming from './IncomingForm';

// function DepartmentHome() {
//     const [showDetails, setShowDetails] = useState(false);
//     const [activeComponent, setActiveComponent] = useState(null)

//     const handleViewClick = () => {
//         setShowDetails(true);
//     };

//     const handleBackClick = () => {
//         setShowDetails(false);
//     };



//     return (
//         <div className={styles.departmentContainer}>
//             {!showDetails ? (
//                 <>
//                     <div className={styles.departmentCard}>
//                         <p className={styles.content}>Department Name - Head Name - ID</p>
//                         <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
//                     </div>
//                     <div className={styles.departmentCard}>
//                         <p className={styles.content}>Department Name - Head Name - ID</p>
//                         <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
//                     </div>
//                     <div className={styles.departmentCard}>
//                         <p className={styles.content}>Department Name - Head Name - ID</p>
//                         <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
//                     </div>
//                 </>
//             ) : (
//                 <div className={styles.pageContainer}>
//                     <button
//                         className={styles.reportButton}
//                         onClick={() => setActiveComponent('incoming')}
//                     >
//                         Incoming
//                     </button>
//                     <button
//                         className={styles.reportButton}
//                         onClick={() =>
//                             navigate("/reports/vla-payments/pending-amount")
//                         }
//                     >
//                         Production
//                     </button>
//                 </div>

//         {activeComponent === 'incoming' && <Incoming />}
                
//             )}
//         </div>
//     );
// }

// export default DepartmentHome;




import React, { useState } from 'react';
import styles from './Department.module.css';
import { useNavigate } from 'react-router-dom';
import IncomingForm from './IncomingForm';

function DepartmentHome() {
    const [showDetails, setShowDetails] = useState(false);

    const navigate = useNavigate(); // ✅ You forgot to declare this

    const handleViewClick = () => {
        setShowDetails(true);
    };

    const handleBackClick = () => {
        setShowDetails(false);
        setActiveComponent(null); // optional: reset active component
    };

    return (
        <div className={styles.departmentContainer}>
            {!showDetails ? (
                <>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Department Name - Head Name - ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Department Name - Head Name - ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Department Name - Head Name - ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.pageContainer}>
                        {/* <button className={styles.backBtn} onClick={handleBackClick}>Back</button> */}

                        <button
                            className={styles.reportButton}
                            onClick={() => navigate('/departments/incoming')}
                        >
                            Incoming
                        </button>
                        <button
                            className={styles.reportButton}
                            onClick={() => navigate("/departments/dept-production")}
                        >
                            Production
                        </button>
                    </div>

                    
                </>
            )}
        </div>
    );
}

export default DepartmentHome;

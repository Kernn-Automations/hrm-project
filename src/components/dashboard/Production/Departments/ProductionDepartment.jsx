
import React, { useState } from 'react';
import styles from './Department.module.css';
import IncomingForm from './IncomingForm';
import ProductionForm from './ProductionForm';

function ProductionDepartment() {
    const [showIncomingForm, setShowIncomingForm] = useState(false);

    const handleViewClick = () => {
        setShowIncomingForm(true);
    };

    return (
        <div className={styles.departmentContainer}>
            {!showIncomingForm ? (
                <>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Product Name - Product ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Product Name - Product ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                    <div className={styles.departmentCard}>
                        <p className={styles.content}>Product Name - Product ID</p>
                        <button className={styles.viewBtn} onClick={handleViewClick}>View</button>
                    </div>
                </>
            ) : (
                <ProductionForm />
            )}
        </div>
    );
}

export default ProductionDepartment;

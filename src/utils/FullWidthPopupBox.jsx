// src/utils/FullWidthPopupBox.jsx

import React, { useEffect, useState } from "react";
import styles from "./FullWidthPopupBox.module.css";

export default function FullWidthPopupBox({
  title,
  children,
  open: externallyOpen,
  onClose,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof externallyOpen === "boolean") {
      setIsOpen(externallyOpen);
    }
  }, [externallyOpen]);

  const closeDrawer = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {isOpen && (
        <div className={styles.drawerOverlay} onClick={closeDrawer}>
          <div
            className={styles.drawer}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.drawerHeader}>
              <h2>{title}</h2>
              <button onClick={closeDrawer}>&times;</button>
            </div>
            <div className={styles.drawerBody}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
}

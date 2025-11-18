// src/utils/SidePopupBox.jsx

import React, { useEffect, useState } from 'react';
import styles from "./SidePopupBox.module.css";

/**
 * A side-drawer that can be used in two ways:
 *
 * 1) Uncontrolled (legacy):
 *    <SidePopupBox btnText="Open" btnStyling="my-btn" title="Hello">
 *      …content…
 *    </SidePopupBox>
 *
 *    - Renders a button with your `btnText`/`btnStyling`
 *    - Click that button to open the drawer
 *
 * 2) Controlled (new):
 *    <SidePopupBox
 *      open={isDrawerOpen}
 *      onClose={() => setIsDrawerOpen(false)}
 *      title="Details"
 *    >
 *      …content…
 *    </SidePopupBox>
 *
 *    - No trigger button is needed
 *    - Parent controls open/close via props
 */
export default function SidePopupBox({
  title,
  btnText,
  btnStyling,
  children,
  open: externallyOpen,  // optional boolean
  onClose,               // optional callback
}) {
  const [isOpen, setIsOpen] = useState(false);

  // If parent passes `open`, sync it into our local state:
  useEffect(() => {
    if (typeof externallyOpen === 'boolean') {
      setIsOpen(externallyOpen);
    }
  }, [externallyOpen]);

  // Legacy trigger
  const openDrawer = () => setIsOpen(true);

  // Close drawer (legacy + controlled)
  const closeDrawer = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* LEGACY: only rendered if you pass btnText */}
      {btnText && (
        <button className={btnStyling} onClick={openDrawer}>
          {btnText}
        </button>
      )}

      {/* DRAWER */}
      {isOpen && (
        <div className={styles.drawerOverlay} onClick={closeDrawer}>
          <div
            className={styles.drawer}
            onClick={e => e.stopPropagation()}
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

import React, { useState, useRef, useEffect } from "react";
import styles from "./AccordianItem.module.css";

const AccordionItem = ({ button, children, btnStyling, contentStyling }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const toggleAccordion = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? 'fit-content' : "0px");
    }
  }, [isOpen]);

  return (
    <div className={styles.accordionItem}>
      <div onClick={toggleAccordion} className={btnStyling}>
        {button}
      </div>

      <div
        ref={contentRef}
        className={`${styles.accordionContent} ${contentStyling} ${isOpen ? styles.accordionContentOpen : ""}`}
        style={{ maxHeight: height }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;

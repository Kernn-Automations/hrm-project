import React from "react";
import styles from "./Sidebar.module.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import smallLogo from "../../images/smallLogo.png";

import SalesIcons from "./NavIcons/SalesIcons";
import HRAndManagement from "./NavIcons/HRAndManagement";


const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

 

  return (
    <div className={styles.sidebar}>
      <div className="d-flex justify-content-between">
        <div className={styles.logo}>
          <img src={smallLogo} alt="Logo" />
        </div>
        
      </div>

      <HRAndManagement location={location} />
    </div>
  );
};

export default Sidebar;

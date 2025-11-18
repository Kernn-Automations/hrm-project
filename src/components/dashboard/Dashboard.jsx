import React, { useEffect } from "react";
import { Routes, Route, Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

// import other components as needed
import styles from "./Dashboard.module.css";
import HRManagementRoutes from "./MainRoutings/HRManagementRoutes";

const Dashboard = ({ role, setRole }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!role) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Navbar role={role} setRole={setRole} />
        </div>

        {/* <Navbar /> */}
        <Sidebar />
        <div className={styles.content}>
          <HRManagementRoutes role={role} />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;

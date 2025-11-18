import React from 'react'
import CentralNavBar from '@/utils/CentralNavBar'
import { useLocation, useNavigate } from 'react-router-dom';

function ApplicationHeader() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <CentralNavBar>
        <button className={`${location.pathname === '/applications' ? "active-central-navbar" : ""}`} onClick={() => navigate("/applications")}>Home</button>

        <button className={`${location.pathname.includes('/approvals') ? "active-central-navbar" : ""}`} onClick={() => navigate("/applications/approvals")}>Approvals</button>
        <button className={`${location.pathname.includes('/status') ? "active-central-navbar" : ""}`} onClick={() => navigate("/applications/status")}>Status</button>
        {/* <button className={`${location.pathname.includes('/completed') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/completed")}>Completed</button>
        <button className={`${location.pathname.includes('/status') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/status")}>Status</button>
         */}
      </CentralNavBar>
    </>
  )
}

export default ApplicationHeader

import React from 'react'
import CentralNavBar from '@/utils/CentralNavBar'
import { useLocation, useNavigate } from 'react-router-dom';
import ApplicationHome from './ApplicationHome';

function ApplicationHeader() {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className='row m-0 p-0'>
        <div className='col'>
          {/* <button className={`homebtn`} onClick={() => navigate("/applications/home")}>Home</button> */}
          
          <button className={`homebtn`} onClick={() => navigate("/applications/approvals")}>Approvals</button>
          <button className={`homebtn`} onClick={() => navigate("/applications/status")}>Status</button>
          <ApplicationHome/>
          {/* <button className={`${location.pathname.includes('/completed') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/completed")}>Completed</button>
        <button className={`${location.pathname.includes('/status') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/status")}>Status</button>
         */}
        </div>
      </div>
    </>
  )
}

export default ApplicationHeader

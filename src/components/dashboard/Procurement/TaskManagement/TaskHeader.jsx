import React from 'react'
import CentralNavBar from '@/utils/CentralNavBar'
import { useLocation, useNavigate } from 'react-router-dom';


function TaskHeader() {
  // 

    const navigate = useNavigate();
    const location = useLocation();

  return (
    <>
       <CentralNavBar>
                <button className={`${location.pathname === '/tasks' ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks")}>+ New</button>
                {/* <button className={`${location.pathname.includes('/new') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/new")}>+New</button> */}
                <button className={`${location.pathname.includes('/pending') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/pending")}>Pending</button>
                <button className={`${location.pathname.includes('/completed') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/completed")}>Completed</button>
                <button className={`${location.pathname.includes('/status') ? "active-central-navbar" : ""}`} onClick={() => navigate("/tasks/status")}>Status</button>
                {/* <button className={`${location.pathname.includes('/#') ? "active-central-navbar" : ""}`} onClick={() => navigate("/attendance/ph-settings")}>PH Settings</button> */}
        </CentralNavBar>
    </>
  )
}

export default TaskHeader

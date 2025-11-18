import CentralNavBar from '@/utils/CentralNavBar'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function DepartmentsHeader() {

    const navigate = useNavigate()
    const location = useLocation()


  return (
    <>
      <CentralNavBar>
         <button className={`${location.pathname === '/departments' ? "active-central-navbar" : ""}`} onClick={() => navigate("/departments")}>Departments</button>          
      </CentralNavBar>
    </>
  )
}

export default DepartmentsHeader

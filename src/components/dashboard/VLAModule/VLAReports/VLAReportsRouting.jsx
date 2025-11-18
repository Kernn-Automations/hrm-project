import React from 'react'
import ReportsHeader from './ReportsHeader'
import { Route, Routes, useNavigate } from 'react-router-dom'
import VLAReports from './VLAReports'

function VLAReportsRouting() {
    const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <ReportsHeader />
        <Routes>
          <Route index element={<VLAReports navigate={navigate} />} />
        </Routes>
      </div>
    </>
  )
}

export default VLAReportsRouting

import React from 'react'
import MilkBillHeader from './MilkBillHeader'
import MilkBill from './MilkBill'
import { Route, Routes, useNavigate } from 'react-router-dom'

function VLAMilkBillRouting() {
  const navigate = useNavigate();
  return (
    <>
      <div className="main-container">
        <MilkBillHeader />
        <Routes>
          <Route index element={<MilkBill navigate={navigate} />} />
        </Routes>
      </div>
    </>
  )
}

export default VLAMilkBillRouting

import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import NewReimbursement from './NewReimbursement'
import ReimbursementHeader from './ReimbursementHeader'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const ReimbursementApprovals = lazy(() => import('./ReimbursementApprovals'))
const ReimbursementRequests = lazy(() => import('./ReimbursementRequests'))

function ReimburesmentRouting() {
  return (
    <>
      <div className='main-container'>
        <ReimbursementHeader/>
        <Routes>
            <Route index element={<NewReimbursement/>}/>
            <Route path='/approvals' element={
              <Suspense fallback={<SquareTableSkeleton/>}>
                <ReimbursementApprovals/>
              </Suspense>
            }/>
            <Route path='/requests' element={
              <Suspense fallback={<SquareTableSkeleton/>}>
                <ReimbursementRequests/>
              </Suspense>
            }/>
        </Routes>
      </div>
    </>
  )
}

export default ReimburesmentRouting

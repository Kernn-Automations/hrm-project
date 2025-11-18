import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import VehicleInOut from './VehicleInOut'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const AutoVehicleInOut = lazy(() => import('./AutoVehicleInOut'))
const TankerVehicleInOut = lazy(() => import('./TankerVehicleInOut'))

function VehicleRouting() {
  return (
    <>

      <VehicleInOut />
      <Routes>
        {/* <Route  element={<VehicleInOut/>}/> */}
        <Route index element={
          <Suspense fallback={<SquareTableSkeleton />}>
            <AutoVehicleInOut />
          </Suspense>
        } />
        <Route path='/tanker' element={
          <Suspense fallback={<SquareTableSkeleton />}>
            <TankerVehicleInOut />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default VehicleRouting

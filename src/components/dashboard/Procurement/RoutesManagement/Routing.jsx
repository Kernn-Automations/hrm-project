import React, { lazy, Suspense } from 'react'
import RouteHeader from './RouteHeader'
import { Route, Routes } from 'react-router-dom'
import AddRoute from './AddRoute'
import DeleteRoute from './DeleteRoute'
import Ongoing from './Ongoing'
import TankerRouting from './TankerRouting'
import VehicleRouting from './VehicleRouting'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'
import BoxSkeleton from '@/SkeletonLoaders/BoxSkeleton'


const TransportReport = lazy(() => import('./TransportReport'))
const HomeRoute = lazy(() => import('./HomeRoute'))

function Routing() {
  return (
    <>
      <div className="main-container">
        <RouteHeader />
        <Routes>
          <Route index element={
            <Suspense fallback={<BoxSkeleton/>}>
              <HomeRoute />
            </Suspense>
          } />
          <Route path='/add-route' element={<AddRoute />} />
          <Route path='/delete-route' element={<DeleteRoute />} />
          <Route path='/ongoing-route' element={<Ongoing />} />
          <Route path='/transport-report' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <TransportReport />
            </Suspense>
          } />
          <Route path='/vehicleinout/*' element={<VehicleRouting />} />
          <Route path='/tanker-routes/*' element={<TankerRouting />} />
        </Routes>
      </div>
    </>
  )
}

export default Routing

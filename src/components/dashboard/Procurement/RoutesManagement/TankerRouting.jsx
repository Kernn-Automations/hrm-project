import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import TankerRoutes from './TankerRoutes'
import AddRouteForm from './AddRouteForm'
import DeleteTankerRoute from './DeleteTankerRoute'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const OngoingTankerRoute = lazy(() => import('./OngoingTankerRoute'))
const TransportReportTankerRoute = lazy(() => import('./TransportReportTankerRoute'))

function TankerRouting() {
    return (
        <>
            <Routes>
                <Route index element={<TankerRoutes />} />
                <Route path="/add-route" element={<AddRouteForm />} />
                <Route path="/delete-route" element={<DeleteTankerRoute />} />
                <Route path="/ongoing-route" element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <OngoingTankerRoute />
                    </Suspense>
                } />
                <Route path="/transport-report" element={
                    <Suspense fallback={<SquareTableSkeleton />}>
                        <TransportReportTankerRoute />
                    </Suspense>
                } />
            </Routes>
        </>
    )
}

export default TankerRouting

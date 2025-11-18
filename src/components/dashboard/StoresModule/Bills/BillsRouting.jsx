import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import BillsHeader from './BillsHeader'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const BillsHomepage = lazy(() => import('./BillsHomepage'))
const PaymentStatus = lazy(() => import('./PaymentStatus'))

function BillsRouting() {
    return (
        <>
            <div className='main-container'>
                <BillsHeader />
                <Routes>
                    <Route index element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <BillsHomepage />
                        </Suspense>
                    } />
                    <Route path='/payment-status' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <PaymentStatus />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default BillsRouting

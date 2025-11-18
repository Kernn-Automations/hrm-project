import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import ShiftHeader from './ShiftHeader'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const ShiftHomePage = lazy(() => import('./ShiftHomePage'))
const ManageShifts = lazy(() => import('./ManageShifts'))

function Routing() {
    return (
        <>
            <div className='main-container'>
                <ShiftHeader />
                <Routes>
                    <Route index element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <ShiftHomePage />
                        </Suspense>
                    } />
                    <Route path='/manage' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <ManageShifts />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default Routing

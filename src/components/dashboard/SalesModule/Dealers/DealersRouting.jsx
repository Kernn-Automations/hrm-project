import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DealersHeader from './DealersHeader'
import DealersHome from './DealersHome'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'


const DealerManage = lazy(() => import('./DealerManage'))
const DeleteDealer = lazy(() => import('./DeleteDealer'))
const DealersList = lazy(() => import('./DealersList'))

function DealersRouting() {
    return (
        <>
            <div className='main-container'>
                <DealersHeader />
                <Routes>
                    <Route index element={<DealersHome />} />
                    <Route path='/delete' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <DeleteDealer />
                        </Suspense>
                    } />
                    <Route path='/on-going' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <DealersList />
                        </Suspense>
                    } />
                    <Route path='/manage' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <DealerManage />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default DealersRouting

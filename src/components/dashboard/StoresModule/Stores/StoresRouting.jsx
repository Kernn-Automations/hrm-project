import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import StoresHeader from './StoresHeader'
import StoreAdd from './StoreAdd'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const StoresHomePage = lazy(() => import('./StoresHomePage'))
const StoreDelete = lazy(() => import('./StoreDelete'))

function StoresRouting() {
    return (
        <>
            <div className='main-container'>
                <StoresHeader />
                <Routes>
                    <Route index element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <StoresHomePage />
                        </Suspense>
                    } />
                    <Route path='/add' element={<StoreAdd />} />
                    <Route path='/delete' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <StoreDelete />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default StoresRouting

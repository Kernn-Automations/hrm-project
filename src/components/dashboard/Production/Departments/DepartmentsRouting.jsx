import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import DepartmentsHeader from './DepartmentsHeader'
import DepartmentHome from './DepartmentHome'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'

const IncomingForm = lazy(() => import('./IncomingForm'))
const ProductionDepartment = lazy(() => import('./ProductionDepartment'))

function DepartmentsRouting() {
    
    return (
        <>
            <div className='main-container'>
                <DepartmentsHeader />
                <Routes>
                    <Route index element={<DepartmentHome />} />
                    <Route path='/incoming' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <IncomingForm />
                        </Suspense>
                    } />
                    <Route path='/dept-production' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <ProductionDepartment />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default DepartmentsRouting

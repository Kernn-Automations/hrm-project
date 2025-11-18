import React, { lazy, Suspense } from 'react'
import styles from './AttendanceForm.module.css';
import PresentList from './PresentList';
import ApprovedForm from './ApprovedForm';
import { Route, Routes } from 'react-router-dom';
import HomeTable from './HomeTable';
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton';


const PresentTable = lazy(() => import('./PresentTable'))
const AbsentTable = lazy(() => import('./AbsentTable'))

function AttendanceHomeTable() {
    return (
        <>
            <div className={styles.filters}>
                <label>From:</label>
                <input type="date" className={styles.input} />
                <label>To:</label>
                <input type="date" className={styles.input} />
                <button className={styles.submitButton}>Submit</button>
            </div>
            <PresentList />
            <div className={styles.tableContainer}>
                <Routes>
                    <Route index element={<HomeTable />} />
                    <Route path='/present' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <PresentTable />
                        </Suspense>
                    } />
                    <Route path='/absent' element={
                        <Suspense fallback={<SquareTableSkeleton />}>
                            <AbsentTable />
                        </Suspense>
                    } />
                </Routes>
            </div>
        </>
    )
}

export default AttendanceHomeTable


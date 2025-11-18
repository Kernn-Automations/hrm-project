import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import TaskHeader from './TaskHeader'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'
import NewTaskSkeleton from '@/SkeletonLoaders/NewTaskSkeleton'


const Pending = lazy(() => import('./PendingTask'))
const New = lazy(() => import('./NewTask'))
const Completed = lazy(() => import('./CompletedTask'))
const Status = lazy(() => import('./StatusTask'))

function TaskRouting() {
  return (
    <>
      <div className="main-container">
        <TaskHeader />

        <Routes>
          <Route index element={
            <Suspense fallback={<NewTaskSkeleton />}>
              <New />
            </Suspense>
          } />
          {/* <Route path='/new' element={<NewTask />} /> */}
          <Route path='/pending' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Pending />
            </Suspense>
          } />

          <Route path='/completed' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Completed />
            </Suspense>
          } />
          <Route path='/status' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Status />
            </Suspense>
          } />

        </Routes>
      </div>
    </>
  )
}

export default TaskRouting;

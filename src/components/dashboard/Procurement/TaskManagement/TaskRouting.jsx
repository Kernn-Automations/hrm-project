import React, { lazy, Suspense } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import TaskHeader from './TaskHeader'
import SquareTableSkeleton from '@/SkeletonLoaders/SquareTableSkeleton'
import NewTaskSkeleton from '@/SkeletonLoaders/NewTaskSkeleton'
import TaskManagementHomePage from './TaskManagementHomePage'


const Pending = lazy(() => import('./PendingTask'))
const New = lazy(() => import('./NewTask'))
const Completed = lazy(() => import('./CompletedTask'))
const Status = lazy(() => import('./StatusTask'))

function TaskRouting() {

  const navigate = useNavigate();
  return (
    <>
     
        <Routes>
          <Route index element={
            <Suspense fallback={<NewTaskSkeleton />}>
              <TaskManagementHomePage navigate={navigate}/>
            </Suspense>
          } />
          <Route path='/new' element={<New navigate={navigate}/>} />
          <Route path='/pending' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Pending navigate={navigate}/>
            </Suspense>
          } />

          <Route path='/completed' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Completed navigate={navigate}/>
            </Suspense>
          } />
          <Route path='/status' element={
            <Suspense fallback={<SquareTableSkeleton />}>
              <Status navigate={navigate}/>
            </Suspense>
          } />

        </Routes>
      
    </>
  )
}

export default TaskRouting;

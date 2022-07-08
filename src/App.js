import React, { lazy, Suspense } from 'react'
import { Routes, Route } from "react-router-dom"

const LazyUser = lazy(() => import("./component/UserProfile"))
const LazyCounter = lazy(() => import("./component/Counter"))

function App() {
  return (
    <>
      <Routes>
        <Route path='/user' element={
          <Suspense fallback={<p>Loading...</p>}>
            <LazyUser />
          </Suspense>
        } />
        <Route path='/' element={
          <Suspense fallback={<p>Loading...</p>}>
            <LazyCounter />
          </Suspense>
        } />
      </Routes>
    </>
  )
}

export default App
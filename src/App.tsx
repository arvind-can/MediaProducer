import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { lazy } from "react"
import { Loader2 } from 'lucide-react';
import { Suspense } from 'react';

function Loading() {
  return (
    <div className="flex h-[100vh] justify-center items-center">
      <Loader2 className=' h-10 w-10 animate-spin' />
    </div>
  )
}

const Home = lazy(() => import('./pages/home'))

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/my-videos" replace />}/>
          <Route path="/home" element={<Home />} />
          
          {/* <Route path="/" element={} /> */}
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}


{/* async function delay<T>(promise : Promise<T>) : Promise<T> {
  await new Promise((resolve) => {
    setTimeout(resolve, 5000)
  })
  return promise
} */}

export default App

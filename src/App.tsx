import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ScrollToHash } from './components/ScrollToHash'
import { ScrollProgress } from './components/ScrollProgress'
import { CursorGlow } from './components/CursorGlow'

const ProjectDetailPage = lazy(() =>
  import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })),
)

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg">
      <div className="w-8 h-8 border-2 border-fox border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <ScrollProgress />
      <CursorGlow />
      <div className="grain-overlay" aria-hidden="true" />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work/:id" element={<ProjectDetailPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

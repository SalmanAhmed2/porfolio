import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FloatingWhatsApp } from '@digicroz/react-floating-whatsapp'
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

function WhatsappFloating() {
  const handleSubmit = (message: any) => {
    console.log('Message sent:', message)
    // Add your custom logic here
  }
  return (
    <FloatingWhatsApp
      phoneNumber='923402031088'
      accountName='Customer Support'
      onSubmit={handleSubmit}
      className='custom-whatsapp-widget'
      buttonStyle={{ backgroundColor: '#25D366' }}
      chatboxStyle={{ borderRadius: '20px' }}
      darkMode={true}
      notification={true}
      notificationDelay={30}
    />
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <ScrollProgress />
      <CursorGlow />
      <WhatsappFloating />
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

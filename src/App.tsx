import { lazy, Suspense, type ReactNode } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const SellerHQ = lazy(() => import('./pages/SellerHQ'))
const About = lazy(() => import('./pages/About'))
const Support = lazy(() => import('./pages/Support'))
const Legal = lazy(() => import('./pages/Legal'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="ons-page-loading" role="status" aria-live="polite">
      <span className="ons-page-loading__dot" />
      <span>Loading ONSoftware</span>
    </div>
  )
}

function LazyPage({ children }: { children: ReactNode }) {
  return <Suspense fallback={<PageFallback />}>{children}</Suspense>
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LazyPage><Home /></LazyPage>} />
          <Route path="/products/sellerhq" element={<LazyPage><SellerHQ /></LazyPage>} />
          <Route path="/about" element={<LazyPage><About /></LazyPage>} />
          <Route path="/support" element={<LazyPage><Support /></LazyPage>} />
          <Route path="/legal" element={<LazyPage><Legal /></LazyPage>} />
          <Route path="/legal/:page" element={<LazyPage><Legal /></LazyPage>} />

          {/* Keep old public URLs working while presenting a much smaller site. */}
          <Route path="/products" element={<Navigate to="/products/sellerhq" replace />} />
          <Route path="/products/sellerhq/pricing" element={<Navigate to="/products/sellerhq#pricing" replace />} />
          <Route path="/updates" element={<Navigate to="/about#updates" replace />} />
          <Route path="/security" element={<Navigate to="/support#security" replace />} />
          <Route path="/contact" element={<Navigate to="/support#contact" replace />} />
          <Route path="/account" element={<Navigate to="/products/sellerhq" replace />} />

          <Route path="*" element={<LazyPage><NotFound /></LazyPage>} />
        </Route>
      </Routes>
    </>
  )
}

import { lazy, Suspense, type ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const Home = lazy(() => import('./pages/Home'))
const Products = lazy(() => import('./pages/Products'))
const SellerHQ = lazy(() => import('./pages/SellerHQ'))
const Pricing = lazy(() => import('./pages/Pricing'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Support = lazy(() => import('./pages/Support'))
const Updates = lazy(() => import('./pages/Updates'))
const Security = lazy(() => import('./pages/Security'))
const Legal = lazy(() => import('./pages/Legal'))
const Account = lazy(() => import('./pages/Account'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div className="ons-section" style={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}>
      <p style={{ color: 'var(--ons-ink-faint)' }}>Loading…</p>
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
          <Route path="/products" element={<LazyPage><Products /></LazyPage>} />
          <Route path="/products/sellerhq" element={<LazyPage><SellerHQ /></LazyPage>} />
          <Route path="/products/sellerhq/pricing" element={<LazyPage><Pricing /></LazyPage>} />
          <Route path="/about" element={<LazyPage><About /></LazyPage>} />
          <Route path="/updates" element={<LazyPage><Updates /></LazyPage>} />
          <Route path="/security" element={<LazyPage><Security /></LazyPage>} />
          <Route path="/contact" element={<LazyPage><Contact /></LazyPage>} />
          <Route path="/support" element={<LazyPage><Support /></LazyPage>} />
          <Route path="/legal" element={<LazyPage><Legal /></LazyPage>} />
          <Route path="/legal/:page" element={<LazyPage><Legal /></LazyPage>} />
          <Route path="/account" element={<LazyPage><Account /></LazyPage>} />
          <Route path="*" element={<LazyPage><NotFound /></LazyPage>} />
        </Route>
      </Routes>
    </>
  )
}

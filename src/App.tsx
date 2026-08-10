import { lazy, Suspense } from 'react'
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
const Legal = lazy(() => import('./pages/Legal'))
const Account = lazy(() => import('./pages/Account'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return (
    <div
      className="ons-section"
      style={{ minHeight: '50vh', display: 'grid', placeItems: 'center' }}
    >
      <p style={{ color: 'var(--ons-ink-faint)' }}>Loading…</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageFallback />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/products"
            element={
              <Suspense fallback={<PageFallback />}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="/products/sellerhq"
            element={
              <Suspense fallback={<PageFallback />}>
                <SellerHQ />
              </Suspense>
            }
          />
          <Route
            path="/products/sellerhq/pricing"
            element={
              <Suspense fallback={<PageFallback />}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/support"
            element={
              <Suspense fallback={<PageFallback />}>
                <Support />
              </Suspense>
            }
          />
          <Route
            path="/legal"
            element={
              <Suspense fallback={<PageFallback />}>
                <Legal />
              </Suspense>
            }
          />
          <Route
            path="/legal/:page"
            element={
              <Suspense fallback={<PageFallback />}>
                <Legal />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense fallback={<PageFallback />}>
                <Account />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  )
}

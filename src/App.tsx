import { AnimatePresence, motion } from "framer-motion";
import { lazy, Suspense } from "react";
import './App.css'
import { Footer } from './components/ui/Footer'
import { Navbar } from './components/ui/index'
import { Routes, Route } from 'react-router-dom'
// import HomePage from './pages/home'
// import FeaturesPage from './pages/features'
// import PricingPage from './pages/pricing'
// import AboutPage from './pages/about'
// import CookiesPage from './pages/cookies'
// import PrivacyPage from './pages/privacy'
// import TermsPage from './pages/terms'

const HomePage = lazy(() => import("./pages/home"));
const FeaturesPage = lazy(() => import("./pages/features"));
const PricingPage = lazy(() => import("./pages/pricing"));
const AboutPage = lazy(() => import ("./pages/about"));
const CookiesPage = lazy(() => import ("./pages/cookies"));
const PrivacyPage = lazy(() => import ("./pages/privacy"));
const TermsPage = lazy(() => import ("./pages/terms"));

function App() {
  return (
    <>
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="min-h-[50vh]"
        >
          <Suspense fallback={<div className="p-6">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/features" element={<FeaturesPage />} />

            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cookies" element={<CookiesPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>

      <Footer />
    </>
  )
}
export default App
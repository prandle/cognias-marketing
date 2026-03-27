import './App.css'
import {Footer} from './components/ui/Footer'
import {Navbar} from './components/ui/index'

import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import FeaturesPage from './pages/features'
import PricingPage from './pages/pricing'
import AboutPage from './pages/about'

import CookiesPage from './pages/cookies'
import PrivacyPage from './pages/privacy'
import TermsPage from './pages/terms'




function App() {

  return (
    
    <>
    <Navbar />

    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/features" element={<FeaturesPage />} />

        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </main>
    
    <Footer />
    </>
  )
}

export default App

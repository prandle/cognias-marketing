import './App.css'
import {Footer} from './components/ui/Footer'
import {Navbar} from './components/ui/index'

import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'


function App() {

  return (
    
    <>
    <Navbar />

    <main className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </main>
    
    <Footer />
    </>
  )
}

export default App

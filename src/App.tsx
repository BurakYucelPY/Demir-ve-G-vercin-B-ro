import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Layout from './components/Layout'
import Anasayfa from './pages/Anasayfa'
import Hakkimizda from './pages/Hakkimizda'
import Hizmetlerimiz from './pages/Hizmetlerimiz'
import Iletisim from './pages/Iletisim'
import Ekibimiz from './pages/Ekibimiz'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function AppContent() {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Sadece ana sayfa için loading göster
    if (location.pathname === '/') {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2500) // 2.5 saniye loading

      return () => clearTimeout(timer)
    } else {
      setIsLoading(false)
    }
  }, [location.pathname])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} onLoadingComplete={handleLoadingComplete} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Anasayfa key={location.pathname} />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="iletisim" element={<Iletisim />} />
          <Route path="ekibimiz" element={<Ekibimiz />} />
        </Route>
      </Routes>
    </>
  )
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App

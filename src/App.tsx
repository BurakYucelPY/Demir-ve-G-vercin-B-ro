import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Anasayfa from './pages/Anasayfa'
import Hakkimizda from './pages/Hakkimizda'
import Hizmetlerimiz from './pages/Hizmetlerimiz'
import Iletisim from './pages/Iletisim'
import Makaleler from './pages/Makaleler'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Anasayfa />} />
          <Route path="hakkimizda" element={<Hakkimizda />} />
          <Route path="hizmetlerimiz" element={<Hizmetlerimiz />} />
          <Route path="iletisim" element={<Iletisim />} />
          <Route path="makaleler" element={<Makaleler />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

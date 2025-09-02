import Header from '../components/Header'
import FeaturesSection from '../components/FeaturesSection'
import BusinessServiceSection from '../components/BusinessServiceSection'
import StatsSection from '../components/StatsSection'
import StatsSection2 from '../components/StatsSection2'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Anasayfa() {
  const location = useLocation()
  
  useEffect(() => {
    // scroll-animate elementlerini yeniden observe et
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      }, { threshold: 0.1 })

      // Önce tüm elementlerin animate class'ını kaldır
      document.querySelectorAll('.scroll-animate').forEach(el => {
        el.classList.remove('animate')
        observer.observe(el)
      })
    }

    // Biraz gecikme ile çalıştır ki DOM tamamen yüklensin
    setTimeout(() => {
      observeElements()
    }, 100)
  }, [location.pathname])
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen"
      >
        <Header />
        <StatsSection2 />
        <FeaturesSection />
        <StatsSection />
        <BusinessServiceSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

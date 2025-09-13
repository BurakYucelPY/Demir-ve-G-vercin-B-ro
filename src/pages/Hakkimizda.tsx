import RealHeader from '../components/RealHeader'
import AboutIntroSection from '../components/AboutIntroSection'
import AboutValuesSection from '../components/AboutValuesSection'
import AboutMissionSection from '../components/AboutMissionSection'
import AboutAchievementsSection from '../components/AboutAchievementsSection'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Hakkimizda() {
  const location = useLocation()
  
  useEffect(() => {
    // Sayfa açıldığında en üste scroll et
    window.scrollTo({ top: 0, behavior: 'instant' })
    
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
        <RealHeader 
          title="Hakkımızda" 
          subtitle="Demir & Güvercin Hukuk Bürosu"
          description="Adalet ve hukuku ilke edinerek, müvekkillerimizin haklarını en iyi şekilde savunuyoruz."
        />
        <AboutIntroSection />
        <AboutValuesSection />
        <AboutMissionSection />
        <AboutAchievementsSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

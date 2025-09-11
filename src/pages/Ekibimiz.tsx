import RealHeader from '../components/RealHeader'
import TeamIntroSection from '../components/TeamIntroSection'
import TeamMemberSection from '../components/TeamMemberSection'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Ekibimiz() {
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
          title="Ekibimiz"
          description="Deneyimli ve uzman avukatlarımız ile müvekkillerimizin haklarını en iyi şekilde savunuyoruz."
        />
        <TeamIntroSection />
        <TeamMemberSection />
        <Footer />
      </motion.div>
    </AnimatePresence>
  )
}

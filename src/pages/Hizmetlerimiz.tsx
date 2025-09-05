import RealHeader from '../components/RealHeader'
import IndividualLegalServices from '../components/IndividualLegalServices'
import CorporateLegalServices from '../components/CorporateLegalServices'
import LitigationServices from '../components/LitigationServices'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

export default function Hizmetlerimiz() {
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
        <RealHeader 
          title="Hizmetlerimiz"
          description="Bireysel ve kurumsal müvekkillere, tüm hukuki süreçlerde profesyonel destek sağlıyoruz."
        />
        <IndividualLegalServices />
        <CorporateLegalServices />
        <LitigationServices />
        <Footer />
        
        {/* Mevcut bölüm korundu - gizli */}
        <div className="hidden">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-gray-600">
              Hizmetlerimiz içeriği buraya gelecek.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

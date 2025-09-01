import Header from '../components/Header'
import FeaturesSection from '../components/FeaturesSection'
import BusinessServiceSection from '../components/BusinessServiceSection'
import StatsSection from '../components/StatsSection'
import StatsSection2 from '../components/StatsSection2'
import Footer from '../components/Footer'

export default function Anasayfa() {
  return (
    <div className="min-h-screen">
      <Header />
      <StatsSection2 />
      <FeaturesSection />
      <StatsSection />
      <BusinessServiceSection />
      <Footer />
    </div>
  )
}

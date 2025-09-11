import RealHeader from '../components/RealHeader'
import { useEffect } from 'react'

export default function Makaleler() {
  useEffect(() => {
    // Sayfa açıldığında en üste scroll et
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <RealHeader title="Makaleler" />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Makaleler
        </h1>
        <p className="text-gray-600">
          Makaleler içeriği buraya gelecek.
        </p>
      </div>
    </div>
  )
}

import { ScaleIcon } from '@heroicons/react/24/outline'

export default function LitigationServices() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        backgroundImage: 'url("/images/Dava.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.85) 100%)'
        }}
      ></div>
      
      {/* Additional background effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 40% 40%, rgba(239,68,68,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(220,38,38,0.08) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="scroll-animate delay-100 inline-flex items-center px-6 py-3 rounded-full bg-red-500/10 border border-red-400/30 mb-8">
            <ScaleIcon className="w-5 h-5 text-red-400 mr-2" />
            <span className="text-red-400 font-semibold">Dava ve Takip Hizmetleri</span>
          </div>
          <h2 className="scroll-animate delay-200 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Profesyonel Dava Takip Süreciniz
          </h2>
          <p className="scroll-animate delay-300 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Dava sürecinizde size rehberlik eden deneyimli ekibimizle, her aşamada yanınızdayız. 
            Dosyanızın detaylı incelenmesinden, strateji geliştirilmesine, mahkeme takiplerinden 
            sonuca kadar tüm süreçte profesyonel destek alırsınız. Müvekkil menfaatini önceleyerek, 
            şeffaf iletişim ve düzenli bilgilendirme ile hukuki haklarınızı en iyi şekilde savunuyoruz.
          </p>
        </div>
      </div>
    </div>
  )
}

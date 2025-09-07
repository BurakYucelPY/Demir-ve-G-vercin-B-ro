import { ScaleIcon, ClockIcon, ExclamationTriangleIcon, DocumentTextIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const processSteps = [
  {
    step: 1,
    title: 'Dosya İnceleme',
    description: 'Detaylı hukuki analiz ve strateji belirleme',
    icon: DocumentTextIcon,
    duration: '2-3 gün'
  },
  {
    step: 2,
    title: 'Dava Stratejisi',
    description: 'Kazanma odaklı hukuki strateji geliştirme',
    icon: ClockIcon,
    duration: '1 hafta'
  },
  {
    step: 3,
    title: 'Dava Açma/Savunma',
    description: 'Profesyonel dava dilekçesi ve savunma',
    icon: ScaleIcon,
    duration: '2 hafta'
  },
  {
    step: 4,
    title: 'Aktif Takip',
    description: 'Sürekli izleme ve müvekkil bilgilendirme',
    icon: ArrowPathIcon,
    duration: 'Sürekli'
  }
]

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
            Dava Süreci Nasıl İşliyor?
          </h2>
          <p className="scroll-animate delay-300 text-lg leading-8 text-gray-300">
            Dava sürecinizde size rehberlik edecek adımlarımız
          </p>
        </div>

        {/* Process timeline */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className={`scroll-animate delay-${1000 + index * 100} relative`}
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-2 bg-gradient-to-r from-red-400/80 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step icon */}
                  <div className="mx-auto mb-6 relative">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/30 rounded-xl border border-red-400/40 flex items-center justify-center shadow-lg">
                      <step.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </div>
                  </div>
                  
                  {/* Step info */}
                  <h4 className="text-lg font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-900/30 border border-red-700/30 rounded-full">
                    <ClockIcon className="w-4 h-4 text-red-400 mr-2" />
                    <span className="text-red-300 text-xs font-semibold">{step.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency contact section */}
        <div className="scroll-animate delay-1400 bg-gradient-to-r from-red-900/40 via-red-800/30 to-red-900/40 backdrop-blur-lg rounded-2xl border border-red-600/30 p-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center border border-red-400/40">
              <ExclamationTriangleIcon className="w-10 h-10 text-red-400" />
            </div>
          </div>
          
          <h3 className="text-3xl font-bold text-white mb-6">
            Acil Hukuki Destek Gerekiyor mu?
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
            Gözaltı, tutuklama, haciz işlemleri gibi acil durumlarda 
            <span className="text-red-300 font-semibold"> 7/24 ulaşabileceğiniz</span> acil hukuki destek hattımız.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 text-lg flex items-center justify-center">
              <ExclamationTriangleIcon className="w-5 h-5 mr-2" />
              Acil Destek: 0532 XXX XX XX
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-red-400 hover:border-red-300 text-red-300 hover:text-red-200 font-semibold rounded-lg transition-all duration-300 text-lg">
              Dava Dosyası Değerlendirme
            </button>
          </div>

          {/* Additional info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-4 bg-red-800/20 rounded-lg border border-red-700/30">
              <div className="font-semibold text-red-300 mb-2">⚡ Hızlı Müdahale</div>
              <div className="text-gray-300">Acil durumlarda 1 saat içinde yanıtlıyoruz</div>
            </div>
            <div className="p-4 bg-red-800/20 rounded-lg border border-red-700/30">
              <div className="font-semibold text-red-300 mb-2">🏛️ Tüm Mahkemeler</div>
              <div className="text-gray-300">İstanbul geneli tüm mahkemelerde temsil</div>
            </div>
            <div className="p-4 bg-red-800/20 rounded-lg border border-red-700/30">
              <div className="font-semibold text-red-300 mb-2">📋 Şeffaf Süreç</div>
              <div className="text-gray-300">Düzenli bilgilendirme ve durum raporları</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

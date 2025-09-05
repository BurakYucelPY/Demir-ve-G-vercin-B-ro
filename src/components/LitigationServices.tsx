import { ScaleIcon, ClockIcon, ShieldCheckIcon, UserGroupIcon, CheckCircleIcon, ExclamationTriangleIcon, DocumentTextIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

const litigationAreas = [
  {
    id: 1,
    title: 'Ticari Dava ve Takipler',
    description: 'Ticari alacaklar, sözleşme ihlalleri ve ticari uyuşmazlıklar',
    icon: ScaleIcon,
    urgency: 'Yüksek',
    averageDuration: '6-12 ay',
    successRate: '92%',
    cases: [
      'Alacak Takip Davaları',
      'Sözleşme İhlali Davaları',
      'Haksız Rekabet Davaları',
      'Ticari Ortaklık Uyuşmazlıkları',
      'İcra ve İflas Takipleri'
    ]
  },
  {
    id: 2,
    title: 'İş Hukuku Davaları',
    description: 'İşçi-işveren uyuşmazlıkları ve iş hukuku süreçleri',
    icon: UserGroupIcon,
    urgency: 'Orta',
    averageDuration: '8-18 ay',
    successRate: '89%',
    cases: [
      'İşe İade Davaları',
      'Kıdem ve İhbar Tazminatı',
      'Mobbing ve İş Kazası Davaları',
      'Fazla Mesai Alacakları',
      'İş Sözleşmesi Uyuşmazlıkları'
    ]
  },
  {
    id: 3,
    title: 'Ceza Hukuku Savunması',
    description: 'Ağır ceza ve sulh ceza mahkemelerinde savunma',
    icon: ShieldCheckIcon,
    urgency: 'Kritik',
    averageDuration: '12-24 ay',
    successRate: '87%',
    cases: [
      'Ağır Ceza Davaları',
      'Kabahat ve Adli Para Cezaları',
      'Soruşturma Aşaması Savunma',
      'Suç Mağduru Hakları',
      'Beraat ve Ceza İndirimi'
    ]
  }
]

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
        background: 'linear-gradient(180deg, #111827 0%, #0f172a 50%, #0a0a0a 100%)',
        position: 'relative'
      }}
    >
      {/* Background effects */}
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
            Güçlü Hukuki Savunma
          </h2>
          <p className="scroll-animate delay-300 text-lg leading-8 text-gray-300">
            Deneyimli kadromuz ve başarılı geçmişimizle, her türlü hukuki uyuşmazlıkta 
            haklarınızı en etkin şekilde savunuyoruz.
          </p>
        </div>

        {/* Litigation areas */}
        <div className="mb-24">
          <h3 className="scroll-animate delay-400 text-2xl font-bold text-white text-center mb-12">
            Dava Alanlarımız
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {litigationAreas.map((area, index) => (
              <div 
                key={area.id}
                className={`scroll-animate delay-${500 + index * 100} group relative`}
              >
                <div className="h-full p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 hover:border-red-400/30 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20">
                  
                  {/* Urgency indicator */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-red-500/20 border border-red-400/40 shadow-lg">
                        <area.icon className="h-8 w-8 text-red-400" />
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      area.urgency === 'Kritik' ? 'bg-red-900/50 text-red-300 border border-red-600/30' :
                      area.urgency === 'Yüksek' ? 'bg-orange-900/50 text-orange-300 border border-orange-600/30' :
                      'bg-yellow-900/50 text-yellow-300 border border-yellow-600/30'
                    }`}>
                      {area.urgency} Öncelik
                    </div>
                  </div>

                  {/* Title and description */}
                  <h4 className="text-xl font-bold text-white mb-4">
                    {area.title}
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Statistics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-red-900/30 rounded-lg border border-red-700/30">
                      <div className="text-red-300 font-bold text-lg">{area.successRate}</div>
                      <div className="text-gray-400 text-xs">Başarı Oranı</div>
                    </div>
                    <div className="text-center p-3 bg-red-900/30 rounded-lg border border-red-700/30">
                      <div className="text-red-300 font-bold text-lg">{area.averageDuration}</div>
                      <div className="text-gray-400 text-xs">Ortalama Süre</div>
                    </div>
                  </div>

                  {/* Case types */}
                  <div className="space-y-2">
                    {area.cases.map((caseType, caseIndex) => (
                      <div key={caseIndex} className="flex items-center gap-3 text-sm">
                        <CheckCircleIcon className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span className="text-gray-300">{caseType}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="scroll-animate delay-800 text-2xl font-bold text-white mb-4">
              Dava Süreci Nasıl İşliyor?
            </h3>
            <p className="scroll-animate delay-900 text-gray-300">
              Dava sürecinizde size rehberlik edecek adımlarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={step.step}
                className={`scroll-animate delay-${1000 + index * 100} relative`}
              >
                {/* Connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-red-400/50 to-transparent z-0"></div>
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

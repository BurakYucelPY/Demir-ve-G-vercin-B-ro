import { ScaleIcon, ExclamationTriangleIcon, DocumentMagnifyingGlassIcon, HandRaisedIcon, ChatBubbleLeftRightIcon, ClockIcon, StarIcon, PhoneIcon } from '@heroicons/react/24/outline'

const mainServices = [
  {
    name: 'Dava Yönetimi ve Strateji',
    description: "Başından sonuna kadar profesyonel dava takibi ve stratejik hukuki danışmanlık.",
    icon: ScaleIcon,
    color: 'purple',
    stats: { cases: '200+', rate: '%92', time: '18 ay' },
    specialties: ['Ticari Davalar', 'İdari Davalar', 'Hukuki Uyuşmazlıklar', 'Temyiz Süreçleri']
  },
  {
    name: 'İcra ve Tahsilat',
    description: "Alacak tahsilatı, icra takipleri ve borç yapılandırma konularında uzman çözümler.",
    icon: ExclamationTriangleIcon,
    color: 'red',
    stats: { cases: '150+', rate: '%88', time: '6 ay' },
    specialties: ['İcra Takibi', 'Haciz İşlemleri', 'Borç Yapılandırma', 'Konkordato Süreçleri']
  },
  {
    name: 'Alternatif Çözüm Yöntemleri',
    description: "Arabuluculuk, tahkim ve uzlaştırma ile hızlı ve etkili uyuşmazlık çözümü.",
    icon: HandRaisedIcon,
    color: 'green',
    stats: { cases: '80+', rate: '%95', time: '3 ay' },
    specialties: ['Arabuluculuk', 'Tahkim Süreci', 'Ticari Uzlaştırma', 'Aile Arabuluculuğu']
  },
]

const supportServices = [
  {
    name: 'Hukuki Araştırma ve İnceleme',
    description: "Derinlemesine hukuki araştırma, mevzuat analizi ve içtihat incelemesi.",
    icon: DocumentMagnifyingGlassIcon,
    features: ['İçtihat Araştırması', 'Mevzuat Analizi', 'Hukuki Görüş', 'Risk Değerlendirmesi']
  },
  {
    name: 'Müzakere ve Temsil',
    description: "Profesyonel müzakere süreçleri ve hukuki temsil hizmetleri.",
    icon: ChatBubbleLeftRightIcon,
    features: ['Ön Müzakere', 'Anlaşma Görüşmeleri', 'Mahkeme Temsili', 'Stratejik Danışmanlık']
  },
  {
    name: '7/24 Acil Hukuki Destek',
    description: "Acil durumlarda kesintisiz hukuki destek ve danışmanlık hizmeti.",
    icon: ClockIcon,
    features: ['24 Saat Destek', 'Acil Müdahale', 'Telefon Danışmanlığı', 'Anında Çözüm']
  },
]

const processSteps = [
  {
    step: 1,
    title: 'İlk Değerlendirme',
    description: 'Detaylı dosya inceleme ve strateji belirleme',
    duration: '1-2 gün',
    activities: ['Dosya İnceleme', 'Hukuki Analiz', 'Strateji Geliştirme', 'Maliyet Hesaplama']
  },
  {
    step: 2,
    title: 'Hazırlık Süreci',
    description: 'Belgeler, dilekçeler ve savunma hazırlığı',
    duration: '1-2 hafta',
    activities: ['Belge Toplama', 'Dilekçe Hazırlama', 'Delil Değerlendirme', 'Tanık Hazırlığı']
  },
  {
    step: 3,
    title: 'Uygulama',
    description: 'Mahkeme süreçleri ve aktif takip',
    duration: 'Değişken',
    activities: ['Duruşma Katılımı', 'Süreç Takibi', 'Ara Kararlar', 'Strateji Güncelleme']
  },
  {
    step: 4,
    title: 'Sonuçlandırma',
    description: 'Karar analizi ve sonrası süreçler',
    duration: '1-4 hafta',
    activities: ['Karar İnceleme', 'İtiraz Değerlendirme', 'İcra Süreçleri', 'Raporlama']
  },
]

export default function LitigationServicesSection() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: 'linear-gradient(45deg, #0a0a0a 0%, #1a0a1a 25%, #0a1a1a 50%, #1a1a0a 75%, #0a0a0a 100%)',
        position: 'relative'
      }}
    >
      {/* Dynamic background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 25% 25%, rgba(147,51,234,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(239,68,68,0.06) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-green-400/30 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-0.5 h-0.5 bg-red-400/50 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Complex line pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-400/30 via-transparent to-green-400/30"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-red-400/30 via-transparent to-purple-400/30"></div>
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/20 to-transparent"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Premium header */}
        <div className="mx-auto max-w-5xl text-center mb-24">
          <div className="scroll-animate delay-100 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-green-500/20 to-red-500/20 border border-purple-400/30 mb-8">
            <ScaleIcon className="w-6 h-6 text-purple-400 mr-3" />
            <span className="text-white font-semibold">Profesyonel Dava Yönetimi</span>
          </div>
          <h2 className="scroll-animate delay-200 text-6xl font-bold tracking-tight text-white sm:text-7xl mb-8 bg-gradient-to-r from-purple-200 via-green-200 to-red-200 bg-clip-text text-transparent">
            Dava & Uyuşmazlık Çözümü
          </h2>
          <p className="scroll-animate delay-300 text-xl leading-8 text-gray-300 max-w-4xl mx-auto mb-12">
            Mahkeme süreçlerinden alternatif çözüm yöntemlerine kadar, uyuşmazlıklarınızı 
            en etkili şekilde çözmek için kapsamlı hizmet portföyü.
          </p>
          
          {/* Performance indicators */}
          <div className="scroll-animate delay-400 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-purple-900/40 to-purple-800/30 rounded-2xl border border-purple-600/30">
              <div className="text-4xl font-bold text-purple-300 mb-2">430+</div>
              <div className="text-purple-200">Başarıyla Sonuçlanan Dava</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-900/40 to-green-800/30 rounded-2xl border border-green-600/30">
              <div className="text-4xl font-bold text-green-300 mb-2">%91</div>
              <div className="text-green-200">Genel Başarı Oranı</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-red-900/40 to-red-800/30 rounded-2xl border border-red-600/30">
              <div className="text-4xl font-bold text-red-300 mb-2">12 Yıl</div>
              <div className="text-red-200">Ortalama Deneyim</div>
            </div>
          </div>
        </div>

        {/* Main services showcase */}
        <div className="mb-24">
          <h3 className="scroll-animate delay-500 text-3xl font-bold text-center text-white mb-16">Ana Hizmet Alanlarımız</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div 
                key={service.name}
                className={`scroll-animate delay-${600 + index * 100} group relative`}
              >
                <div className="relative h-[450px] p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-lg rounded-3xl border shadow-2xl transition-all duration-700 hover:scale-105 flex flex-col"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)',
                    borderColor: service.color === 'purple' ? 'rgba(147, 51, 234, 0.4)' : 
                                service.color === 'red' ? 'rgba(239, 68, 68, 0.4)' : 'rgba(16, 185, 129, 0.4)',
                    boxShadow: service.color === 'purple' ? '0 25px 50px -12px rgba(147, 51, 234, 0.3)' : 
                              service.color === 'red' ? '0 25px 50px -12px rgba(239, 68, 68, 0.3)' : '0 25px 50px -12px rgba(16, 185, 129, 0.3)'
                  }}
                >
                  
                  {/* Service header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
                      style={{
                        background: service.color === 'purple' ? 'linear-gradient(135deg, rgba(147, 51, 234, 0.3) 0%, rgba(126, 34, 206, 0.4) 100%)' : 
                                   service.color === 'red' ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.4) 100%)' : 
                                   'linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(5, 150, 105, 0.4) 100%)',
                        border: service.color === 'purple' ? '1px solid rgba(147, 51, 234, 0.5)' : 
                               service.color === 'red' ? '1px solid rgba(239, 68, 68, 0.5)' : '1px solid rgba(16, 185, 129, 0.5)'
                      }}
                    >
                      <service.icon className="h-8 w-8"
                        style={{
                          color: service.color === 'purple' ? 'rgb(196, 181, 253)' : 
                                service.color === 'red' ? 'rgb(252, 165, 165)' : 'rgb(167, 243, 208)'
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-1">{service.name}</h4>
                      <p className="text-gray-400 text-sm">{service.description}</p>
                    </div>
                  </div>

                  {/* Statistics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl border"
                    style={{
                      background: service.color === 'purple' ? 'rgba(88, 28, 135, 0.3)' : 
                                 service.color === 'red' ? 'rgba(153, 27, 27, 0.3)' : 'rgba(6, 95, 70, 0.3)',
                      borderColor: service.color === 'purple' ? 'rgba(107, 33, 168, 0.3)' : 
                                  service.color === 'red' ? 'rgba(185, 28, 28, 0.3)' : 'rgba(6, 120, 95, 0.3)'
                    }}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold"
                        style={{
                          color: service.color === 'purple' ? 'rgb(196, 181, 253)' : 
                                service.color === 'red' ? 'rgb(252, 165, 165)' : 'rgb(167, 243, 208)'
                        }}
                      >{service.stats.cases}</div>
                      <div className="text-xs text-gray-400">Dava</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold"
                        style={{
                          color: service.color === 'purple' ? 'rgb(196, 181, 253)' : 
                                service.color === 'red' ? 'rgb(252, 165, 165)' : 'rgb(167, 243, 208)'
                        }}
                      >{service.stats.rate}</div>
                      <div className="text-xs text-gray-400">Başarı</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold"
                        style={{
                          color: service.color === 'purple' ? 'rgb(196, 181, 253)' : 
                                service.color === 'red' ? 'rgb(252, 165, 165)' : 'rgb(167, 243, 208)'
                        }}
                      >{service.stats.time}</div>
                      <div className="text-xs text-gray-400">Ortalama</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="flex-1">
                    <h5 className="font-semibold mb-3 flex items-center"
                      style={{
                        color: service.color === 'purple' ? 'rgb(196, 181, 253)' : 
                              service.color === 'red' ? 'rgb(252, 165, 165)' : 'rgb(167, 243, 208)'
                      }}
                    >
                      <StarIcon className="w-4 h-4 mr-2" />
                      Uzmanlık Alanları
                    </h5>
                    <div className="space-y-2">
                      {service.specialties.map((specialty, specIndex) => (
                        <div key={specIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 rounded-full mr-3"
                            style={{
                              backgroundColor: service.color === 'purple' ? 'rgb(147, 51, 234)' : 
                                              service.color === 'red' ? 'rgb(239, 68, 68)' : 'rgb(16, 185, 129)'
                            }}
                          ></div>
                          {specialty}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="mt-6 w-full py-3 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                    style={{
                      background: service.color === 'purple' ? 'linear-gradient(to right, rgb(147, 51, 234), rgb(126, 34, 206))' : 
                                 service.color === 'red' ? 'linear-gradient(to right, rgb(239, 68, 68), rgb(220, 38, 38))' : 
                                 'linear-gradient(to right, rgb(16, 185, 129), rgb(5, 150, 105))'
                    }}
                  >
                    Uzman Görüşü Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process timeline */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h3 className="scroll-animate delay-900 text-3xl font-bold text-white mb-4">Dava Süreç Yönetimi</h3>
            <p className="scroll-animate delay-1000 text-gray-300">Başından sonuna sistematik ve profesyonel yaklaşım</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500/30 via-green-500/30 to-red-500/30 transform -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.step}
                  className={`scroll-animate delay-${1100 + index * 100} relative`}
                >
                  {/* Step number */}
                  <div className="flex justify-center mb-6">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-green-500/30 border-4 border-white/20 shadow-xl">
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="text-center p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/80 rounded-2xl border border-gray-600/40">
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm mb-4">{step.description}</p>
                    <div className="text-purple-300 font-semibold text-sm mb-4">{step.duration}</div>
                    
                    <div className="space-y-1">
                      {step.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="text-xs text-gray-400 flex items-center justify-center">
                          <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support services */}
        <div className="mb-24">
          <h3 className="scroll-animate delay-1500 text-3xl font-bold text-center text-white mb-16">Destekleyici Hizmetler</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div 
                key={service.name}
                className={`scroll-animate delay-${1600 + index * 100} group p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-2xl border border-gray-600/40 hover:border-purple-400/60 transition-all duration-500 hover:transform hover:scale-105`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <service.icon className="h-8 w-8 text-purple-400" />
                  <h4 className="text-lg font-semibold text-white">{service.name}</h4>
                </div>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency contact CTA */}
        <div className="text-center">
          <div className="scroll-animate delay-1900 max-w-4xl mx-auto p-12 bg-gradient-to-r from-red-900/60 via-purple-900/50 to-red-900/60 backdrop-blur-lg rounded-3xl border border-red-500/40 shadow-2xl">
            <PhoneIcon className="h-16 w-16 text-red-300 mx-auto mb-6" />
            <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-red-200 to-purple-200 bg-clip-text text-transparent">
              Acil Hukuki Durumunuz mu Var?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              7/24 acil hukuki destek hattımız ile anında hukuki danışmanlık alabilirsiniz. 
              <span className="text-red-300 font-semibold"> İlk 15 dakika danışmanlık ücretsizdir.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                🚨 ACİL HUKUKI DESTEK
              </button>
              <button className="px-12 py-5 bg-transparent border-2 border-red-400 hover:border-red-300 hover:bg-red-500/10 text-red-300 hover:text-red-200 font-semibold rounded-xl transition-all duration-300 text-lg">
                WhatsApp: 0542 XXX XX XX
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

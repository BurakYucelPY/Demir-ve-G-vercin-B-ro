import { BuildingOfficeIcon, DocumentCheckIcon, ShieldExclamationIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const corporateServices = [
  {
    name: 'Şirket Kuruluşu ve Yapılandırma',
    description: "Şirketinizi en uygun yapıda kurmak ve büyüme hedeflerinize uygun yapılandırmak için kapsamlı hukuki destek.",
    icon: BuildingOfficeIcon,
    features: [
      'Limited ve Anonim Şirket Kuruluşu',
      'Ana Sözleşme Hazırlama', 
      'Ortaklık Anlaşmaları'
    ],
    processSteps: ['Yapı Analizi', 'Sözleşme Hazırlığı', 'Resmi İşlemler', 'Tescil'],
    timeline: '2-4 hafta',
    startingPrice: '3.500₺'
  },
  {
    name: 'Kurumsal Uyumluluk ve Risk Yönetimi',
    description: "KVKK, GDPR ve sektörel mevzuatlara uyum sağlayarak şirketinizi hukuki risklerden koruyoruz.",
    icon: ShieldExclamationIcon,
    features: [
      'KVKK ve GDPR Uyumluluk',
      'Veri İşleme Politikaları',
      'Compliance Programları'
    ],
    processSteps: ['Risk Analizi', 'Politika Geliştirme', 'Uygulama', 'İzleme'],
    timeline: '4-8 hafta',
    startingPrice: '5.000₺'
  },
  {
    name: 'Ticaret ve Sözleşme Hukuku',
    description: "Ticari ilişkilerinizi güçlendiren, risk minimize eden kapsamlı sözleşme ve ticaret hukuku hizmetleri.",
    icon: DocumentCheckIcon,
    features: [
      'Tedarikçi ve Distribütör Sözleşmeleri',
      'Müşteri Sözleşmeleri',
      'Ticari Uyuşmazlık Çözümü'
    ],
    processSteps: ['İhtiyaç Analizi', 'Taslak Hazırlama', 'Müzakere', 'Finalizasyon'],
    timeline: '1-3 hafta',
    startingPrice: '1.200₺'
  },
]

export default function CorporateServicesSection() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        position: 'relative'
      }}
    >
      {/* Corporate-style background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 30% 20%, rgba(255,193,7,0.08) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(255,152,0,0.06) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Professional grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,193,7,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,193,7,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Corporate accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-yellow-400/40 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-yellow-400/40 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Corporate header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="scroll-animate delay-100 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/20 mb-8">
            <BuildingOfficeIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Kurumsal Müvekkiller İçin</span>
          </div>
          <h2 className="scroll-animate delay-200 text-5xl font-bold tracking-tight text-white sm:text-6xl mb-8 bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent">
            Kurumsal Hukuki Çözümler
          </h2>
          <p className="scroll-animate delay-300 text-xl leading-8 text-gray-300 max-w-4xl mx-auto">
            Şirketinizin büyümesini destekleyen, riskleri minimize eden ve rekabet avantajı sağlayan 
            kapsamlı kurumsal hukuki danışmanlık hizmetleri.
          </p>
        </div>

        {/* Services in alternating layout */}
        <div className="space-y-24">
          {corporateServices.map((service, index) => (
            <div 
              key={service.name}
              className={`scroll-animate delay-${400 + index * 200} flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Service card */}
              <div className="flex-1 lg:max-w-xl">
                <div className="group relative p-10 bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-lg rounded-3xl border border-gray-700/60 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-700 hover:border-yellow-400/60"
                  style={{
                    background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)'
                  }}
                >
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-500/20 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-orange-500/15 to-transparent rounded-bl-3xl"></div>
                  
                  {/* Icon and title */}
                  <div className="flex items-start gap-6 mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/30 border border-yellow-400/50 shadow-lg"
                        style={{
                          background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.4) 100%)'
                        }}
                      >
                        <service.icon className="h-8 w-8 text-yellow-300" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-100 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Process timeline */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center">
                      <ArrowRightIcon className="w-5 h-5 mr-2" />
                      Süreç Adımları
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {service.processSteps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-700/30">
                          <span className="text-yellow-300 font-bold text-sm mr-2">{stepIndex + 1}</span>
                          <span className="text-gray-300 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing info */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-gradient-to-r from-yellow-900/40 to-orange-900/40 rounded-xl border border-yellow-700/30">
                    <div>
                      <div className="text-yellow-300 font-bold text-lg">{service.startingPrice}</div>
                      <div className="text-gray-400 text-sm">Başlangıç fiyatı</div>
                    </div>
                    <div>
                      <div className="text-orange-300 font-bold text-lg">{service.timeline}</div>
                      <div className="text-gray-400 text-sm">Ortalama süre</div>
                    </div>
                  </div>

                  {/* CTA button */}
                  <button className="w-full py-4 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/50">
                    Ücretsiz Ön Değerlendirme
                  </button>
                </div>
              </div>

              {/* Detailed features list */}
              <div className="flex-1 lg:max-w-xl">
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <CheckCircleIcon className="w-7 h-7 text-yellow-400 mr-3" />
                    Hizmet Kapsamı
                  </h4>
                  
                  <div className="grid gap-4">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="group flex items-start gap-4 p-4 bg-gradient-to-r from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/40 hover:border-yellow-400/40 hover:bg-gradient-to-r hover:from-yellow-900/20 hover:to-orange-900/20 transition-all duration-300"
                      >
                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mt-2"></div>
                        <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional info */}
                  <div className="mt-8 p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-xl border border-yellow-600/30">
                    <h5 className="text-yellow-300 font-semibold mb-3">✨ Kurumsal Avantajlar</h5>
                    <ul className="text-gray-300 text-sm space-y-2">
                      <li>• Öncelikli destek ve hızlı yanıt garantisi</li>
                      <li>• Aylık hukuki durum raporları</li>
                      <li>• Mevzuat değişiklik bilgilendirmeleri</li>
                      <li>• Personel eğitim desteği</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate CTA section */}
        <div className="mt-24 text-center">
          <div className="scroll-animate delay-1000 max-w-5xl mx-auto p-12 bg-gradient-to-r from-yellow-900/50 via-orange-900/40 to-yellow-900/50 backdrop-blur-lg rounded-3xl border border-yellow-600/40 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">
              Şirketiniz İçin Hukuki Danışman Arıyorsunuz?
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg max-w-3xl mx-auto">
              Kurumsal hukuki ihtiyaçlarınız için özelleştirilmiş çözümler sunuyoruz. 
              <span className="text-yellow-300 font-semibold"> Ücretsiz kurumsal analiz görüşmesi</span> için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-12 py-5 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                Kurumsal Danışmanlık Talebi
              </button>
              <button className="px-12 py-5 bg-transparent border-2 border-yellow-400 hover:border-yellow-300 hover:bg-yellow-500/10 text-yellow-300 hover:text-yellow-200 font-semibold rounded-xl transition-all duration-300 text-lg">
                Referans Projelerimizi İnceleyin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

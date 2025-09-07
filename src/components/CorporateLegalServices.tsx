import { BuildingOfficeIcon, DocumentCheckIcon, ShieldExclamationIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline'

const corporateServices = [
  {
    id: 1,
    title: 'Şirket Kuruluşu ve Yapılandırma',
    description: 'Şirketinizi en uygun yapıda kurmak ve büyüme hedeflerinize uygun yapılandırmak için kapsamlı hukuki destek.',
    icon: BuildingOfficeIcon,
    price: '3.500₺',
    timeline: '2-4 hafta',
    services: [
      'Limited ve Anonim Şirket Kuruluşu',
      'Ana Sözleşme Hazırlama',
      'Sermaye Yapısı Planlama',
      'Ticaret Sicili İşlemleri',
      'Ortaklık Anlaşmaları'
    ],
    process: ['Yapı Analizi', 'Sözleşme Hazırlığı', 'Resmi İşlemler', 'Tescil']
  },
  {
    id: 2,
    title: 'Kurumsal Uyumluluk ve Risk Yönetimi',
    description: 'KVKK, GDPR ve sektörel mevzuatlara uyum sağlayarak şirketinizi hukuki risklerden koruyoruz.',
    icon: ShieldExclamationIcon,
    price: '5.000₺',
    timeline: '4-8 hafta',
    services: [
      'KVKK ve GDPR Uyumluluk',
      'Veri İşleme Politikaları',
      'İş Güvenliği Mevzuat Uyumu',
      'Compliance Programları',
      'Düzenli Uyumluluk Denetimleri'
    ],
    process: ['Risk Analizi', 'Politika Geliştirme', 'Uygulama', 'İzleme']
  },
  {
    id: 3,
    title: 'Ticaret ve Sözleşme Hukuku',
    description: 'Ticari ilişkilerinizi güçlendiren, risk minimize eden kapsamlı sözleşme ve ticaret hukuku hizmetleri.',
    icon: DocumentCheckIcon,
    price: '1.200₺',
    timeline: '1-3 hafta',
    services: [
      'Tedarikçi ve Distribütör Sözleşmeleri',
      'Müşteri Sözleşmeleri',
      'Franchise ve Lisans Anlaşmaları',
      'Ticari Uyuşmazlık Çözümü',
      'Sözleşme Portföyü Yönetimi'
    ],
    process: ['İhtiyaç Analizi', 'Taslak Hazırlama', 'Müzakere', 'Finalizasyon']
  }
]

export default function CorporateLegalServices() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        backgroundImage: 'url("/images/gokdelenlerrr.jpg")',
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
          background: 'radial-gradient(circle at 80% 20%, rgba(245,158,11,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(217,119,6,0.06) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Decorative grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,158,11,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,158,11,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-yellow-400/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-px bg-gradient-to-l from-yellow-400/30 to-transparent"></div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="scroll-animate delay-100 inline-flex items-center px-6 py-3 rounded-full bg-yellow-500/10 border border-yellow-400/20 mb-8">
            <BuildingOfficeIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span className="text-yellow-400 font-semibold">Kurumsal Müvekkiller İçin</span>
          </div>
          <h2 className="scroll-animate delay-200 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Kurumsal Hukuki Çözümler
          </h2>
          <p className="scroll-animate delay-300 text-lg leading-8 text-gray-300">
            Şirketinizin büyümesini destekleyen, riskleri minimize eden ve rekabet avantajı sağlayan 
            kapsamlı kurumsal hukuki danışmanlık hizmetleri.
          </p>
        </div>

        {/* Services showcase */}
        <div className="space-y-16">
          {corporateServices.map((service, index) => (
            <div 
              key={service.id}
              className={`scroll-animate delay-${400 + index * 200} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Service info */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-yellow-500/20 transition-all duration-500">
                  
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500/20 border border-yellow-400/40 shadow-lg">
                        <service.icon className="h-8 w-8 text-yellow-400" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Process timeline */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-yellow-300 mb-4 flex items-center">
                      <ArrowRightIcon className="w-5 h-5 mr-2" />
                      Süreç Adımları
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center bg-yellow-900/30 rounded-lg px-3 py-2 border border-yellow-700/30">
                          <span className="text-yellow-300 font-bold text-sm mr-2">{stepIndex + 1}</span>
                          <span className="text-gray-300 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing info */}
                  <div className="flex justify-between items-center p-4 bg-yellow-900/30 rounded-xl border border-yellow-700/30">
                    <div>
                      <div className="text-yellow-300 font-bold text-lg">{service.price}</div>
                      <div className="text-gray-400 text-sm">Başlangıç fiyatı</div>
                    </div>
                    <div>
                      <div className="text-yellow-300 font-bold text-lg">{service.timeline}</div>
                      <div className="text-gray-400 text-sm">Ortalama süre</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service details */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <h4 className="text-2xl font-bold text-white flex items-center">
                    <CheckIcon className="w-6 h-6 text-yellow-400 mr-3" />
                    Hizmet Kapsamı
                  </h4>
                  
                  <div className="space-y-3">
                    {service.services.map((item, itemIndex) => (
                      <div 
                        key={itemIndex} 
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/70 backdrop-blur-sm rounded-xl border border-gray-700/30 hover:border-yellow-400/30 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Additional benefits */}
                  <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-yellow-800/10 rounded-xl border border-yellow-600/20">
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
      </div>
    </div>
  )
}

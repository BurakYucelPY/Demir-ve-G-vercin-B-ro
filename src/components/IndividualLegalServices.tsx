import { HomeIcon, ScaleIcon, UserGroupIcon, ShieldCheckIcon, CurrencyDollarIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Aile Hukuku',
    description: 'Boşanma, velayet, nafaka ve mal paylaşımı konularında uzman hukuki destek',
    icon: HomeIcon,
    features: ['Boşanma Davaları', 'Velayet ve Nafaka', 'Mal Paylaşımı', 'Aile Danışmanlığı'],
    price: '2.500₺+',
    duration: '6-12 ay'
  },
  {
    name: 'Miras Hukuku',
    description: 'Miras paylaşımı, vasiyet ve miras anlaşmazlıklarında profesyonel çözümler',
    icon: ScaleIcon,
    features: ['Miras Paylaşımı', 'Vasiyet Düzenleme', 'Mirastan Feragat', 'Tereke Tasfiyesi'],
    price: '1.800₺+',
    duration: '4-8 ay'
  },
  {
    name: 'İş Hukuku',
    description: 'İşçi-işveren anlaşmazlıkları ve iş sözleşmeleri konularında danışmanlık',
    icon: UserGroupIcon,
    features: ['İş Sözleşmeleri', 'Kıdem Tazminatı', 'Mobbing Davaları', 'İşe İade'],
    price: '1.500₺+',
    duration: '3-6 ay'
  },
  {
    name: 'Ceza Hukuku',
    description: 'Ceza davalarında savunma ve suç duyuruları konularında uzman temsil',
    icon: ShieldCheckIcon,
    features: ['Ceza Davası Savunması', 'Suç Duyuruları', 'Uzlaştırma', 'Beraat Süreçleri'],
    price: '3.000₺+',
    duration: '8-18 ay'
  },
  {
    name: 'Borçlar Hukuku',
    description: 'Alacak-verecek anlaşmazlıkları ve sözleşme ihlalleri konularında destek',
    icon: CurrencyDollarIcon,
    features: ['Alacak Takibi', 'Sözleşme İhlali', 'Tazminat Davaları', 'İcra Takipleri'],
    price: '2.000₺+',
    duration: '4-10 ay'
  },
  {
    name: 'Sözleşme Hukuku',
    description: 'Sözleşme hazırlama, inceleme ve hukuki risk analizleri',
    icon: DocumentTextIcon,
    features: ['Sözleşme Hazırlama', 'Hukuki İnceleme', 'Risk Analizi', 'Müzakere Desteği'],
    price: '800₺+',
    duration: '1-3 hafta'
  }
]

export default function IndividualLegalServices() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: '#0a0a0a',
        position: 'relative'
      }}
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(37,99,235,0.06) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-300/15 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="scroll-animate delay-100 inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
            <span className="text-blue-400 text-sm font-semibold">👤 Bireysel Müvekkillere Özel</span>
          </div>
          <h2 className="scroll-animate delay-200 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
            Bireysel Hukuki Hizmetler
          </h2>
          <p className="scroll-animate delay-300 text-lg leading-8 text-gray-300">
            Kişisel hukuki ihtiyaçlarınız için kapsamlı danışmanlık ve temsil hizmetleri. 
            Her alanda uzman kadromuz ile yanınızdayız.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={service.name}
              className={`scroll-animate delay-${400 + index * 100} group relative h-96`}
            >
              <div className="relative h-full p-6 bg-gradient-to-br from-gray-800/70 to-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 hover:border-blue-400/40 flex flex-col">
                
                {/* Icon section */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-lg bg-blue-500/20 border border-blue-400/30 shadow-lg">
                      <service.icon className="h-7 w-7 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Duration */}
                <div className="flex justify-between items-center mb-4 p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                  <div>
                    <div className="text-blue-300 font-semibold text-sm">{service.price}</div>
                    <div className="text-gray-400 text-xs">Başlangıç</div>
                  </div>
                  <div className="text-right">
                    <div className="text-blue-300 font-semibold text-sm">{service.duration}</div>
                    <div className="text-gray-400 text-xs">Ortalama süre</div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-sm">
                  Detaylı Bilgi
                </button>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="scroll-animate delay-1000 max-w-3xl mx-auto p-8 bg-gradient-to-r from-blue-900/40 to-blue-800/30 backdrop-blur-lg rounded-2xl border border-blue-600/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bireysel Hukuki Danışmanlığa Başlayın
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              İlk danışmanlık görüşmesi <span className="text-blue-300 font-semibold">ücretsizdir</span>. 
              Hukuki sorununuzu değerlendirmek için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300">
                Ücretsiz Danışmanlık
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-300 hover:text-blue-200 font-semibold rounded-lg transition-all duration-300">
                WhatsApp İletişim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

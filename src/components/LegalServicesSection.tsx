import { ScaleIcon, DocumentTextIcon, HomeIcon, UserGroupIcon, CurrencyDollarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const legalServices = [
  {
    name: 'Aile Hukuku',
    description: "Boşanma, velayet, nafaka, mal paylaşımı ve aile içi anlaşmazlıkların çözümü konularında kapsamlı hukuki destek.",
    icon: HomeIcon,
    price: "2.500₺'den başlayan fiyatlarla",
    duration: "Ortalama 6-12 ay",
    features: ['Boşanma Davaları', 'Velayet Hukuku', 'Nafaka Davaları', 'Mal Paylaşımı'],
    highlight: "En Popüler"
  },
  {
    name: 'Miras Hukuku',
    description: "Miras paylaşımı, vasiyet işlemleri, mirastan feragat ve miras anlaşmazlıklarında uzman çözümler.",
    icon: ScaleIcon,
    price: "1.800₺'den başlayan fiyatlarla",
    duration: "Ortalama 4-8 ay",
    features: ['Miras Paylaşımı', 'Vasiyet Düzenleme', 'Mirastan Feragat', 'Terekenin Tasfiyesi']
  },
  {
    name: 'İş Hukuku',
    description: "İşçi-işveren anlaşmazlıkları, iş sözleşmeleri, kıdem-ihbar tazminatı ve işyeri hukuki süreçleri.",
    icon: UserGroupIcon,
    price: "1.500₺'den başlayan fiyatlarla",
    duration: "Ortalama 3-6 ay",
    features: ['İş Sözleşmeleri', 'Kıdem Tazminatı', 'Mobbing Davaları', 'İşe İade Davaları']
  },
  {
    name: 'Ceza Hukuku',
    description: "Ceza davalarında savunma, suç duyuruları, uzlaştırma süreçleri ve adli yardım hizmetleri.",
    icon: ShieldCheckIcon,
    price: "3.000₺'den başlayan fiyatlarla",
    duration: "Ortalama 8-18 ay",
    features: ['Ceza Davası Savunması', 'Suç Duyuruları', 'Uzlaştırma', 'Beraat Davaları'],
    highlight: "Acil Hizmet"
  },
  {
    name: 'Borçlar Hukuku',
    description: "Alacak-verecek anlaşmazlıkları, sözleşme ihlalleri, tazminat davaları ve icra takip işlemleri.",
    icon: CurrencyDollarIcon,
    price: "2.000₺'den başlayan fiyatlarla",
    duration: "Ortalama 4-10 ay",
    features: ['Alacak Takibi', 'Sözleşme İhlali', 'Tazminat Davaları', 'İcra Takipleri']
  },
  {
    name: 'Sözleşme Hukuku',
    description: "Her türlü sözleşmenin hazırlanması, incelenmesi, müzakeresi ve hukuki risk analizleri.",
    icon: DocumentTextIcon,
    price: "800₺'den başlayan fiyatlarla",
    duration: "Ortalama 1-3 hafta",
    features: ['Sözleşme Hazırlama', 'Hukuki İnceleme', 'Risk Analizi', 'Müzakere Desteği']
  },
]

export default function LegalServicesSection() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
        position: 'relative'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-blue-300/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Professional background effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(59,130,246,0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(29,78,216,0.08) 0%, transparent 40%)'
        }}
      ></div>
      
      {/* Dynamic lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-blue-300/30 to-transparent"
        ></div>
        <div 
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-blue-500/20 via-transparent to-blue-500/20 transform -translate-y-1/2"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Enhanced header section */}
        <div className="mx-auto max-w-5xl text-center mb-20">
          <div className="scroll-animate delay-100 inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 mb-6">
            <span className="text-blue-400 text-sm font-semibold">👤 Bireysel Müvekkiller İçin</span>
          </div>
          <p className="scroll-animate delay-300 text-xl leading-8 text-gray-300 max-w-3xl mx-auto">
            Kişisel hukuki ihtiyaçlarınız için kapsamlı danışmanlık ve temsil hizmetleri sunuyoruz. 
            Her alanda uzman kadromuz ile yanınızdayız.
          </p>
          
          {/* Stats */}
          <div className="scroll-animate delay-400 flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-sm text-gray-400">Başarılı Dava</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">15+</div>
              <div className="text-sm text-gray-400">Yıl Deneyim</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400">%95</div>
              <div className="text-sm text-gray-400">Başarı Oranı</div>
            </div>
          </div>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {legalServices.map((service, index) => (
            <div 
              key={service.name}
              className={`scroll-animate delay-${500 + index * 100} group relative`}
            >
              {/* Highlight badge */}
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {service.highlight}
                  </span>
                </div>
              )}

              {/* Enhanced card */}
                <div className="relative h-[500px] p-8 bg-gradient-to-br from-gray-800/90 to-gray-900/95 backdrop-blur-md rounded-3xl border border-gray-700/60 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:scale-[1.02] hover:border-blue-400/60 flex flex-col group-hover:bg-gradient-to-br group-hover:from-gray-800/95"
                  style={{
                    background: service.highlight 
                      ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(30, 41, 59, 0.9) 100%)'
                      : 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.95) 100%)'
                  }}
                >                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-500/30 to-transparent rounded-tr-3xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-bl-3xl"></div>
                
                {/* Enhanced icon section */}
                <div className="relative flex justify-center mb-6">
                  <div className="relative">
                    {/* Multiple glow layers */}
                    <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-2xl scale-200 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
                    
                    {/* Icon container with enhanced styling */}
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-2xl bg-blue-500/20 border-2 border-blue-400/50 shadow-xl group-hover:shadow-blue-500/50 transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(37, 99, 235, 0.4) 100%)'
                      }}
                    >
                      <service.icon aria-hidden="true" className="h-12 w-12 text-blue-300 group-hover:text-blue-200 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Enhanced content */}
                <div className="text-center space-y-4 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  {/* Animated divider */}
                  <div className="flex justify-center">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 group-hover:w-24 group-hover:opacity-100 transition-all duration-500"></div>
                  </div>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed text-sm flex-1">
                    {service.description}
                  </p>
                  
                  {/* Price and duration info */}
                  <div className="bg-blue-900/30 rounded-xl p-4 border border-blue-700/30">
                    <div className="text-blue-300 font-semibold text-sm mb-1">{service.price}</div>
                    <div className="text-gray-400 text-xs">{service.duration}</div>
                  </div>
                  
                  {/* Enhanced features list */}
                  <div className="mt-4 space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="group-hover:text-blue-200 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Call to action button */}
                  <button className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50">
                    Detaylı Bilgi Al
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

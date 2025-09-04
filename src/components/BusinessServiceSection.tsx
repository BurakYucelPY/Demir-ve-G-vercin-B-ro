import { ScaleIcon, ClockIcon, ChatBubbleLeftRightIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Hızlı Danışmanlık',
    description: "Hukuki sorularınıza hızlı ve net yanıtlar alın; ilk ön değerlendirme ücretsizdir.",
    icon: ClockIcon,
  },
  {
    name: 'Adil Ücretlendirme',
    description: "Şeffaf fiyatlandırma ve ön maliyet tahmini ile sürpriz ücretler olmaz.",
    icon: ScaleIcon,
  },
  {
    name: 'Sürekli İletişim',
    description: "Davanızın her aşamasında düzenli bilgilendirme sağlar, size özel iletişim kanallarını kullanırız.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Etkili Savunma',
    description: "Davalarınızı güçlü delil ve deneyimli savunma stratejileri ile takip ederiz.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Sözleşme ve İnceleme',
    description: "Sözleşmelerinizi hukuka uygun, riskleri minimize edecek şekilde hazırlar ve inceleriz.",
    icon: DocumentTextIcon,
  },
]

export default function BusinessServiceSection() {
  
  return (
         <div 
       className={`overflow-hidden py-24 sm:py-32 relative`}
       style={{
         background: '#0a0a0a',
         position: 'relative'
       }}
     >
               {/* Professional background effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(30,58,138,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.1) 0%, transparent 50%)'
          }}
        ></div>
        
        {/* Elegant lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          ></div>
        </div>
      
      <div className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/terazikadın.jpg"
              alt="Hukuk bürosu çalışma ortamı"
              className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:max-w-none lg:-translate-x-20"
            />
          </div>
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Güvenilir Hukuki Danışmanlık
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Demir & Güvercin Hukuk Bürosu olarak dava süreçleri, sözleşmeler
                ve uyuşmazlık çözümünde kapsamlı hukuki destek sağlıyoruz. Her
                dosyada müvekkil menfaatini önceliklendirerek vakaya özel stratejiler
                geliştiriyor ve uyguluyoruz. Süreç boyunca şeffaf iletişim ve düzenli
                bilgilendirme ile zaman ve maliyet etkinliğine önem veriyoruz. Güncel
                mevzuat ile içtihatları takip ederek titiz analizler yapmak ve haklarınızı
                etkin şekilde savunmak temel prensibimizdir.
              </p>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="mx-auto max-w-none lg:mx-auto">
            <div className="flex justify-center gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.name} 
                  className={`scroll-animate delay-${(index + 1) * 100} group relative`}
                >
                  {/* Modern kartlar */}
                  <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/50 flex flex-col justify-between w-64" style={{ height: '340px' }}>
                    {/* Üst köşe accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl"></div>
                    
                    {/* Icon container */}
                    <div className="relative flex justify-center">
                      <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Icon background */}
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-400/40 shadow-lg">
                          <feature.icon aria-hidden="true" className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                        {feature.name}
                      </h3>
                      <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto opacity-60"></div>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Alt köşe accent */}
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-bl-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
                 </div>
       </div>
       </div>
     </div>
   )
 }

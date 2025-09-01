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
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
              {features.map((feature, index) => (
                <div 
                  key={feature.name} 
                  className={`scroll-animate delay-${(index + 1) * 100} flex flex-col items-center text-center px-4`}
                >
                  <div className="rounded-md bg-white p-2 ring-1 ring-gray-900/10">
                    <feature.icon className="h-6 w-6 text-blue-400" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-white text-lg">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-300 max-w-[12rem]">
                    {feature.description}
                  </dd>
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

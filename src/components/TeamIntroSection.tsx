import { DocumentTextIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Kurucu Ortaklık',
    description:
      'Av. Mehmet Demir ve Av. Ayşe Güvercin tarafından kurulan büromuz, ticaret ve aile hukukunda uzmanlaşmış deneyimli ortaklık yapısı ile güçlü bir temel üzerine inşa edilmiştir.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Tamamlayıcı Uzmanlık',
    description: 'Ticaret hukuku ve aile hukuku alanlarındaki farklı uzmanlıklarımız ile müvekkillerimize her alanda kapsamlı hukuki destek sağlıyoruz.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Güvenilir İşbirliği',
    description: '25+ yıllık birleşik deneyimimiz ve uyumlu çalışma tarzımız ile müvekkillerimize tutarlı ve güvenilir hukuki hizmet sunuyoruz.',
    icon: UserGroupIcon,
  },
]

export default function TeamIntroSection() {
  
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
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"
          ></div>
        </div>
      
              <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="scroll-animate lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Deneyimli Ekibimiz</h2>
              <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Kurucu Ortaklarımız
              </p>
              <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
                Demir & Güvercin Hukuk Bürosu'nun kurucu ortakları Av. Mehmet Demir ve Av. Ayşe Güvercin, 
                farklı uzmanlık alanlarında birleşen güçlü bir ekip oluşturmaktadır.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature, index) => (
                  <div 
                    key={feature.name} 
                    className={`scroll-animate delay-${400 + index * 100} relative pl-9`}
                  >
                    <dt className="inline font-semibold text-white">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-400" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
                     <img
             alt="Kurucu Ortaklar"
             src="/images/terazikadın.jpg"
             width={880}
             height={900}
             className="scroll-animate delay-200 w-2xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
           />
        </div>
      </div>
    </div>
  )
}

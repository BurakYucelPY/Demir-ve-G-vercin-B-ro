import { ScaleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Uzman Hukuki Danışmanlık',
    description:
      '25 yıllık deneyimimiz ile hukukun her alanında uzman avukatlarımız size en doğru hukuki çözümleri sunar. Karmaşık hukuki süreçlerinizi basitleştiriyoruz.',
    icon: ScaleIcon,
  },
  {
    name: 'Güvenilir ve Şeffaf Hizmet',
    description: 'Müvekkil gizliliği ve etik değerlerimizden asla ödün vermiyoruz. Her adımda şeffaf iletişim kurarak süreçlerinizi takip edebilirsiniz.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Kişiselleştirilmiş Yaklaşım',
    description: 'Her müvekkilimizin durumu benzersizdir. Size özel hukuki stratejiler geliştirerek en iyi sonucu almanızı sağlıyoruz.',
    icon: UserGroupIcon,
  },
]

export default function FeaturesSection() {
  return (
         <div 
       className="overflow-hidden py-24 sm:py-32 relative"
       style={{
         background: '#0a0a0a',
         position: 'relative'
       }}
     >
               {/* Professional background effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(30,58,138,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.1) 0%, transparent 50%)',
            animation: 'subtlePulse 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Elegant lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
            style={{
              animation: 'lineSweep 12s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            style={{
              animation: 'lineSweep 12s ease-in-out infinite 6s'
            }}
          ></div>
        </div>
      
              <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-400">Profesyonel Hizmet</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Hukuki Çözüm Ortağınız
              </p>
              <p className="mt-6 text-lg/8 text-gray-300">
                Demir & Güvercin Hukuk Bürosu olarak, müvekkillerimizin haklarını en iyi şekilde savunmak için çalışıyoruz. 
                Deneyimli kadromuz ve etik değerlerimiz ile fark yaratıyoruz.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
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
             alt="Hukuk Bürosu"
             src="/images/terazikadın.jpg"
             width={880}
             height={900}
             className="w-2xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
           />
        </div>
      </div>
    </div>
  )
}

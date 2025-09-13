import { ClockIcon, StarIcon, CheckCircleIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

const achievements = [
  { label: 'Yıllık Deneyim', value: '9+', icon: ClockIcon, description: '2015\'ten beri kesintisiz hizmet' },
  { label: 'Başarılı Dava', value: '500+', icon: StarIcon, description: 'Farklı alanlarda kazanılan davalar' },
  { label: 'Memnun Müvekkil', value: '300+', icon: CheckCircleIcon, description: 'Çözüme kavuşturulan hukuki sorunlar' },
  { label: 'Uzmanlık Alanı', value: '8', icon: BuildingOfficeIcon, description: 'Kapsamlı hukuki hizmet alanları' },
]

export default function AboutAchievementsSection() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: '#0f0f0f',
        position: 'relative'
      }}
    >
      {/* Professional background effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 80% 40%, rgba(30,58,138,0.08) 0%, transparent 50%), radial-gradient(circle at 20% 60%, rgba(255,215,0,0.10) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Başarılarımız</h2>
          <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Rakamlarla Büromuz
          </p>
          <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
            Yıllar içinde elde ettiğimiz tecrübe ve başarılarımız, müvekkillerimizin güvenini kazanmamıza 
            ve hukuki hizmet kalitesinin en üst seviyede olmasına olanak sağlamaktadır.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label} 
                className={`scroll-animate delay-${300 + index * 100} relative group`}
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-900/80 to-gray-800/90 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 text-center">
                  {/* Icon */}
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-400/40 shadow-lg group-hover:from-blue-400/30 group-hover:to-blue-500/40 transition-all duration-300">
                    <achievement.icon aria-hidden="true" className="h-8 w-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {achievement.value}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-blue-300 mb-3">
                    {achievement.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </p>
                  
                  {/* Accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent group-hover:via-yellow-400 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom section with vision */}
        <div className="scroll-animate delay-600 mx-auto max-w-4xl text-center mt-20 pt-16 border-t border-gray-800/50">
          <h3 className="text-2xl font-bold text-white mb-6">Vizyonumuz</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Türkiye'nin önde gelen hukuk bürolarından biri olmak ve müvekkillerimize 
            en yüksek kalitede hukuki hizmet sunmaya devam etmek temel vizyonumuzdur. 
            <span className="text-blue-300 font-semibold"> Adaleti korumak, hakları savunmak</span> ve 
            hukuki güvenliği sağlamak için çalışmalarımızı sürdürüyoruz.
          </p>
          <div className="mt-8 flex items-center justify-center gap-x-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-blue-400/40 max-w-32"></div>
            <span className="text-yellow-400 font-semibold">Güvenilir • Profesyonel • Etik</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-400/40 max-w-32"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
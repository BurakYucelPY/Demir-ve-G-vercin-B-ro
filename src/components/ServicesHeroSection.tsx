import { ScaleIcon, BuildingOfficeIcon, HandRaisedIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Başarılı Dava', value: '500+', icon: CheckCircleIcon },
  { label: 'Mutlu Müvekkil', value: '800+', icon: CheckCircleIcon },
  { label: 'Yıl Deneyim', value: '15+', icon: CheckCircleIcon },
  { label: 'Uzman Avukat', value: '8', icon: CheckCircleIcon },
]

const serviceCategories = [
  {
    title: 'Bireysel Hukuk',
    description: 'Aile, miras, iş ve ceza hukuku alanlarında kişisel hukuki destek',
    icon: ScaleIcon,
    color: 'blue'
  },
  {
    title: 'Kurumsal Hukuk', 
    description: 'Şirket kuruluşu, ticaret ve vergi hukuku konularında kurumsal danışmanlık',
    icon: BuildingOfficeIcon,
    color: 'yellow'
  },
  {
    title: 'Dava Yönetimi',
    description: 'Mahkeme süreçleri ve alternatif uyuşmazlık çözümü hizmetleri',
    icon: HandRaisedIcon,
    color: 'purple'
  }
]

export default function ServicesHeroSection() {
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
          background: 'radial-gradient(circle at 30% 20%, rgba(59,130,246,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(245,158,11,0.08) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-yellow-400/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Main content */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <h2 className="scroll-animate delay-100 text-5xl font-bold tracking-tight text-white sm:text-6xl mb-8">
            Hukuki Hizmet Alanlarımız
          </h2>
          <p className="scroll-animate delay-200 text-xl leading-8 text-gray-300 mb-12">
            Demir & Güvercin Hukuk Bürosu olarak, bireysel ve kurumsal müvekkillere 
            kapsamlı hukuki danışmanlık ve temsil hizmetleri sunuyoruz.
          </p>
        </div>

        {/* Service categories showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`scroll-animate delay-${300 + index * 100} group relative`}
            >
              <div className="relative h-80 p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col items-center text-center"
                style={{
                  borderColor: category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 
                              category.color === 'yellow' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(147, 51, 234, 0.3)',
                  boxShadow: `0 25px 50px -12px ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.15)' : 
                              category.color === 'yellow' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(147, 51, 234, 0.15)'}`
                }}
              >
                {/* Icon */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: category.color === 'blue' ? 'rgba(59, 130, 246, 0.3)' : 
                                 category.color === 'yellow' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(147, 51, 234, 0.3)'
                    }}
                  ></div>
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full shadow-lg"
                    style={{
                      background: category.color === 'blue' ? 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.3) 100%)' : 
                                 category.color === 'yellow' ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.3) 100%)' : 
                                 'linear-gradient(135deg, rgba(147, 51, 234, 0.2) 0%, rgba(126, 34, 206, 0.3) 100%)',
                      border: `2px solid ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' : 
                              category.color === 'yellow' ? 'rgba(245, 158, 11, 0.4)' : 'rgba(147, 51, 234, 0.4)'}`
                    }}
                  >
                    <category.icon className="h-10 w-10"
                      style={{
                        color: category.color === 'blue' ? 'rgb(147, 197, 253)' : 
                              category.color === 'yellow' ? 'rgb(251, 191, 36)' : 'rgb(196, 181, 253)'
                      }}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {category.description}
                </p>

                {/* Decorative accent */}
                <div className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${category.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : 
                                 category.color === 'yellow' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(147, 51, 234, 0.2)'} 0%, transparent 100%)`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`scroll-animate delay-${600 + index * 100} text-center p-6 bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700/40 hover:border-blue-400/40 transition-all duration-300`}
            >
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 border border-blue-400/30">
                  <stat.icon className="h-6 w-6 text-blue-400" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'Adres',
    value: ' Araplar, Ankara Cd. No:76, 42050 Karatay/Konya',
    icon: MapPinIcon,
  },
  {
    name: 'Telefon',
    value: '+90 (312) 555 0123',
    icon: PhoneIcon,
  },
  {
    name: 'E-posta',
    value: 'info@demirguvercin.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Çalışma Saatleri',
    value: 'Pazartesi - Cuma: 09:00 - 18:00',
    icon: ClockIcon,
  },
]

export default function ContactInfoSection() {
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <div 
                key={item.name}
                className={`scroll-animate delay-${400 + index * 100} group relative`}
              >
                {/* Modern kartlar */}
                <div className="relative h-64 p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 hover:border-blue-400/50 flex flex-col justify-between">
                  {/* Üst köşe accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-2xl"></div>
                  
                  {/* Icon container */}
                  <div className="relative flex justify-center">
                    <div className="relative">
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {/* Icon background */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-400/40 shadow-lg">
                        <item.icon aria-hidden="true" className="h-10 w-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-3 flex-1 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto opacity-60"></div>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {item.value}
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
  )
}

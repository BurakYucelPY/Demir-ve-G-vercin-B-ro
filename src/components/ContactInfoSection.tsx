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
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((item, index) => (
              <div 
                key={item.name}
                className={`scroll-animate delay-${400 + index * 100} text-center`}
              >
                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/20 border border-blue-400/30">
                    <item.icon aria-hidden="true" className="h-8 w-8 text-blue-400" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{item.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

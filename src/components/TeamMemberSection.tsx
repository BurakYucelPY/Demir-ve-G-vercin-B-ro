import { ScaleIcon, ClockIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

interface TeamMember {
  id: number
  name: string
  title: string
  shortDescription: string
  fullBio: string
  specializations: string[]
  education: string
  barAssociation: string
  languages: string[]
  achievements: string[]
  icon: any
  phone: string
  email: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Av. Mehmet Demir',
    title: 'Kurucu Ortak',
    shortDescription: "Ticaret ve şirketler hukuku alanında 15+ yıllık deneyime sahip uzman avukat.",
    fullBio: "İstanbul Üniversitesi Hukuk Fakültesi mezunu Av. Mehmet Demir, 15 yıllık kariyerinde ticaret ve şirketler hukuku alanında derin bir uzmanlık geliştirmiştir. Büyük ölçekli ticari projelerde yer almış, şirket kuruluşundan tasfiyesine kadar tüm süreçlerde müvekkillerine rehberlik etmiştir. 'Her dava bir hikaye, her müvekkil bir dost' yaklaşımıyla hareket eden Demir, hukukun insan odaklı yönünü hiç unutmaz.",
    specializations: ['Ticaret Hukuku', 'Şirketler Hukuku', 'İcra İflas Hukuku', 'Kurumsal Hukuk'],
    education: 'İstanbul Üniversitesi Hukuk Fakültesi',
    barAssociation: 'İstanbul Barosu',
    languages: ['Türkçe', 'İngilizce'],
    achievements: [
      'Ticaret Hukuku alanında 500+ başarılı dava',
      'Şirket kuruluşu ve yapılandırma uzmanı',
      'Kurumsal hukuk danışmanlığı sertifikası',
      'Uluslararası ticaret hukuku uzman sertifikası'
    ],
    icon: ScaleIcon,
    phone: '+90 212 555 0101',
    email: 'mehmet.demir@demirguvercin.com',
    image: '/images/terazikadın.jpg'
  },
  {
    id: 2,
    name: 'Av. Ayşe Güvercin',
    title: 'Kurucu Ortak',
    shortDescription: "Aile ve miras hukuku konularında 12+ yıllık tecrübeye sahip kadın hakları uzmanı.",
    fullBio: "Marmara Üniversitesi Hukuk Fakültesi mezunu Av. Ayşe Güvercin, 12 yıllık deneyimiyle aile ve miras hukuku alanında uzmanlaşmıştır. Kadın hakları konusunda özel bir ilgiye sahip olan Güvercin, hassas aile davalarında müvekkillerine hem hukuki hem de duygusal destek sağlamaktadır. Müzik tutkunu olan Güvercin, sosyal sorumluluk projelerinde de aktif rol almakta ve toplumsal duyarlılığını hukuki pratiğine yansıtmaktadır.",
    specializations: ['Aile Hukuku', 'Miras Hukuku', 'İş Hukuku', 'Kadın Hakları'],
    education: 'Marmara Üniversitesi Hukuk Fakültesi',
    barAssociation: 'İstanbul Barosu',
    languages: ['Türkçe', 'İngilizce', 'Almanca'],
    achievements: [
      'Aile hukuku alanında uzman avukat sertifikası',
      'Kadın hakları ve miras hukuku uzmanı',
      'Arabuluculuk sertifikası',
      'Uluslararası aile hukuku kongre konuşmacısı'
    ],
    icon: ClockIcon,
    phone: '+90 212 555 0102',
    email: 'ayse.guvercin@demirguvercin.com',
    image: '/images/demirguvercin (1)-Photoroom.png'
  }
]

export default function TeamMemberSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setSelectedMember(null)
    document.body.style.overflow = 'unset'
  }

  return (
    <>
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
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ekibimiz
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Deneyimli ve uzman hukuk ekibimizle yanınızdayız
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  onClick={() => openModal(member)}
                  className="cursor-pointer group relative h-[450px] transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                >
                  <div className="relative h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl border border-gray-700/50 shadow-2xl overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-yellow-500/10 blur-xl"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative h-full flex flex-col">
                      {/* Profile Image - Takes most of the card */}
                      <div className="flex-1 relative overflow-hidden rounded-t-3xl">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          onError={(e) => {
                            e.currentTarget.src = `https://images.unsplash.com/photo-${member.id === 1 ? '1507003211169-0a1dd7228f2d' : '1594736797933-d0501ba2fe65'}?w=600&h=600&fit=crop&crop=face`
                          }}
                        />
                        {/* Gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Professional icon badge */}
                        <div className="absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm border border-white/20">
                          <member.icon aria-hidden="true" className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* Name section - Bottom part */}
                      <div className="p-6 bg-gradient-to-r from-gray-900 to-gray-800">
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 text-center">
                          {member.name}
                        </h3>
                        <p className="text-blue-300 font-semibold text-center mt-2">
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMember && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={closeModal}
        >
          <div 
            className="relative bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-full transition-all duration-300 z-10"
            >
              <XMarkIcon className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>

            <div className="p-8">
              {/* Profile Section */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-full border border-blue-400/30 flex items-center justify-center">
                  <selectedMember.icon className="w-16 h-16 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-blue-300 font-semibold text-lg mb-4">
                  {selectedMember.title}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {selectedMember.shortDescription}
                </p>
              </div>
              
              {/* Uzmanlık Alanları */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-4">Uzmanlık Alanları</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedMember.specializations.map((spec: string, index: number) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* İletişim */}
              <div className="border-t border-gray-700/50 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${selectedMember.phone}`}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 text-center"
                  >
                    📞 Ara
                  </a>
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="flex-1 px-6 py-3 bg-transparent border border-yellow-400 hover:border-yellow-300 text-yellow-300 font-semibold rounded-lg transition-all duration-300 text-center"
                  >
                    ✉️ Mail Gönder
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

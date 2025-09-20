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

  const generateVCard = (member: TeamMember) => {
    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:${member.name}
ORG:Demir & Güvercin Hukuk Bürosu
TITLE:${member.title}
TEL:${member.phone}
EMAIL:${member.email}
ADR:;;Araplar, Ankara Cd. No:76;Karatay;Konya;42050;Türkiye
NOTE:${member.specializations.join(', ')} uzmanı
END:VCARD`

    const blob = new Blob([vcard], { type: 'text/vcard' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${member.name.replace(/\s+/g, '_')}.vcf`
    link.click()
    window.URL.revokeObjectURL(url)
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
            className="relative bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
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
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-yellow-500/20 rounded-full border border-blue-400/30 flex items-center justify-center">
                  <selectedMember.icon className="w-12 h-12 text-blue-400" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-blue-300 font-semibold mb-4">
                  {selectedMember.title}
                </p>
              </div>
              
              {/* Hakkında */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Hakkında</h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedMember.fullBio}
                </p>
              </div>
              
              {/* Uzmanlık Alanları */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Uzmanlık Alanları</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedMember.specializations.map((spec: string, index: number) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm border border-blue-400/30"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Eğitim ve Diller */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Eğitim</h4>
                  <p className="text-gray-300 text-sm">{selectedMember.education}</p>
                  <p className="text-gray-400 text-xs mt-1">{selectedMember.barAssociation}</p>
                </div>
                <div className="p-4 bg-gray-800/30 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Diller</h4>
                  <div className="flex flex-wrap gap-1">
                    {selectedMember.languages.map((lang: string, langIndex: number) => (
                      <span 
                        key={langIndex}
                        className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Başarılar */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-3">Başarılar</h3>
                <div className="space-y-2">
                  {selectedMember.achievements.map((achievement: string, achievIndex: number) => (
                    <div key={achievIndex} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* İletişim */}
              <div className="border-t border-gray-700/50 pt-6">
                <h4 className="text-lg font-semibold text-white mb-4 text-center">İletişim</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a 
                    href={`tel:${selectedMember.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/80 backdrop-blur-md border border-blue-400/20 hover:bg-blue-700/90 hover:border-blue-300/30 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Ara</span>
                  </a>
                  
                  <a 
                    href={`mailto:${selectedMember.email}`}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/80 backdrop-blur-md border border-blue-400/20 hover:bg-blue-700/90 hover:border-blue-300/30 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Mail</span>
                  </a>
                  
                  <button 
                    onClick={() => generateVCard(selectedMember)}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600/80 backdrop-blur-md border border-blue-400/20 hover:bg-blue-700/90 hover:border-blue-300/30 text-white font-medium rounded-lg transition-all duration-300 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Rehbere Ekle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

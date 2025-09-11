import RealHeader from '../components/RealHeader'
import { useEffect } from 'react'
import { UserGroupIcon, ScaleIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline'

const teamMembers = [
  {
    id: 1,
    name: 'Av. Mehmet Demir',
    title: 'Kurucu Ortak / Hukuk Bürosu Sahibi',
    specialization: 'Ticaret Hukuku, Şirketler Hukuku, İcra İflas Hukuku',
    experience: '15+ Yıl Deneyim',
    education: 'İstanbul Üniversitesi Hukuk Fakültesi',
    barAssociation: 'İstanbul Barosu',
    languages: ['Türkçe', 'İngilizce'],
    achievements: [
      'Ticaret Hukuku alanında 500+ başarılı dava',
      'Şirket kuruluşu ve yapılandırma uzmanı',
      'Kurumsal hukuk danışmanlığı sertifikası'
    ],
    image: '/images/lawyer1.jpg', // Geçici foto
    phone: '+90 212 555 0101',
    email: 'mehmet.demir@demirguvercin.com'
  },
  {
    id: 2,
    name: 'Av. Ayşe Güvercin',
    title: 'Kurucu Ortak / Hukuk Bürosu Sahibi',
    specialization: 'Aile Hukuku, Miras Hukuku, İş Hukuku, Ceza Hukuku',
    experience: '12+ Yıl Deneyim',
    education: 'Marmara Üniversitesi Hukuk Fakültesi',
    barAssociation: 'İstanbul Barosu',
    languages: ['Türkçe', 'İngilizce', 'Almanca'],
    achievements: [
      'Aile hukuku alanında uzman avukat',
      'Kadın hakları ve miras hukuku uzmanı',
      'Arabuluculuk sertifikası'
    ],
    image: '/images/lawyer2.jpg', // Geçici foto
    phone: '+90 212 555 0102',
    email: 'ayse.guvercin@demirguvercin.com'
  }
]

export default function Ekibimiz() {
  useEffect(() => {
    // Sayfa açıldığında en üste scroll et
    window.scrollTo({ top: 0, behavior: 'instant' })

    // scroll-animate elementlerini yeniden observe et
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate')
          }
        })
      }, { threshold: 0.1 })

      // Önce tüm elementlerin animate class'ını kaldır
      document.querySelectorAll('.scroll-animate').forEach(el => {
        el.classList.remove('animate')
        observer.observe(el)
      })
    }

    observeElements()
  }, [])

  return (
    <div 
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)'
      }}
    >
      {/* Background effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(30,58,138,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.08) 0%, transparent 50%)'
        }}
      ></div>

      <RealHeader 
        title="Ekibimiz" 
        subtitle="Uzman Hukuk Kadromuz"
        description="Deneyimli ve uzman avukatlarımız ile müvekkillerimizin haklarını en iyi şekilde savunuyoruz."
      />
      
      <div className="relative z-10">
        {/* Team introduction */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="text-center mb-20">
            <div className="scroll-animate delay-100 inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 border border-blue-400/20 mb-8">
              <UserGroupIcon className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-400 font-semibold">Profesyonel Takım</span>
            </div>
            <h2 className="scroll-animate delay-200 text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
              Demir & Güvercin Hukuk Bürosu
            </h2>
            <p className="scroll-animate delay-300 text-xl text-gray-300 max-w-3xl mx-auto">
              25+ yıllık birleşik deneyimimiz ile hukukun farklı alanlarında uzmanlaşmış 
              avukatlarımız, müvekkillerimizin haklarını en etkin şekilde korur ve savunur.
            </p>
          </div>

          {/* Team members */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`scroll-animate delay-${400 + index * 200} group`}
              >
                <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-lg rounded-3xl border border-gray-700/50 shadow-2xl hover:shadow-blue-500/20 transition-all duration-700 hover:scale-[1.02]">
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-tr-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-500/15 to-transparent rounded-bl-3xl"></div>
                  
                  {/* Profile section */}
                  <div className="relative mb-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      {/* Profile photo */}
                      <div className="relative flex-shrink-0">
                        <div className="w-32 h-32 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-xl">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.src = `https://images.unsplash.com/photo-${index === 0 ? '1507003211169-0a1dd7228f2d' : '1594736797933-d0501ba2fe65'}?w=400&h=400&fit=crop&crop=face`
                            }}
                          />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Basic info */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {member.name}
                        </h3>
                        <p className="text-blue-300 font-semibold mb-3">
                          {member.title}
                        </p>
                        <div className="inline-flex items-center px-4 py-2 bg-yellow-900/30 rounded-lg border border-yellow-600/30 mb-4">
                          <ScaleIcon className="w-4 h-4 text-yellow-400 mr-2" />
                          <span className="text-yellow-300 text-sm font-semibold">{member.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
                      Uzmanlık Alanları
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {member.specialization}
                    </p>
                  </div>

                  {/* Education & Bar */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-700/30">
                      <div className="flex items-center mb-2">
                        <AcademicCapIcon className="w-5 h-5 text-blue-400 mr-2" />
                        <span className="text-blue-300 font-semibold text-sm">Eğitim</span>
                      </div>
                      <p className="text-gray-300 text-sm">{member.education}</p>
                    </div>
                    <div className="p-4 bg-yellow-900/20 rounded-xl border border-yellow-700/30">
                      <div className="flex items-center mb-2">
                        <ScaleIcon className="w-5 h-5 text-yellow-400 mr-2" />
                        <span className="text-yellow-300 font-semibold text-sm">Baro</span>
                      </div>
                      <p className="text-gray-300 text-sm">{member.barAssociation}</p>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Diller</h5>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((lang, langIndex) => (
                        <span 
                          key={langIndex}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3">Başarılar & Sertifikalar</h5>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, achievIndex) => (
                        <div key={achievIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="pt-6 border-t border-gray-700/50">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href={`tel:${member.phone}`}
                        className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 text-center"
                      >
                        Ara: {member.phone}
                      </a>
                      <a 
                        href={`mailto:${member.email}`}
                        className="flex-1 px-4 py-3 bg-transparent border-2 border-blue-400 hover:border-blue-300 text-blue-300 hover:text-blue-200 font-semibold rounded-xl transition-all duration-300 text-center"
                      >
                        E-posta Gönder
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office values */}
          <div className="scroll-animate delay-800 max-w-5xl mx-auto text-center p-12 bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 backdrop-blur-lg rounded-3xl border border-blue-600/20 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-6">
              Değerlerimiz & Vizyonumuz
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <ScaleIcon className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Adalet</h4>
                <p className="text-gray-300 text-sm">Her müvekkilimizin hakkını korumak temel değerimizdir</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="w-8 h-8 text-yellow-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Mükemmellik</h4>
                <p className="text-gray-300 text-sm">En yüksek kalitede hukuki hizmet sunmayı hedefliyoruz</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Güven</h4>
                <p className="text-gray-300 text-sm">Şeffaflık ve güvenilirlik ilişkilerimizin temelindedir</p>
              </div>
            </div>
            <p className="text-lg text-gray-300">
              <span className="text-blue-300 font-semibold">Demir & Güvercin Hukuk Bürosu</span> olarak, 
              müvekkillerimizin haklarını korumak ve adaleti sağlamak için her gün çalışıyoruz.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

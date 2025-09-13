export default function AboutMissionSection() {
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
          background: 'radial-gradient(circle at 40% 70%, rgba(30,58,138,0.10) 0%, transparent 50%), radial-gradient(circle at 60% 30%, rgba(255,215,0,0.12) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <img
            alt="Hukuk Bürosu Misyon"
            src="/images/Dava.jpg"
            width={880}
            height={900}
            className="scroll-animate delay-200 w-2xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-mr-4 lg:-mr-0"
          />
          <div className="scroll-animate lg:pt-4 lg:pl-8">
            <div className="lg:max-w-lg">
              <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Misyonumuz</h2>
              <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Hukuki Çözüm Ortağınız
              </p>
              <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
                Müvekkillerimizin hukuki ihtiyaçlarını en üst düzeyde karşılayarak, adalet arayışlarında 
                güvenilir ve etkili çözümler sunmak temel misyonumuzudur. Her davada müvekkilimizin 
                haklarını korumak için elimizden gelen tüm yasal imkanları kullanırız.
              </p>
              <div className="scroll-animate delay-400 mt-8 space-y-6">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Profesyonel Yaklaşım</h4>
                  <p className="mt-2 text-gray-300">En güncel hukuki bilgi ve deneyimlerimizle, her duruma uygun stratejiler geliştiririz.</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Etik Değerler</h4>
                  <p className="mt-2 text-gray-300">Dürüstlük, şeffaflık ve müvekkil gizliliği konularında hiçbir zaman ödün vermeyiz.</p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-blue-400 rounded-full"></div>
                  <h4 className="font-semibold text-white">Uzman Kadro</h4>
                  <p className="mt-2 text-gray-300">Deneyimli avukatlarımız ile hukukun farklı alanlarında kapsamlı hizmet veriyoruz.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
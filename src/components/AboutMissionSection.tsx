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
    
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
            <div className="flex justify-center lg:justify-end">
              <img
                src="/images/Dava.jpg"
                alt="Hukuk bürosu misyon"
                className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:max-w-none lg:-translate-x-20"
              />
            </div>
            <div className="lg:pr-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Misyonumuz</h2>
                <p className="scroll-animate delay-200 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Hukuki Çözüm Ortağınız
                </p>
                <p className="scroll-animate delay-300 mt-6 text-lg leading-8 text-gray-300">
                  Müvekkillerimizin hukuki ihtiyaçlarını en üst düzeyde karşılayarak, adalete arayışlarında 
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
    </div>
  )
}
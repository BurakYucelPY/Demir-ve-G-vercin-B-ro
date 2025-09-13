export default function AboutIntroSection() {
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
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="scroll-animate lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Kimiz?</h2>
              <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                Demir & Güvercin Hukuk Bürosu
              </p>
              <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
                2015 yılında kurulan büromuz, adaleti ve hukuku ilke edinerek müvekkillerimizin haklarını 
                en iyi şekilde savunmak amacıyla faaliyetlerini sürdürmektedir. Deneyimli kadromuz ile 
                hukukun farklı alanlarında uzman hizmet vermekteyiz.
              </p>
              <p className="scroll-animate delay-400 mt-4 text-lg/8 text-gray-300">
                Güven, şeffaflık ve dürüstlükten ödün vermeden, her müvekkilimize kişiselleştirilmiş 
                hukuki çözümler sunuyoruz. Modern hukuk anlayışımız ile geleneksel değerlerimizi 
                harmanlayarak fark yaratıyoruz.
              </p>
              <div className="scroll-animate delay-500 mt-8 flex items-center gap-x-4">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-400/40 to-transparent"></div>
                <span className="text-yellow-400 font-semibold">2015'ten beri güvende</span>
                <div className="h-px flex-1 bg-gradient-to-l from-yellow-400/40 to-transparent"></div>
              </div>
            </div>
          </div>
          <img
            alt="Hukuk Bürosu"
            src="/images/mahkeme.jpg"
            width={880}
            height={900}
            className="scroll-animate delay-200 w-2xl max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
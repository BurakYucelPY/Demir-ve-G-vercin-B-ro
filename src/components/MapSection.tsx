export default function MapSection() {
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
          background: 'radial-gradient(circle at 50% 50%, rgba(30,58,138,0.1) 0%, transparent 70%), radial-gradient(circle at 30% 70%, rgba(255,215,0,0.08) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
        ></div>
        <div 
          className="absolute bottom-0 left-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Lokasyon</h2>
          <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Ofisimizi Ziyaret Edin
          </p>
          <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
            Merkezi konumumuzda, modern ofisimizde hukuki danışmanlık hizmetlerimizden yararlanabilirsiniz.
          </p>
        </div>

        <div className="scroll-animate delay-400 mt-16">
          <div className="rounded-xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3205.829647848596!2d32.4838!3d37.8734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d0858a0b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sAraplar%2C%20Ankara%20Cd.%20No%3A76%2C%2042050%20Karatay%2FKonya%2C%20T%C3%BCrkiye!5e0!3m2!1str!2str!4v1693834567890!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>

        <div className="scroll-animate delay-500 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Kolay Ulaşım</h3>
            <p className="text-sm text-gray-300">
              Metro ve otobüs hatlarına yakın konumumuzla kolayca ulaşabilirsiniz.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Güvenli Park</h3>
            <p className="text-sm text-gray-300">
              Binada kapalı otopark imkanı mevcuttur.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Modern Ofis</h3>
            <p className="text-sm text-gray-300">
              Teknoloji donanımlı, konforlu toplantı ortamları.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

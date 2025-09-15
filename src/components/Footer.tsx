export default function Footer() {
  return (
    <footer 
      className="relative"
      style={{
        background: '#0a0a0a',
        position: 'relative'
      }}
    >
  {/* slightly thicker gold top line */}
  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"></div>
      {/* Professional background effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(30,58,138,0.1) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        ></div>
      </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white">Demir & Güvercin</h3>
              <p className="text-base text-blue-400 font-semibold">Hukuk Bürosu</p>
            </div>
            <p className="text-base leading-6 text-gray-300">
              Adaleti ve hukuku ilke edinerek müvekkillerimizin haklarını koruyoruz. 
              Güven, şeffaflık ve dürüstlükten ödün vermeden hizmet veriyoruz.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.316-1.296C4.343 14.928 3.5 13.66 3.5 12.5s.843-2.428 1.633-3.192C5.801 8.502 6.952 8.012 8.449 8.012c1.297 0 2.448.49 3.316 1.296.79.764 1.633 2.032 1.633 3.192s-.843 2.428-1.633 3.192c-.868.806-2.019 1.296-3.316 1.296zm7.718-8.238a1.045 1.045 0 11-2.09 0 1.045 1.045 0 012.09 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-12 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white">Hizmetlerimiz</h3>
                <ul role="list" className="mt-8 space-y-6">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Ceza Hukuku
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Medeni Hukuk
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Ticaret Hukuku
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Aile Hukuku
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white">Destek</h3>
                <ul role="list" className="mt-8 space-y-6">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      İletişim
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Randevu Al
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      SSS
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Hukuki Belgeler
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-base font-semibold leading-6 text-white">Büro</h3>
                <ul role="list" className="mt-8 space-y-6">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Hakkımızda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Ekibimiz
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Başvuru
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Basın
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-semibold leading-6 text-white">Yasal</h3>
                <ul role="list" className="mt-8 space-y-6">
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Gizlilik Politikası
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Hizmet Şartları
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      KVKK
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white transition-colors">
                      Çerez Politikası
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  <div className="mt-8 border-t border-gray-700 pt-6 sm:mt-10 lg:mt-12">
          <p className="text-base leading-5 text-gray-400">
            &copy; 2025 Neuronberg. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}

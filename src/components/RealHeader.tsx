import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'ANASAYFA', href: '/' },
  { name: 'HİZMETLERİMİZ', href: '/hizmetlerimiz' },
  { name: 'MAKALELER', href: '/makaleler' },
  { name: 'HAKKIMIZDA', href: '/hakkimizda' },
  { name: 'İLETİŞİM', href: '/iletisim' },
]

interface RealHeaderProps {
  title?: string
  subtitle?: string
  description?: string
}

export default function RealHeader({ title, subtitle, description }: RealHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="relative">
      {/* Background Section - 30% of viewport height */}
  <div className="relative h-[45vh] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/Terazi.jpg')`
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Header Navigation - EXACT copy from Header.tsx */}
        <header className="fixed inset-x-0 top-0 z-50" style={{ background: 'transparent', border: 'none' }}>
          <nav aria-label="Global" className="flex items-center justify-between px-6 py-4 lg:px-8">
            <div className="flex lg:flex-1">
              <Link to="/" className="-m-1.5 p-1.5 group">
                <span className="sr-only">Your Company</span>
                <span className="text-white font-bold text-2xl tracking-wide drop-shadow-lg border-b-2 border-white/30 pb-1 hover:border-white transition-all duration-300">Demir & Güvercin</span>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-lg p-2.5 text-gray-200 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-6 lg:justify-center lg:flex-1">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap group ${
                      isActive ? 'text-white' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}></span>
                  </Link>
                )
              })}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
              <div className="flex items-center justify-between">
                <Link to="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <span className="text-white font-bold text-2xl tracking-wide drop-shadow-lg border-b-2 border-white/30 pb-1 hover:border-white transition-all duration-300">Demir & Güvercin</span>
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-lg p-2.5 text-gray-200 hover:bg-white/10 transition-colors duration-200"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-700">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => {
                      const isActive = location.pathname === item.href
                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                            isActive ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
        
        {/* Hero Content - İçerik varsa göster */}
        {(title || subtitle || description) && (
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <div className="text-center px-6 max-w-4xl">
              {subtitle && (
                <motion.h2 
                  className="text-base/7 font-semibold text-blue-400"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {subtitle}
                </motion.h2>
              )}
              {title && (
                <motion.h1 
                  className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-6xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  {title}
                </motion.h1>
              )}
              {description && (
                <motion.p 
                  className="mt-6 text-lg/8 text-gray-300 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {description}
                </motion.p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

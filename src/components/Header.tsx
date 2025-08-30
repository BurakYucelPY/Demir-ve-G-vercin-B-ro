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

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Image - full screen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Terazi.jpg')`
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Header */}
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
     
     {/* Hero Content */}
     <div className="relative z-10">
       <div className="relative isolate px-6 lg:px-8">
         <div className="mx-auto max-w-2xl flex items-center justify-center h-screen">
           <div className="text-center">
             <motion.h1 
               className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
             >
                               DEMİR & GÜVERCİN HUKUK BÜROSU
             </motion.h1>
             <motion.p 
               className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
             >
                               Müvekkillerimize yalnızca hukuki destek değil, güven ve çözüm odaklı bir yaklaşım sunuyoruz. Uzman avukat kadromuz en karmaşık davaları titizlikle yürütürken, şeffaflık, dürüstlük ve profesyonellik ilkelerinden asla ödün vermiyoruz. Bizim için her dava, hakların savunulduğu ve adaletin sağlandığı bir süreçtir.
             </motion.p>
             <motion.div 
               className="mt-10 flex items-center justify-center"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.8 }}
             >
               <motion.div
                 className="text-white"
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 1.0 }}
               >
                 <motion.svg 
                   className="w-10 h-10" 
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24"
                   animate={{ y: [0, 10, 0] }}
                   transition={{ 
                     duration: 2,
                     repeat: Infinity,
                     ease: "easeInOut"
                   }}
                 >
                   <path 
                     strokeLinecap="round" 
                     strokeLinejoin="round" 
                     strokeWidth={2} 
                     d="M7 13l5 5 5-5" 
                   />
                 </motion.svg>
               </motion.div>
             </motion.div>
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}

import { useState } from 'react'

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form gönderme işlemi burada olacak
    console.log('Form gönderildi:', formData)
  }

  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        backgroundImage: 'url("/images/WaitingRoom.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.85) 100%)'
        }}
      ></div>
      
      {/* Additional background effects */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 80% 20%, rgba(30,58,138,0.15) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(255,215,0,0.1) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
        ></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div id="ucretsiz-on-degerlendirme" className="mx-auto max-w-2xl text-center">
          <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-yellow-400">Hukuki Danışmanlık</h2>
          <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            Ücretsiz Ön Değerlendirme
          </p>
          <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
            Hukuki durumunuzu değerlendirmemiz için aşağıdaki formu doldurun. En kısa sürede size geri dönüş yapacağız.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-2xl">
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="scroll-animate delay-400">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Ad Soyad *
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 sm:text-sm sm:leading-6"
                  placeholder="Adınızı ve soyadınızı girin"
                />
              </div>
            </div>

            <div className="scroll-animate delay-500">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                E-posta *
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 sm:text-sm sm:leading-6"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div className="scroll-animate delay-600">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                Telefon
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 sm:text-sm sm:leading-6"
                  placeholder="+90 (5XX) XXX XX XX"
                />
              </div>
            </div>

            <div className="scroll-animate delay-700">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
                Konu *
              </label>
              <div className="mt-2">
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 sm:text-sm sm:leading-6"
                >
                  <option value="">Konu seçin</option>
                  <option value="ceza-hukuku">Ceza Hukuku</option>
                  <option value="medeni-hukuk">Medeni Hukuk</option>
                  <option value="ticaret-hukuku">Ticaret Hukuku</option>
                  <option value="is-hukuku">İş Hukuku</option>
                  <option value="gayrimenkul-hukuku">Gayrimenkul Hukuku</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>
            </div>

            <div className="scroll-animate delay-800 sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Mesaj *
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-600 bg-gray-800/50 px-3.5 py-2 text-white shadow-sm placeholder:text-gray-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 sm:text-sm sm:leading-6"
                  placeholder="Hukuki durumunuzu detaylı olarak açıklayın..."
                />
              </div>
            </div>
          </div>

          <div className="scroll-animate delay-900 mt-8">
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-200"
            >
              Ücretsiz Değerlendirme Talep Et
            </button>
          </div>

          <div className="scroll-animate delay-1000 mt-4">
            <p className="text-center text-xs text-gray-400">
              * Zorunlu alanlar. Gönderdiğiniz bilgiler gizli tutulacaktır.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

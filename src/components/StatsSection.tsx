export default function StatsSection() {
  const stats = [
    { id: 1, name: 'Hukukun üstünlüğünü ilke edinerek, müvekkillerimizin haklarını en adil şekilde savunuyor; güven, şeffaflık ve dürüstlükten ödün vermeden çalışıyoruz.', value: '"Adalet mülkün temelidir."' },
  ]

  return (
    <div 
      className="overflow-hidden py-12 sm:py-16 relative"
      style={{
        background: '#0a0a0a'
      }}
    >
      {/* İnce ışık efekti */}
      <div 
        className="absolute inset-0 animate-pulse"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%, transparent 100%)',
          animation: 'lightSweep 8s ease-in-out infinite'
        }}
      ></div>
      <div className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <div className="grid grid-cols-1 gap-8">
              {stats.map((stat) => (
                                 <div key={stat.id} className="mx-auto flex max-w-4xl flex-col gap-y-4">
                                     <dt className="text-4xl font-bold leading-7 text-blue-900 sm:text-5xl">
                     {stat.value}
                   </dt>
                  <dd className="text-lg leading-7 text-gray-600 font-medium">
                    {stat.name}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

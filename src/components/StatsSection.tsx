export default function StatsSection() {
  const stats = [
    { id: 1, name: 'Hukukun üstünlüğünü ilke edinerek, müvekkillerimizin haklarını en adil şekilde savunuyor; güven, şeffaflık ve dürüstlükten ödün vermeden çalışıyoruz.', value: '"Adalet mülkün temelidir."' },
  ]

  return (
         <div 
       className="overflow-hidden py-12 sm:py-16 relative"
       style={{
         background: '#0a0a0a',
         position: 'relative'
       }}
     >
               {/* Professional background effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 30%, rgba(30,58,138,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255,215,0,0.1) 0%, transparent 50%)',
            animation: 'subtlePulse 8s ease-in-out infinite'
          }}
        ></div>
        
        {/* Elegant lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent"
            style={{
              animation: 'lineSweep 12s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
            style={{
              animation: 'lineSweep 12s ease-in-out infinite 6s'
            }}
          ></div>
        </div>
      
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

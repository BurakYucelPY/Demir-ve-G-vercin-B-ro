export default function StatsSection2() {
     const stats = [
     { id: 1, name: 'Yıllık Tecrübe', value: '25+' },
     { id: 2, name: 'Çalışan', value: '100+' },
     { id: 3, name: 'Başarılı Dava', value: '500+' },
     { id: 4, name: 'Mutlu Müvekkil', value: '1000+' },
     { id: 5, name: 'Çalışan', value: '100+' },
   ]

  return (
         <div 
       className="overflow-hidden py-6 sm:py-8 relative"
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
                         <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                     <dt className="text-3xl font-black leading-7 text-blue-900 sm:text-4xl">
                     {stat.value}
                   </dt>
                   <dd className="text-sm leading-7 text-gray-600 font-bold">
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

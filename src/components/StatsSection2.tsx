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

import { ScaleIcon, HeartIcon, TrophyIcon, UserGroupIcon } from '@heroicons/react/24/outline'

const values = [
  {
    name: 'Adalet',
    description: 'Her müvekkilimizin hakkını korumak ve adaleti sağlamak temel değerimizdir. Hukuki süreçlerde eşitlik ve adalet ilkesinden asla taviz vermeyiz.',
    icon: ScaleIcon,
  },
  {
    name: 'Güven',
    description: 'Müvekkil gizliliği ve güvenilirlik konusunda en yüksek standartları benimser, size verdiğimiz sözlerin arkasında dururuz.',
    icon: HeartIcon,
  },
  {
    name: 'Mükemmellik',
    description: 'Sürekli kendimizi geliştirerek, en güncel hukuki bilgi ve deneyimlerle size en iyi hizmeti sunmaya odaklanırız.',
    icon: TrophyIcon,
  },
  {
    name: 'İnsan Odaklılık',
    description: 'Her müvekkilimizin benzersiz durumunu anlayarak, kişiselleştirilmiş ve empatik bir yaklaşım sergileriz.',
    icon: UserGroupIcon,
  },
]

export default function AboutValuesSection() {
  return (
    <div 
      className="overflow-hidden py-24 sm:py-32 relative"
      style={{
        background: '#0f0f0f',
        position: 'relative'
      }}
    >
      {/* Professional background effect - slightly different for variation */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at 70% 20%, rgba(30,58,138,0.12) 0%, transparent 50%), radial-gradient(circle at 30% 80%, rgba(255,215,0,0.08) 0%, transparent 50%)'
        }}
      ></div>
      
      {/* Elegant lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/25 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="scroll-animate delay-100 text-base/7 font-semibold text-blue-400">Değerlerimiz</h2>
          <p className="scroll-animate delay-200 mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
            İlkelerimiz ve Değerlerimiz
          </p>
          <p className="scroll-animate delay-300 mt-6 text-lg/8 text-gray-300">
            Hukuk anlayışımızı şekillendiren temel değerler, tüm hizmetlerimizin merkezinde yer alır. 
            Bu ilkelerle müvekkillerimize en iyi hizmeti sunarız.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {values.map((value, index) => (
              <div key={value.name} className={`scroll-animate delay-${300 + index * 100} flex flex-col`}>
                <dt className="text-base/7 font-semibold text-white">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/30 border border-blue-400/40 shadow-lg">
                    <value.icon aria-hidden="true" className="h-8 w-8 text-blue-400" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-300">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
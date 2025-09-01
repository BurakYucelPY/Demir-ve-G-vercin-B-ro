import { TruckIcon, ShieldCheckIcon, ArrowsRightLeftIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Free shipping',
    description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    icon: TruckIcon,
  },
  {
    name: '10-year warranty',
    description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    icon: ShieldCheckIcon,
  },
  {
    name: 'Exchanges',
    description: "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    icon: ArrowsRightLeftIcon,
  },
]

export default function BusinessServiceSection() {
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
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
              alt="Modern workspace with computer and accessories"
              className="w-full max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] lg:max-w-none lg:-translate-x-20"
            />
          </div>
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                We built our business on great customer service
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At the beginning at least, but then we realized we could make a 
                lot more money if we kinda stopped caring about that. Our new 
                strategy is to write a bunch of things that look really good in the 
                headlines, then clarify in the small print but hope people don't 
                actually read it.
              </p>
            </div>
          </div>
        </div>

        {/* Features section */}
        <div className="mx-auto mt-32 max-w-7xl sm:mt-40">
          <div className="mx-auto max-w-2xl lg:mx-auto">
            <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col items-center text-center">
                  <div className="rounded-md bg-white p-2 ring-1 ring-gray-900/10">
                    <feature.icon className="h-6 w-6 text-gray-600" aria-hidden="true" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900 text-lg">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    {feature.description}
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

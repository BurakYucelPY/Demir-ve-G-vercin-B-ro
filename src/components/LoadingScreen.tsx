import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GiScales } from 'react-icons/gi'

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete: () => void
}

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (isLoading) {
      setProgress(0)
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(timer)
            setTimeout(() => {
              onLoadingComplete()
            }, 500)
            return 100
          }
          return prev + Math.random() * 15 + 5
        })
      }, 200)

      return () => clearInterval(timer)
    }
  }, [isLoading, onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/AzizLogoBiro (1).jpeg')`
          }}
        >
                     <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
             {/* Animated Scale with Progress Ring */}
             <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1, ease: "easeOut" }}
                               className="relative -mt-16 -ml-12"
             >
              {/* Progress Ring */}
              <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="3"
                  fill="none"
                />
                {/* Progress Circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="white"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 251.2" }}
                  animate={{ strokeDasharray: `${(progress / 100) * 251.2} 251.2` }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
              
              {/* Scale Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: [0, 8, -8, 0],
                    y: [0, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white"
                >
                  <GiScales size={80} />
                </motion.div>
              </div>
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 bg-white/5 rounded-full blur-lg"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

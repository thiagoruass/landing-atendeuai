"use client"

import { useState, useEffect, memo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const FloatingActionButton = memo(function FloatingActionButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const benefitsSection = document.getElementById("beneficios")
          if (benefitsSection) {
            const rect = benefitsSection.getBoundingClientRect()
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0
            setIsVisible(isVisible)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.3,
          }}
          className="fixed bottom-6 left-4 right-4 z-50 md:hidden"
        >
          <motion.button
            onClick={handleClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#00FFAA] to-[#00D4FF] p-4 shadow-2xl transition-all duration-300"
            style={{
              boxShadow: "0 10px 40px rgba(0, 255, 170, 0.3), 0 0 20px rgba(0, 255, 170, 0.2)",
            }}
            aria-label="Não perca essa oportunidade"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFAA] via-[#00D4FF] to-[#00FFAA] bg-[length:200%_100%] animate-pulse opacity-20" />
            <div className="relative flex items-center justify-between">
              <div className="flex-1">
                <div className="text-left">
                  <div className="text-sm font-bold text-black leading-tight">Não perca essa Oportunidade,</div>
                  <div className="text-base font-black text-black">Clique aqui!</div>
                </div>
              </div>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "easeInOut",
                }}
                className="ml-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/20"
              >
                <ArrowRight className="h-5 w-5 text-black" />
              </motion.div>
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl border-2 border-[#00FFAA]"
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
})

export default FloatingActionButton

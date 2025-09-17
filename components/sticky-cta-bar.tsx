
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCtaBar() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsVisible(scrollTop < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/447777347741', '_blank', 'noopener,noreferrer')
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50 py-2"
        >
          <div className="container mx-auto px-4 max-w-screen-xl">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/droppad-logo.jpg"
                    alt="Droppad Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="font-semibold text-gray-800">Droppad</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={scrollToContact}
                  className="bg-blue-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm"
                >
                  Get a Free Quote
                </button>
                <button
                  onClick={openWhatsApp}
                  className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition-colors shadow-sm flex items-center space-x-1"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span className="hidden sm:inline">WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

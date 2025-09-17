
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function Footer() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/447777347741', '_blank', 'noopener,noreferrer')
  }

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'areas', label: 'Areas' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ]

  const services = [
    'Loft Conversions',
    'House Extensions',
    'Structural Calculations',
    'Planning Applications',
    'Building Regulations'
  ]

  return (
    <footer className="bg-gray-800 text-white py-12" ref={ref}>
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/droppad-logo.jpg"
                  alt="Droppad Logo"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Droppad</h3>
                <p className="text-sm text-gray-400">Design | Plan | Build</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Professional architectural services across London & Home Counties.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={openWhatsApp}
                className="text-gray-400 hover:text-white block transition-colors"
              >
                <i className="fab fa-whatsapp mr-2"></i>WhatsApp Chat
              </button>
              <p className="text-gray-400">+44 7777 347741</p>
              <p className="text-gray-400 text-xs">Office visits by appointment only</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Droppad. All rights reserved. | Office visits by appointment only.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

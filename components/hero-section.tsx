
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/447777347741', '_blank', 'noopener,noreferrer')
  }

  const services = [
    {
      icon: 'fas fa-home',
      title: 'Loft Conversions',
      description: 'Transform your unused loft space into valuable living areas with our expert design and planning services.',
      color: 'bg-blue-900'
    },
    {
      icon: 'fas fa-expand-arrows-alt',
      title: 'House Extensions',
      description: 'Extend your home with thoughtful designs that blend seamlessly with your existing property.',
      color: 'bg-green-600'
    },
    {
      icon: 'fas fa-drafting-compass',
      title: 'Structural Calculations',
      description: 'Comprehensive structural drawings and calculations to ensure your project meets all building regulations.',
      color: 'bg-blue-900'
    }
  ]

  const testimonials = [
    {
      text: "Excellent service from start to finish. The team at Droppad made our loft conversion project seamless and stress-free.",
      author: "Sarah M., Luton",
      rating: 5
    },
    {
      text: "Professional drawings and quick planning approval. Highly recommend for any extension work in St Albans.",
      author: "James T., St Albans",
      rating: 5
    }
  ]

  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center max-w-screen-xl" ref={ref}>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Designing Space, Building Value
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Professional architectural services specialising in loft conversions, house extensions, 
          and structural drawings & calculations across London & Home Counties.
        </motion.p>

        {/* Service Tiles */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <i className={`${service.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Local Trust Banner */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-md mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Serving Luton, St Albans, Harrow & Maida Vale</h3>
          <p className="text-gray-600">Local expertise with fast surveys and quick turnaround times for our core service areas.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button 
            onClick={scrollToContact}
            className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get a Free Quote
          </button>
          <button
            onClick={openWhatsApp}
            className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Chat on WhatsApp</span>
          </button>
        </motion.div>

        {/* Testimonials Preview */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-12">What Our Clients Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 + index * 0.2 }}
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-800">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

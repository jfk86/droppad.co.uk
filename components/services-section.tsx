
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function ServicesSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      title: 'Loft Conversions',
      items: ['Dormer conversions', 'Hip-to-gable conversions', 'L-shape conversions', 'Mansard conversions']
    },
    {
      title: 'House Extensions',
      items: ['Rear extensions', 'Side extensions', 'Wrap-around extensions', 'Double-storey extensions']
    },
    {
      title: 'Drawings & Calculations',
      items: ['Planning application sets', 'Building Regulations packs', 'Structural calculations', 'Technical drawings']
    },
    {
      title: 'Planning Application Support',
      description: 'Complete planning application preparation and submission support to ensure smooth approval process.'
    },
    {
      title: 'Building Regulations Approval',
      description: 'Comprehensive Building Regulations packages ensuring your project meets all safety and compliance requirements.'
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              {service.items ? (
                <ul className="text-gray-600 space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">{service.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

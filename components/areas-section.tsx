
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AreasSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const areas = ['Luton', 'St Albans', 'Harrow', 'Maida Vale']

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Areas We Cover
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {areas.map((area, index) => (
            <motion.div
              key={area}
              className="bg-blue-50 p-8 rounded-lg text-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{area}</h3>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-green-50 p-12 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Local Expertise</h3>
          <p className="text-lg text-gray-600">
            Fast surveys and quick turnaround times for our core service areas. 
            We understand local planning requirements and building regulations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function AboutSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const teamMembers = [
    {
      name: 'Muhammad Chowdhury, MArch - Manchester School of Architecture',
      title: 'Part 2 Assistant Architect',
      description: 'Muhammad is a Commercial & Residential specialist delivering practical loft and extension designs across London & Home Counties. Blends creative layouts with compliance-ready technical detail, adept with planning policy and Building Regulations packages.'
    },
    {
      name: 'Abdus Samad, MEng',
      title: 'Retrofit Coordinator and Materials Engineer — Project Manager',
      description: 'PhD in Electrochemistry with materials & structural systems insight. Focuses on robust, efficient buildability and value engineering for domestic projects.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          About Droppad
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{member.name}</h3>
              <p className="text-blue-900 font-medium mb-4">{member.title}</p>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center bg-blue-50 p-12 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximise space, light, and value with clear drawings and smooth approvals. 
            We're committed to delivering exceptional architectural solutions that enhance your home and lifestyle.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

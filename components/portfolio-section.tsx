
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: 'Victorian Loft Conversion',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      goal: 'Create additional bedroom and bathroom space',
      solution: 'Dormer conversion with ensuite',
      outcome: '40% increase in property value'
    },
    {
      title: 'Modern Rear Extension',
      image: 'https://i.ytimg.com/vi/m5a8DhJ6AoE/sddefault.jpg',
      goal: 'Open-plan kitchen and dining area',
      solution: 'Single-storey rear extension with bi-fold doors',
      outcome: 'Transformed family living space'
    },
    {
      title: 'Structural Engineering',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      goal: 'Remove load-bearing wall safely',
      solution: 'Steel beam installation with calculations',
      outcome: 'Open-plan living achieved safely'
    }
  ]

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Our Portfolio
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative w-full aspect-video bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2"><strong>Goal:</strong> {project.goal}</p>
                <p className="text-gray-600 mb-2"><strong>Solution:</strong> {project.solution}</p>
                <p className="text-gray-600"><strong>Outcome:</strong> {project.outcome}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

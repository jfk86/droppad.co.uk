
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function FaqSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const faqs = [
    {
      question: "What's the difference between planning permission and building regulations?",
      answer: "Planning permission is about the visual impact and use of the building, while building regulations ensure structural safety, insulation, and compliance with building standards."
    },
    {
      question: "How long does the design process take?",
      answer: "Typically 2-4 weeks for initial designs, with planning applications taking 8-12 weeks for approval. We provide fast turnaround for our local areas."
    },
    {
      question: "What does a site survey include?",
      answer: "Our surveys include detailed measurements, structural assessment, planning constraints review, and photographic documentation of existing conditions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

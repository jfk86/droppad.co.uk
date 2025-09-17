
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface FormData {
  name: string
  email: string
  phone: string
  postcode: string
  projectType: string
  message: string
}

export default function ContactSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    postcode: '',
    projectType: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          status: 'new'
        }),
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your enquiry! We will get back to you soon.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          postcode: '',
          projectType: '',
          message: ''
        })
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitMessage('Sorry, there was an error submitting your form. Please try again or contact us via WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openWhatsApp = () => {
    window.open('https://wa.me/447777347741', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-screen-xl" ref={ref}>
        <motion.h2 
          className="text-4xl font-bold text-gray-800 text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">WhatsApp</p>
                  <button 
                    onClick={openWhatsApp}
                    className="text-green-600 hover:text-green-700 transition-colors"
                  >
                    Chat instantly on WhatsApp
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Office Address</p>
                  <p className="text-gray-600">Studio, Beadlow Road<br />Luton, LU4 0QY</p>
                  <p className="text-sm text-gray-500 italic">By appointment only</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
            
            {submitMessage && (
              <div className={`p-4 rounded-lg mb-6 ${
                submitMessage.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="fas fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                  />
                </div>
                <div className="relative">
                  <i className="fas fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <i className="fas fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                  />
                </div>
                <div className="relative">
                  <i className="fas fa-map-marker-alt absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Site Postcode"
                    value={formData.postcode}
                    onChange={handleFormChange}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                  />
                </div>
              </div>
              <div className="relative">
                <i className="fas fa-cog absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleFormChange}
                  required
                  className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors"
                >
                  <option value="">Select Project Type</option>
                  <option value="loft-conversion">Loft Conversion</option>
                  <option value="house-extension">House Extension</option>
                  <option value="structural-calculations">Structural Calculations</option>
                  <option value="planning-application">Planning Application</option>
                  <option value="building-regulations">Building Regulations</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="relative">
                <i className="fas fa-comment absolute left-3 top-4 text-gray-400"></i>
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-colors resize-vertical"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 text-white py-3 rounded-md font-medium hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-2">Or contact us directly:</p>
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp"></i>
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

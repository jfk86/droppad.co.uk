
import { Suspense } from 'react'
import StickyCtaBar from '@/components/sticky-cta-bar'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ServicesSection from '@/components/services-section'
import AreasSection from '@/components/areas-section'
import PortfolioSection from '@/components/portfolio-section'
import FaqSection from '@/components/faq-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'



export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="h-16 bg-white shadow-md" />}>
        <StickyCtaBar />
      </Suspense>
      
      <Suspense fallback={<div className="h-20 bg-white shadow-sm" />}>
        <Navigation />
      </Suspense>
      
      <main>
        <Suspense fallback={<div className="h-screen bg-gradient-to-br from-blue-50 to-green-50" />}>
          <HeroSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <AreasSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <PortfolioSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-white" />}>
          <FaqSection />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 bg-gray-50" />}>
          <ContactSection />
        </Suspense>
      </main>
      
      <Suspense fallback={<div className="h-64 bg-gray-800" />}>
        <Footer />
      </Suspense>
    </div>
  )
}

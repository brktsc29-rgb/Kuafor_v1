import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import BeforeAfterSection from './BeforeAfterSection'
import AtmosphereSection from './AtmosphereSection'
import TestimonialsSection from './TestimonialsSection'
import InstagramSection from './InstagramSection'
import PricingSection from './PricingSection'
import ContactSection from './ContactSection'
import FloatingButtons from './FloatingButtons'
import Footer from './Footer'

export default function MainWebsite() {
  return (
    <div style={{ background: '#FFF8F5' }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <BeforeAfterSection />
      <AtmosphereSection />
      <TestimonialsSection />
      <InstagramSection />
      <PricingSection />
      <ContactSection />
      <FloatingButtons />
      <Footer />
    </div>
  )
}

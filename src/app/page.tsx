import ComparisonSection from '@/components/sections/ComparisonSection'
import CTASection from '@/components/sections/CTASection'
import FAQSection from '@/components/sections/FAQSection'
import HeroSection from '@/components/sections/HeroSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import ServicesSection from '@/components/sections/ServicesSection'
import SwitchingSection from '@/components/sections/SwitchingSection'
import TechSection from '@/components/sections/TechSection'
import WhyUsSection from '@/components/sections/WhyUsSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <SwitchingSection />
      <ComparisonSection />
      <TechSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}
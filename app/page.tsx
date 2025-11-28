import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'
import AboutSection from '@/components/AboutSection'
import CourseSection from '@/components/CourseSection'
import FeedbackSection from '@/components/FeedbackSection'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseUsSection />
        <div className="px-4">
          <AboutSection />
        </div>
        <div className="px-4">
          <CourseSection />
        </div>
        {/* <div className="px-4">
          <FeedbackSection />
        </div> */}
        <CTASection />
      </main>
    </>
  )
}

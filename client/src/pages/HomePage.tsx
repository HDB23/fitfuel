import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import MissionSection from '../components/sections/MissionSection'
import BmiForm from '../components/BmiForm'
import ContactForm from '../components/ContactForm'

const HomePage: React.FC = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <section id="form" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Calculate Your BMI & Get Your Plan
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enter your details below to calculate your BMI and receive personalized diet and workout recommendations.
            </p>
          </div>
          <BmiForm />
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have questions or feedback? We'd love to hear from you.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default HomePage

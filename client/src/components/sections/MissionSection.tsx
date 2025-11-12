import React from 'react'
import { Heart, Lock, Globe, Award } from 'lucide-react'

const MissionSection: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Our Mission & Values
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're committed to making evidence-based fitness guidance accessible, safe, and personalized 
            for everyone on their health journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Responsible Guidance */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-primary-600 dark:text-primary-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              Responsible Guidance
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              We provide general fitness guidance while emphasizing the importance of consulting healthcare 
              professionals for personalized medical advice. Your safety is our priority.
            </p>
          </div>

          {/* Accessibility */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-success-600 dark:text-success-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              Universal Accessibility
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              Fitness guidance should be available to everyone, regardless of background or experience level. 
              We design our platform to be inclusive and easy to use.
            </p>
          </div>

          {/* Privacy & Security */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-warning-600 dark:text-warning-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              Privacy & Security
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              Your personal health information is protected with industry-standard security measures. 
              We're committed to maintaining your privacy and data security.
            </p>
          </div>

          {/* Evidence-Based */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
              Evidence-Based
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              All our recommendations are grounded in scientific research and established medical guidelines 
              from authoritative sources like the CDC and USDA.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-3xl p-8">
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-900 dark:text-primary-100 mb-6">
              Our Mission Statement
            </h3>
            <p className="text-lg text-primary-800 dark:text-primary-200 leading-relaxed mb-6">
              "To democratize access to evidence-based fitness guidance by providing personalized, 
              safe, and scientifically-grounded recommendations that empower individuals to make 
              informed decisions about their health and wellness journey."
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-700 dark:text-primary-300">
              <span className="bg-white dark:bg-primary-800 px-3 py-1 rounded-full">
                Personalized
              </span>
              <span className="bg-white dark:bg-primary-800 px-3 py-1 rounded-full">
                Evidence-Based
              </span>
              <span className="bg-white dark:bg-primary-800 px-3 py-1 rounded-full">
                Accessible
              </span>
              <span className="bg-white dark:bg-primary-800 px-3 py-1 rounded-full">
                Safe
              </span>
            </div>
          </div>
        </div>

        {/* Commitment to Users */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Our Commitment to You
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                🎯 Continuous Improvement
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're constantly updating our platform with the latest research and user feedback 
                to provide you with the most accurate and helpful guidance possible.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                🤝 User-Centric Design
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every feature and recommendation is designed with your needs in mind. 
                We prioritize user experience and make health guidance simple and actionable.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                🔬 Scientific Rigor
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Our team works with healthcare professionals and researchers to ensure 
                all recommendations meet the highest standards of medical accuracy.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                💙 Community Support
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We're building a community of health-conscious individuals who support 
                each other on their fitness journeys. You're never alone in this.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Join thousands of users who are already benefiting from personalized fitness guidance. 
              Take the first step towards a healthier, more informed lifestyle.
            </p>
            <button
              onClick={() => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Calculate My Plan Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

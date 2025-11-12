import React from 'react'
import { ArrowRight, Calculator, Utensils, Dumbbell } from 'lucide-react'

const HeroSection: React.FC = () => {
  const scrollToForm = () => {
    document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Your Personal
            <span className="block text-gradient">Fitness Guide</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Calculate your BMI and receive personalized diet and workout plans tailored to your health goals. 
            Start your fitness journey with evidence-based recommendations.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
          >
            <span>Calculate My Plan</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>

          {/* Features */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Calculator className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Smart BMI Calculator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time BMI computation with CDC-standard categories
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Utensils className="w-8 h-8 text-success-600 dark:text-success-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Personalized Diet Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nutrition guidance based on your BMI category
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Dumbbell className="w-8 h-8 text-warning-600 dark:text-warning-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Custom Workout Plans
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Exercise routines tailored to your fitness level
              </p>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Trusted by health professionals and based on:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span>CDC Guidelines</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span>Evidence-Based</span>
              </span>
              <span className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning-500 rounded-full"></div>
                <span>Medical Standards</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

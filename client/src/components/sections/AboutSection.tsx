import React from 'react'
import { Info, Shield, Users, Target } from 'lucide-react'

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About FitFuel
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Your personal fitness companion that combines evidence-based science with personalized guidance 
            to help you achieve your health and wellness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Info className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  What is FitFuel?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  FitFuel is a comprehensive fitness platform that calculates your Body Mass Index (BMI) 
                  and provides personalized dietary and workout recommendations based on your health metrics. 
                  We believe that everyone deserves access to evidence-based fitness guidance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-success-600 dark:text-success-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  How It Works
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Simply enter your basic information (name, age, height, and weight), and our advanced 
                  algorithm will calculate your BMI and categorize it according to CDC standards. 
                  Based on your category, you'll receive customized meal plans and workout routines.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-warning-600 dark:text-warning-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Safety & Science
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All our recommendations are based on established medical guidelines from the CDC, 
                  Dietary Guidelines for Americans, and Physical Activity Guidelines. We prioritize 
                  your safety and provide guidance that's appropriate for your health status.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-3xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                    Personalized Approach
                  </h4>
                  <p className="text-primary-700 dark:text-primary-300 text-sm">
                    Every plan is tailored to your specific BMI category and health needs
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                      CDC
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Standard Guidelines
                    </div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-xl text-center">
                    <div className="text-2xl font-bold text-success-600 dark:text-success-400 mb-1">
                      Evidence
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Based Science
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Medical Disclaimer
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      BMI is a screening tool and does not account for body composition. 
                      Always consult healthcare professionals for personalized medical advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Why Choose FitFuel?
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Personalized Plans
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Get diet and workout recommendations specifically tailored to your BMI category and health goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success-100 dark:bg-success-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-success-600 dark:text-success-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Evidence-Based
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                All recommendations are based on established medical guidelines and scientific research.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-warning-100 dark:bg-warning-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-warning-600 dark:text-warning-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Accessible
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Free, easy-to-use platform that makes fitness guidance accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

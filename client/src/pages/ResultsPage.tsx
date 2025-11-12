import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calculator, Utensils, Dumbbell, Download } from 'lucide-react'
import { API_BASE_URL } from '../config/api'

interface Plan {
  id: string
  meals: any
  workouts: any
  notes: string
}

interface Profile {
  id: string
  name: string
  bmi: number
  category: string
}

interface ResultsData {
  profile: Profile
  plan: Plan
}

const ResultsPage: React.FC = () => {
  const { profileId } = useParams<{ profileId: string }>()
  const [data, setData] = useState<ResultsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'diet' | 'workout'>('diet')

  useEffect(() => {
    const fetchPlan = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/plan/${profileId}`)
        if (!response.ok) {
          throw new Error('Failed to fetch plan')
        }
        const result = await response.json()
        setData(result)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (profileId) {
      fetchPlan()
    }
  }, [profileId])

  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">Loading your personalized plan...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-red-600 dark:text-red-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {error || 'Unable to load your personalized plan. Please try again.'}
          </p>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  const { profile, plan } = data

  return (
    <div className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Your Personalized Plan
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Here's your customized diet and workout plan based on your BMI category
          </p>
        </div>

        {/* BMI Summary Card */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Hello, {profile.name}! 👋
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {profile.bmi}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Your BMI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  {profile.category}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Category</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Personalized
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Plan Type</div>
              </div>
            </div>
          </div>
        </div>

        {/* Plan Tabs */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('diet')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors duration-200 ${
                activeTab === 'diet'
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Utensils className="w-5 h-5 inline mr-2" />
              Diet Plan
            </button>
            <button
              onClick={() => setActiveTab('workout')}
              className={`flex-1 px-6 py-4 text-center font-medium transition-colors duration-200 ${
                activeTab === 'workout'
                  ? 'text-primary-600 dark:text-primary-400 border-b-2 border-primary-600 dark:border-primary-400'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'
              }`}
            >
              <Dumbbell className="w-5 h-5 inline mr-2" />
              Workout Plan
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'diet' ? (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Your Personalized Diet Plan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Based on your BMI category: <span className="font-semibold">{profile.category}</span>
                  </p>
                </div>

                {/* Daily Calories */}
                {plan.meals.dailyCaloriesRange && (
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
                      Daily Calorie Target
                    </h4>
                    <p className="text-primary-700 dark:text-primary-300">
                      {plan.meals.dailyCaloriesRange[0]} - {plan.meals.dailyCaloriesRange[1]} calories per day
                    </p>
                  </div>
                )}

                {/* Meals */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Daily Meal Structure
                  </h4>
                  {plan.meals.meals?.map((meal: any, index: number) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                      <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        {meal.title}
                      </h5>
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Main items:</span>
                          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4">
                            {meal.items?.map((item: string, itemIndex: number) => (
                              <li key={itemIndex}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        {meal.swaps && (
                          <div>
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Alternatives:</span>
                            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 ml-4">
                              {meal.swaps.map((swap: string, swapIndex: number) => (
                                <li key={swapIndex}>{swap}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hydration Tips */}
                {plan.meals.hydrationTips && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">
                      💧 Hydration Tips
                    </h4>
                    <ul className="space-y-2">
                      {plan.meals.hydrationTips.map((tip: string, index: number) => (
                        <li key={index} className="text-blue-700 dark:text-blue-300 text-sm">
                          • {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Notes */}
                {plan.meals.notes && (
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-3">
                      📝 Important Notes
                    </h4>
                    <ul className="space-y-2">
                      {plan.meals.notes.map((note: string, index: number) => (
                        <li key={index} className="text-yellow-700 dark:text-yellow-300 text-sm">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Your Personalized Workout Plan
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Based on your BMI category: <span className="font-semibold">{profile.category}</span>
                  </p>
                </div>

                {/* Weekly Target */}
                {plan.workouts.weeklyMinutesTarget && (
                  <div className="bg-success-50 dark:bg-success-900/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-success-900 dark:text-success-100 mb-2">
                      Weekly Exercise Target
                    </h4>
                    <p className="text-success-700 dark:text-success-300">
                      {plan.workouts.weeklyMinutesTarget} minutes of physical activity per week
                    </p>
                  </div>
                )}

                {/* Weekly Split */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Weekly Workout Schedule
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {plan.workouts.split?.map((day: any, index: number) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4">
                        <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                          {day.day}
                        </h5>
                        <div className="space-y-2">
                          <div className="text-sm">
                            <span className="font-medium text-gray-600 dark:text-gray-400">Focus:</span>
                            <span className="ml-2 text-gray-700 dark:text-gray-300">{day.focus}</span>
                          </div>
                          <div className="text-sm">
                            <span className="font-medium text-gray-600 dark:text-gray-400">Details:</span>
                            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 mt-1">
                              {day.details?.map((detail: string, detailIndex: number) => (
                                <li key={detailIndex}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                          {day.progressionTip && (
                            <div className="text-sm bg-blue-50 dark:bg-blue-900/20 rounded-lg p-2 mt-2">
                              <span className="font-medium text-blue-700 dark:text-blue-300">💡 {day.progressionTip}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Notes */}
                {plan.workouts.safetyNotes && (
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6">
                    <h4 className="text-lg font-semibold text-red-900 dark:text-red-100 mb-3">
                      ⚠️ Safety Notes
                    </h4>
                    <ul className="space-y-2">
                      {plan.workouts.safetyNotes.map((note: string, index: number) => (
                        <li key={index} className="text-red-700 dark:text-red-300 text-sm">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 text-center space-y-4">
          <button className="btn-primary text-lg px-8 py-4 inline-flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Download Plan as PDF
          </button>
          <div>
            <Link to="/" className="btn-secondary">
              Calculate Another BMI
            </Link>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl p-6">
          <div className="text-center">
            <h4 className="text-lg font-semibold text-yellow-900 dark:text-yellow-100 mb-2">
              ⚠️ Medical Disclaimer
            </h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">
              This plan provides general fitness guidance and BMI screening only. BMI is a screening tool 
              and does not account for body composition. Always consult healthcare professionals for 
              personalized medical advice, especially if you have underlying health conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage

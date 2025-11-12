/**
 * Calculate BMI using the metric formula: weight (kg) / height (m)²
 * @param heightCm - Height in centimeters
 * @param weightKg - Weight in kilograms
 * @returns BMI value rounded to 1 decimal place
 */
export const calculateBMI = (heightCm: number, weightKg: number): number => {
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error('Height and weight must be positive numbers')
  }
  
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM * heightM)
  
  return Math.round(bmi * 10) / 10 // Round to 1 decimal place
}

/**
 * Get BMI category based on CDC standards for adults
 * @param bmi - BMI value
 * @returns BMI category string
 */
export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) {
    return 'Underweight'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Healthy Weight'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight'
  } else if (bmi >= 30 && bmi < 35) {
    return 'Obesity (Class 1)'
  } else if (bmi >= 35 && bmi < 40) {
    return 'Obesity (Class 2)'
  } else {
    return 'Obesity (Class 3)'
  }
}

/**
 * Get BMI category color for UI display
 * @param category - BMI category string
 * @returns Tailwind CSS color classes
 */
export const getBMICategoryColor = (category: string): string => {
  switch (category) {
    case 'Underweight':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
    case 'Healthy Weight':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
    case 'Overweight':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
    case 'Obesity (Class 1)':
      return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
    case 'Obesity (Class 2)':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
    case 'Obesity (Class 3)':
      return 'bg-red-200 text-red-900 dark:bg-red-800/30 dark:text-red-200'
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300'
  }
}

/**
 * Get BMI category description for user education
 * @param category - BMI category string
 * @returns Description string
 */
export const getBMICategoryDescription = (category: string): string => {
  switch (category) {
    case 'Underweight':
      return 'Your BMI indicates you may be underweight. Focus on nutrient-dense foods and gradual weight gain through healthy eating and strength training.'
    case 'Healthy Weight':
      return 'Congratulations! Your BMI is in the healthy range. Maintain your current habits and focus on overall fitness and wellness.'
    case 'Overweight':
      return 'Your BMI suggests you may be carrying excess weight. Focus on balanced nutrition, regular exercise, and gradual, sustainable changes.'
    case 'Obesity (Class 1)':
      return 'Your BMI indicates obesity. Focus on creating healthy habits, balanced nutrition, and regular physical activity. Consider consulting a healthcare provider.'
    case 'Obesity (Class 2)':
      return 'Your BMI indicates severe obesity. Focus on medical supervision, structured weight management, and building sustainable healthy habits.'
    case 'Obesity (Class 3)':
      return 'Your BMI indicates very severe obesity. Medical supervision is recommended for safe and effective weight management strategies.'
    default:
      return 'Please consult with a healthcare professional for personalized guidance.'
  }
}

/**
 * Validate BMI inputs according to reasonable ranges
 * @param heightCm - Height in centimeters
 * @param weightKg - Weight in kilograms
 * @returns Validation result object
 */
export const validateBMIInputs = (heightCm: number, weightKg: number): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []
  
  if (heightCm < 120) {
    errors.push('Height must be at least 120 cm (4 feet)')
  }
  if (heightCm > 250) {
    errors.push('Height must be less than 250 cm (8 feet 2 inches)')
  }
  if (weightKg < 25) {
    errors.push('Weight must be at least 25 kg (55 lbs)')
  }
  if (weightKg > 300) {
    errors.push('Weight must be less than 300 kg (660 lbs)')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

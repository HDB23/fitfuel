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

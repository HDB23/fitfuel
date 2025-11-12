const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding...')

  // Clear existing data
  await prisma.generatedPlan.deleteMany()
  await prisma.userProfile.deleteMany()
  await prisma.planTemplate.deleteMany()
  await prisma.contactMessage.deleteMany()

  console.log('🧹 Cleared existing data')

  // Create plan templates for each BMI category
  const planTemplates = [
    {
      bmiMin: 0,
      bmiMax: 18.4,
      category: 'Underweight',
      meals: JSON.stringify({
        dailyCaloriesRange: [2200, 2800],
        pattern: 'Higher-Protein',
        meals: [
          {
            title: 'Breakfast',
            items: ['Oatmeal with nuts and dried fruits', 'Greek yogurt with honey', 'Whole grain toast with avocado'],
            swaps: ['Smoothie with protein powder', 'Eggs with whole grain bread']
          },
          {
            title: 'Morning Snack',
            items: ['Mixed nuts and dried fruits', 'Protein shake with banana'],
            swaps: ['Trail mix', 'Peanut butter on crackers']
          },
          {
            title: 'Lunch',
            items: ['Grilled chicken breast', 'Quinoa salad with vegetables', 'Olive oil dressing'],
            swaps: ['Salmon with brown rice', 'Turkey sandwich on whole grain bread']
          },
          {
            title: 'Afternoon Snack',
            items: ['Hummus with whole grain pita', 'Greek yogurt with berries'],
            swaps: ['Cottage cheese with fruit', 'Protein bar']
          },
          {
            title: 'Dinner',
            items: ['Lean beef steak', 'Sweet potato', 'Steamed vegetables'],
            swaps: ['Grilled fish', 'Lentil soup with bread']
          }
        ],
        hydrationTips: [
          'Drink 8-10 glasses of water daily',
          'Include milk or fortified plant milk for additional calories',
          'Consider smoothies for easy calorie consumption'
        ],
        notes: [
          'Focus on nutrient-dense foods',
          'Eat 3 meals + 2-3 snacks daily',
          'Don\'t skip meals',
          'Include healthy fats like nuts, avocados, and olive oil'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 150,
        split: [
          {
            day: 'Monday',
            focus: 'Strength',
            details: ['Compound exercises: squats, deadlifts, bench press', '3 sets of 8-12 reps', 'Focus on progressive overload'],
            progressionTip: 'Increase weight by 2.5-5 lbs when you can complete all sets with good form'
          },
          {
            day: 'Tuesday',
            focus: 'Cardio',
            details: ['Moderate intensity cardio: walking, cycling, or swimming', '30-45 minutes', 'Keep heart rate at 60-70% max'],
            progressionTip: 'Gradually increase duration and intensity'
          },
          {
            day: 'Wednesday',
            focus: 'Strength',
            details: ['Upper body focus: rows, overhead press, pull-ups', '3 sets of 8-12 reps', 'Include accessory exercises'],
            progressionTip: 'Focus on proper form and controlled movements'
          },
          {
            day: 'Thursday',
            focus: 'Mobility',
            details: ['Yoga or stretching routine', 'Focus on flexibility and range of motion', '20-30 minutes'],
            progressionTip: 'Hold stretches longer and go deeper gradually'
          },
          {
            day: 'Friday',
            focus: 'Strength',
            details: ['Lower body focus: lunges, step-ups, calf raises', '3 sets of 10-15 reps', 'Include balance exercises'],
            progressionTip: 'Add single-leg variations for progression'
          },
          {
            day: 'Saturday',
            focus: 'Cardio',
            details: ['Low intensity steady state: walking or light cycling', '45-60 minutes', 'Conversational pace'],
            progressionTip: 'Focus on duration rather than intensity'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking or stretching', 'Focus on recovery and preparation for next week'],
            progressionTip: 'Listen to your body and don\'t overdo it'
          }
        ],
        safetyNotes: [
          'Start with lighter weights and focus on form',
          'Warm up properly before each session',
          'Don\'t skip rest days',
          'Stay hydrated during workouts',
          'Stop if you feel pain or discomfort'
        ]
      }),
      notes: 'Focus on building healthy eating habits and gradually increasing food intake. Strength training will help build muscle mass.'
    },
    {
      bmiMin: 18.5,
      bmiMax: 24.9,
      category: 'Healthy Weight',
      meals: JSON.stringify({
        dailyCaloriesRange: [1800, 2200],
        pattern: 'Balanced',
        meals: [
          {
            title: 'Breakfast',
            items: ['Whole grain cereal with low-fat milk', 'Banana or berries', 'Handful of nuts'],
            swaps: ['Greek yogurt with granola', 'Eggs with whole grain toast']
          },
          {
            title: 'Morning Snack',
            items: ['Apple with peanut butter', 'Carrot sticks with hummus'],
            swaps: ['Mixed nuts', 'Greek yogurt']
          },
          {
            title: 'Lunch',
            items: ['Grilled chicken salad', 'Mixed greens with vegetables', 'Olive oil and lemon dressing'],
            swaps: ['Tuna sandwich on whole grain bread', 'Vegetarian lentil soup']
          },
          {
            title: 'Afternoon Snack',
            items: ['Greek yogurt with berries', 'Handful of almonds'],
            swaps: ['Cottage cheese with fruit', 'Protein bar']
          },
          {
            title: 'Dinner',
            items: ['Grilled salmon', 'Brown rice', 'Steamed broccoli'],
            swaps: ['Lean beef with quinoa', 'Vegetarian stir-fry']
          }
        ],
        hydrationTips: [
          'Drink 6-8 glasses of water daily',
          'Include herbal teas and infused water',
          'Limit sugary beverages'
        ],
        notes: [
          'Maintain current healthy habits',
          'Focus on variety in fruits and vegetables',
          'Limit added sugars and sodium',
          'Include lean proteins and whole grains'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 150,
        split: [
          {
            day: 'Monday',
            focus: 'Cardio',
            details: ['Moderate intensity cardio: brisk walking, cycling, or swimming', '30-45 minutes', 'Heart rate at 60-70% max'],
            progressionTip: 'Increase duration or intensity gradually'
          },
          {
            day: 'Tuesday',
            focus: 'Strength',
            details: ['Full body workout: squats, push-ups, rows, planks', '3 sets of 10-15 reps', 'Bodyweight or light weights'],
            progressionTip: 'Add resistance or increase reps when exercises become easy'
          },
          {
            day: 'Wednesday',
            focus: 'Cardio',
            details: ['High intensity interval training: 30 seconds work, 30 seconds rest', '20-30 minutes total', 'Include variety of exercises'],
            progressionTip: 'Increase work intervals or decrease rest periods'
          },
          {
            day: 'Thursday',
            focus: 'Strength',
            details: ['Upper body focus: push-ups, rows, overhead press', '3 sets of 10-15 reps', 'Include core work'],
            progressionTip: 'Progress to more challenging variations'
          },
          {
            day: 'Friday',
            focus: 'Cardio',
            details: ['Low intensity steady state: walking or light cycling', '45-60 minutes', 'Conversational pace'],
            progressionTip: 'Focus on consistency and enjoyment'
          },
          {
            day: 'Saturday',
            focus: 'Strength',
            details: ['Lower body focus: squats, lunges, calf raises', '3 sets of 12-15 reps', 'Include balance exercises'],
            progressionTip: 'Add single-leg variations and plyometrics'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking, stretching, or yoga', 'Focus on recovery and flexibility'],
            progressionTip: 'Use this day for mobility work and preparation'
          }
        ],
        safetyNotes: [
          'Maintain proper form in all exercises',
          'Warm up with 5-10 minutes of light cardio',
          'Listen to your body and adjust intensity as needed',
          'Stay hydrated throughout your workout',
          'Include rest periods between sets'
        ]
      }),
      notes: 'Maintain your current healthy lifestyle. Focus on variety in your exercise routine and balanced nutrition.'
    },
    {
      bmiMin: 25,
      bmiMax: 29.9,
      category: 'Overweight',
      meals: JSON.stringify({
        dailyCaloriesRange: [1600, 2000],
        pattern: 'Balanced',
        meals: [
          {
            title: 'Breakfast',
            items: ['Protein-rich breakfast: eggs with vegetables', 'Whole grain toast', 'Small portion of fruit'],
            swaps: ['Greek yogurt with berries and nuts', 'Protein smoothie with spinach']
          },
          {
            title: 'Morning Snack',
            items: ['Protein bar or Greek yogurt', 'Small apple or handful of berries'],
            swaps: ['Mixed nuts (1/4 cup)', 'Cottage cheese with fruit']
          },
          {
            title: 'Lunch',
            items: ['Large salad with lean protein', 'Mixed greens, vegetables, grilled chicken', 'Light vinaigrette dressing'],
            swaps: ['Vegetable soup with lean meat', 'Tuna salad on whole grain bread']
          },
          {
            title: 'Afternoon Snack',
            items: ['Vegetables with hummus', 'Small portion of nuts or seeds'],
            swaps: ['Greek yogurt', 'Protein shake']
          },
          {
            title: 'Dinner',
            items: ['Lean protein: fish, chicken, or tofu', 'Large portion of vegetables', 'Small portion of whole grains'],
            swaps: ['Vegetarian stir-fry', 'Grilled meat with salad']
          }
        ],
        hydrationTips: [
          'Drink 8-10 glasses of water daily',
          'Start meals with a glass of water',
          'Include herbal teas for variety',
          'Limit sugary and alcoholic beverages'
        ],
        notes: [
          'Focus on protein and fiber-rich foods',
          'Eat slowly and mindfully',
          'Use smaller plates to control portions',
          'Include vegetables with every meal',
          'Limit processed foods and added sugars'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 200,
        split: [
          {
            day: 'Monday',
            focus: 'Cardio',
            details: ['Moderate intensity cardio: brisk walking, cycling, or elliptical', '45-60 minutes', 'Heart rate at 60-70% max'],
            progressionTip: 'Start with 30 minutes and gradually increase duration'
          },
          {
            day: 'Tuesday',
            focus: 'Strength',
            details: ['Full body circuit: squats, push-ups, rows, planks', '3 sets of 12-15 reps', 'Bodyweight or light weights'],
            progressionTip: 'Focus on form and gradually increase resistance'
          },
          {
            day: 'Wednesday',
            focus: 'Cardio',
            details: ['Low impact cardio: swimming, cycling, or walking', '45-60 minutes', 'Moderate intensity'],
            progressionTip: 'Maintain consistent pace throughout'
          },
          {
            day: 'Thursday',
            focus: 'Strength',
            details: ['Upper body focus: modified push-ups, rows, overhead press', '3 sets of 10-15 reps', 'Include core work'],
            progressionTip: 'Start with modified versions and progress gradually'
          },
          {
            day: 'Friday',
            focus: 'Cardio',
            details: ['Interval training: 2 minutes moderate, 1 minute faster', '30-45 minutes total', 'Include walking breaks as needed'],
            progressionTip: 'Increase work intervals and decrease rest periods'
          },
          {
            day: 'Saturday',
            focus: 'Strength',
            details: ['Lower body focus: squats, lunges, step-ups', '3 sets of 12-15 reps', 'Include balance exercises'],
            progressionTip: 'Add resistance gradually and focus on form'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking, stretching, or yoga', 'Focus on recovery and preparation'],
            progressionTip: 'Use this day for mobility work and planning'
          }
        ],
        safetyNotes: [
          'Start slowly and build up gradually',
          'Focus on low-impact exercises initially',
          'Warm up properly before each session',
          'Stay hydrated and take breaks as needed',
          'Listen to your body and don\'t push through pain'
        ]
      }),
      notes: 'Focus on creating sustainable habits. Start with small changes and build up gradually. Consistency is key.'
    },
    {
      bmiMin: 30,
      bmiMax: 34.9,
      category: 'Obesity (Class 1)',
      meals: JSON.stringify({
        dailyCaloriesRange: [1400, 1800],
        pattern: 'Balanced',
        meals: [
          {
            title: 'Breakfast',
            items: ['High protein breakfast: eggs with spinach', 'Small portion of whole grain toast', 'Small piece of fruit'],
            swaps: ['Greek yogurt with berries', 'Protein shake with vegetables']
          },
          {
            title: 'Morning Snack',
            items: ['Protein-rich snack: Greek yogurt or cottage cheese', 'Small portion of nuts (1/4 cup)'],
            swaps: ['Protein bar', 'Hard-boiled egg']
          },
          {
            title: 'Lunch',
            items: ['Large vegetable salad with lean protein', 'Mixed greens, colorful vegetables, grilled chicken or fish', 'Light dressing'],
            swaps: ['Vegetable soup with lean meat', 'Tuna salad on whole grain bread']
          },
          {
            title: 'Afternoon Snack',
            items: ['Vegetables with hummus or Greek yogurt dip', 'Small portion of protein'],
            swaps: ['Protein shake', 'Cottage cheese with fruit']
          },
          {
            title: 'Dinner',
            items: ['Lean protein: fish, chicken, or lean beef', 'Large portion of non-starchy vegetables', 'Small portion of whole grains'],
            swaps: ['Vegetarian protein source', 'Grilled meat with salad']
          }
        ],
        hydrationTips: [
          'Drink 8-10 glasses of water daily',
          'Start each meal with water',
          'Include herbal teas and infused water',
          'Avoid sugary beverages completely',
          'Consider drinking water before meals to help with portion control'
        ],
        notes: [
          'Focus on protein and fiber to increase satiety',
          'Eat slowly and mindfully',
          'Use smaller plates and bowls',
          'Include protein with every meal and snack',
          'Limit processed foods, added sugars, and refined carbohydrates',
          'Plan meals ahead to avoid unhealthy choices'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 150,
        split: [
          {
            day: 'Monday',
            focus: 'Cardio',
            details: ['Low impact cardio: walking, cycling, or swimming', '30-45 minutes', 'Start with 20 minutes if needed'],
            progressionTip: 'Gradually increase duration by 5 minutes each week'
          },
          {
            day: 'Tuesday',
            focus: 'Strength',
            details: ['Upper body focus: wall push-ups, seated rows, overhead press', '2-3 sets of 10-15 reps', 'Use light weights or resistance bands'],
            progressionTip: 'Start with bodyweight exercises and add resistance gradually'
          },
          {
            day: 'Wednesday',
            focus: 'Cardio',
            details: ['Walking or light cycling', '30-45 minutes', 'Moderate pace that allows conversation'],
            progressionTip: 'Focus on consistency rather than intensity'
          },
          {
            day: 'Thursday',
            focus: 'Strength',
            details: ['Lower body focus: chair squats, step-ups, calf raises', '2-3 sets of 10-15 reps', 'Include balance exercises'],
            progressionTip: 'Use support (wall or chair) as needed and progress gradually'
          },
          {
            day: 'Friday',
            focus: 'Cardio',
            details: ['Low impact cardio: swimming, cycling, or elliptical', '30-45 minutes', 'Moderate intensity'],
            progressionTip: 'Choose activities that are comfortable for your joints'
          },
          {
            day: 'Saturday',
            focus: 'Mobility',
            details: ['Gentle stretching and mobility work', '20-30 minutes', 'Focus on range of motion'],
            progressionTip: 'Hold stretches longer and focus on breathing'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking or gentle stretching', 'Focus on recovery and preparation'],
            progressionTip: 'Use this day for planning and setting goals'
          }
        ],
        safetyNotes: [
          'Start with low-impact exercises',
          'Focus on form and control',
          'Warm up properly before each session',
          'Stay hydrated and take frequent breaks',
          'Listen to your body and stop if you feel pain',
          'Consider working with a fitness professional initially',
          'Start with shorter sessions and build up gradually'
        ]
      }),
      notes: 'Focus on building sustainable habits. Start slowly and be patient with your progress. Consider working with healthcare professionals.'
    },
    {
      bmiMin: 35,
      bmiMax: 39.9,
      category: 'Obesity (Class 2)',
      meals: JSON.stringify({
        dailyCaloriesRange: [1200, 1600],
        pattern: 'Higher-Protein',
        meals: [
          {
            title: 'Breakfast',
            items: ['High protein breakfast: 2-3 eggs with vegetables', 'Small portion of whole grain', 'Small piece of fruit'],
            swaps: ['Greek yogurt with protein powder', 'Protein shake with vegetables']
          },
          {
            title: 'Morning Snack',
            items: ['Protein-rich snack: Greek yogurt or cottage cheese', 'Small portion of nuts (1/4 cup)'],
            swaps: ['Protein bar', 'Hard-boiled egg with vegetables']
          },
          {
            title: 'Lunch',
            items: ['Large vegetable salad with lean protein', 'Mixed greens, colorful vegetables, grilled chicken or fish', 'Light dressing'],
            swaps: ['Vegetable soup with lean meat', 'Tuna salad on whole grain bread']
          },
          {
            title: 'Afternoon Snack',
            items: ['Vegetables with hummus or Greek yogurt dip', 'Small portion of protein'],
            swaps: ['Protein shake', 'Cottage cheese with fruit']
          },
          {
            title: 'Dinner',
            items: ['Lean protein: fish, chicken, or lean beef', 'Large portion of non-starchy vegetables', 'Small portion of whole grains'],
            swaps: ['Vegetarian protein source', 'Grilled meat with salad']
          }
        ],
        hydrationTips: [
          'Drink 8-10 glasses of water daily',
          'Start each meal with water',
          'Include herbal teas and infused water',
          'Avoid sugary beverages completely',
          'Consider drinking water before meals to help with portion control'
        ],
        notes: [
          'Focus on protein and fiber to increase satiety',
          'Eat slowly and mindfully',
          'Use smaller plates and bowls',
          'Include protein with every meal and snack',
          'Limit processed foods, added sugars, and refined carbohydrates',
          'Plan meals ahead to avoid unhealthy choices',
          'Consider working with a registered dietitian'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 120,
        split: [
          {
            day: 'Monday',
            focus: 'Cardio',
            details: ['Low impact cardio: walking, cycling, or swimming', '20-30 minutes', 'Start with 15 minutes if needed'],
            progressionTip: 'Gradually increase duration by 5 minutes each week'
          },
          {
            day: 'Tuesday',
            focus: 'Strength',
            details: ['Upper body focus: wall push-ups, seated rows, overhead press', '2-3 sets of 10-15 reps', 'Use light weights or resistance bands'],
            progressionTip: 'Start with bodyweight exercises and add resistance gradually'
          },
          {
            day: 'Wednesday',
            focus: 'Cardio',
            details: ['Walking or light cycling', '20-30 minutes', 'Moderate pace that allows conversation'],
            progressionTip: 'Focus on consistency rather than intensity'
          },
          {
            day: 'Thursday',
            focus: 'Strength',
            details: ['Lower body focus: chair squats, step-ups, calf raises', '2-3 sets of 10-15 reps', 'Include balance exercises'],
            progressionTip: 'Use support (wall or chair) as needed and progress gradually'
          },
          {
            day: 'Friday',
            focus: 'Cardio',
            details: ['Low impact cardio: swimming, cycling, or elliptical', '20-30 minutes', 'Moderate intensity'],
            progressionTip: 'Choose activities that are comfortable for your joints'
          },
          {
            day: 'Saturday',
            focus: 'Mobility',
            details: ['Gentle stretching and mobility work', '15-20 minutes', 'Focus on range of motion'],
            progressionTip: 'Hold stretches longer and focus on breathing'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking or gentle stretching', 'Focus on recovery and preparation'],
            progressionTip: 'Use this day for planning and setting goals'
          }
        ],
        safetyNotes: [
          'Start with low-impact exercises',
          'Focus on form and control',
          'Warm up properly before each session',
          'Stay hydrated and take frequent breaks',
          'Listen to your body and stop if you feel pain',
          'Consider working with a fitness professional initially',
          'Start with shorter sessions and build up gradually',
          'Focus on building consistency before increasing intensity'
        ]
      }),
      notes: 'Focus on building sustainable habits. Start slowly and be patient with your progress. Consider working with healthcare professionals.'
    },
    {
      bmiMin: 40,
      bmiMax: 100,
      category: 'Obesity (Class 3)',
      meals: JSON.stringify({
        dailyCaloriesRange: [1000, 1400],
        pattern: 'Higher-Protein',
        meals: [
          {
            title: 'Breakfast',
            items: ['High protein breakfast: 2-3 eggs with vegetables', 'Small portion of whole grain', 'Small piece of fruit'],
            swaps: ['Greek yogurt with protein powder', 'Protein shake with vegetables']
          },
          {
            title: 'Morning Snack',
            items: ['Protein-rich snack: Greek yogurt or cottage cheese', 'Small portion of nuts (1/4 cup)'],
            swaps: ['Protein bar', 'Hard-boiled egg with vegetables']
          },
          {
            title: 'Lunch',
            items: ['Large vegetable salad with lean protein', 'Mixed greens, colorful vegetables, grilled chicken or fish', 'Light dressing'],
            swaps: ['Vegetable soup with lean meat', 'Tuna salad on whole grain bread']
          },
          {
            title: 'Afternoon Snack',
            items: ['Vegetables with hummus or Greek yogurt dip', 'Small portion of protein'],
            swaps: ['Protein shake', 'Cottage cheese with fruit']
          },
          {
            title: 'Dinner',
            items: ['Lean protein: fish, chicken, or lean beef', 'Large portion of non-starchy vegetables', 'Small portion of whole grains'],
            swaps: ['Vegetarian protein source', 'Grilled meat with salad']
          }
        ],
        hydrationTips: [
          'Drink 8-10 glasses of water daily',
          'Start each meal with water',
          'Include herbal teas and infused water',
          'Avoid sugary beverages completely',
          'Consider drinking water before meals to help with portion control'
        ],
        notes: [
          'Focus on protein and fiber to increase satiety',
          'Eat slowly and mindfully',
          'Use smaller plates and bowls',
          'Include protein with every meal and snack',
          'Limit processed foods, added sugars, and refined carbohydrates',
          'Plan meals ahead to avoid unhealthy choices',
          'Consider working with a registered dietitian',
          'Focus on building healthy habits gradually'
        ]
      }),
      workouts: JSON.stringify({
        weeklyMinutesTarget: 90,
        split: [
          {
            day: 'Monday',
            focus: 'Cardio',
            details: ['Low impact cardio: walking, cycling, or swimming', '15-20 minutes', 'Start with 10 minutes if needed'],
            progressionTip: 'Gradually increase duration by 5 minutes each week'
          },
          {
            day: 'Tuesday',
            focus: 'Strength',
            details: ['Upper body focus: wall push-ups, seated rows, overhead press', '2-3 sets of 10-15 reps', 'Use light weights or resistance bands'],
            progressionTip: 'Start with bodyweight exercises and add resistance gradually'
          },
          {
            day: 'Wednesday',
            focus: 'Cardio',
            details: ['Walking or light cycling', '15-20 minutes', 'Moderate pace that allows conversation'],
            progressionTip: 'Focus on consistency rather than intensity'
          },
          {
            day: 'Thursday',
            focus: 'Strength',
            details: ['Lower body focus: chair squats, step-ups, calf raises', '2-3 sets of 10-15 reps', 'Include balance exercises'],
            progressionTip: 'Use support (wall or chair) as needed and progress gradually'
          },
          {
            day: 'Friday',
            focus: 'Cardio',
            details: ['Low impact cardio: swimming, cycling, or elliptical', '15-20 minutes', 'Moderate intensity'],
            progressionTip: 'Choose activities that are comfortable for your joints'
          },
          {
            day: 'Saturday',
            focus: 'Mobility',
            details: ['Gentle stretching and mobility work', '10-15 minutes', 'Focus on range of motion'],
            progressionTip: 'Hold stretches longer and focus on breathing'
          },
          {
            day: 'Sunday',
            focus: 'Rest',
            details: ['Active recovery: light walking or gentle stretching', 'Focus on recovery and preparation'],
            progressionTip: 'Use this day for planning and setting goals'
          }
        ],
        safetyNotes: [
          'Start with low-impact exercises',
          'Focus on form and control',
          'Warm up properly before each session',
          'Stay hydrated and take frequent breaks',
          'Listen to your body and stop if you feel pain',
          'Consider working with a fitness professional initially',
          'Start with shorter sessions and build up gradually',
          'Focus on building consistency before increasing intensity',
          'Consider working with healthcare professionals for guidance'
        ]
      }),
      notes: 'Focus on building sustainable habits. Start slowly and be patient with your progress. Consider working with healthcare professionals.'
    }
  ]

  // Insert plan templates
  for (const template of planTemplates) {
    await prisma.planTemplate.create({
      data: template
    })
  }

  console.log(`✅ Created ${planTemplates.length} plan templates`)

  console.log('🎉 Database seeding completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

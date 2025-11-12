import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router: Router = Router()

router.get('/:profileId', async (req, res) => {
  try {
    const { profileId } = req.params
    
    // Get user profile
    const profile = await prisma.userProfile.findUnique({
      where: { id: profileId }
    })
    
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' })
    }
    
    // Find matching plan template based on BMI category
    const planTemplate = await prisma.planTemplate.findFirst({
      where: {
        bmiMin: { lte: profile.bmi },
        bmiMax: { gte: profile.bmi }
      }
    })
    
    if (!planTemplate) {
      return res.status(404).json({ error: 'No plan template found for this BMI category' })
    }
    
    // Parse JSON strings back to objects
    const meals = JSON.parse(planTemplate.meals)
    const workouts = JSON.parse(planTemplate.workouts)

    // Create generated plan
    const generatedPlan = await prisma.generatedPlan.create({
      data: {
        userProfileId: profile.id,
        meals: JSON.stringify(meals),
        workouts: JSON.stringify(workouts)
      }
    })
    
    return res.json({
      profile: {
        id: profile.id,
        name: profile.name,
        bmi: profile.bmi,
        category: profile.category
      },
      plan: {
        id: generatedPlan.id,
        meals,
        workouts,
        notes: planTemplate.notes
      }
    })
    
  } catch (error) {
    console.error('Error retrieving plan:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

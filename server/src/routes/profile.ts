import { Router } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma'
import { calculateBMI, getBMICategory } from '../utils/bmiUtils'

const router = Router()

// Validation schema
const profileSchema = z.object({
  name: z.string().min(2).max(50),
  age: z.number().min(13).max(120),
  heightCm: z.number().min(120).max(250),
  weightKg: z.number().min(25).max(300),
  bmi: z.number().positive(),
  category: z.string()
})

router.post('/', async (req, res) => {
  try {
    console.log('Received profile data:', req.body)
    
    // Validate input
    const validatedData = profileSchema.parse(req.body)
    
    // Re-calculate BMI on server side for security
    const serverBMI = calculateBMI(validatedData.heightCm, validatedData.weightKg)
    const serverCategory = getBMICategory(serverBMI)
    
    // Verify client calculation matches server calculation
    if (Math.abs(serverBMI - validatedData.bmi) > 0.1) {
      return res.status(400).json({ 
        error: 'BMI calculation mismatch. Please try again.' 
      })
    }
    
    // Create user profile
    const profile = await prisma.userProfile.create({
      data: {
        name: validatedData.name,
        age: validatedData.age,
        heightCm: validatedData.heightCm,
        weightKg: validatedData.weightKg,
        bmi: serverBMI,
        category: serverCategory
      }
    })
    
    res.status(201).json({
      id: profile.id,
      bmi: serverBMI,
      category: serverCategory,
      message: 'Profile created successfully'
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Invalid input data', 
        details: error.errors 
      })
    }
    
    console.error('Error creating profile:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

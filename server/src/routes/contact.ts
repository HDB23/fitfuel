import { Router } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

const router: Router = Router()

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email().max(100),
  message: z.string().min(10).max(1000)
})

router.post('/', async (req, res) => {
  try {
    // Validate input
    const validatedData = contactSchema.parse(req.body)
    
    // Store contact message
    const contactMessage = await prisma.contactMessage.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message
      }
    })
    
    return res.status(201).json({
      id: contactMessage.id,
      message: 'Contact message sent successfully'
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        error: 'Invalid input data', 
        details: error.errors 
      })
    }
    
    console.error('Error sending contact message:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
})

export default router

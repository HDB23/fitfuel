import { Router } from 'express'
import { prisma } from '../lib/prisma'

const router: Router = Router()

// Get all contact messages
router.get('/contacts', async (_req, res) => {
  try {
    const contacts = await prisma.contactMessage.findMany({
      orderBy: { createdAt: 'desc' }
    })
    return res.json({ success: true, contacts })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    return res.status(500).json({ error: 'Failed to fetch contacts' })
  }
})

// Get all user profiles
router.get('/profiles', async (_req, res) => {
  try {
    const profiles = await prisma.userProfile.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        generatedPlans: true
      }
    })
    return res.json({ success: true, profiles })
  } catch (error) {
    console.error('Error fetching profiles:', error)
    return res.status(500).json({ error: 'Failed to fetch profiles' })
  }
})

// Get all generated plans
router.get('/plans', async (_req, res) => {
  try {
    const plans = await prisma.generatedPlan.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        userProfile: true
      }
    })
    return res.json({ success: true, plans })
  } catch (error) {
    console.error('Error fetching plans:', error)
    return res.status(500).json({ error: 'Failed to fetch plans' })
  }
})

// Get a specific contact message by ID
router.get('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params
    const contact = await prisma.contactMessage.findUnique({
      where: { id }
    })
    
    if (!contact) {
      return res.status(404).json({ error: 'Contact message not found' })
    }
    
    return res.json({ success: true, contact })
  } catch (error) {
    console.error('Error fetching contact:', error)
    return res.status(500).json({ error: 'Failed to fetch contact' })
  }
})

// Get a specific user profile by ID
router.get('/profiles/:id', async (req, res) => {
  try {
    const { id } = req.params
    const profile = await prisma.userProfile.findUnique({
      where: { id },
      include: {
        generatedPlans: true
      }
    })
    
    if (!profile) {
      return res.status(404).json({ error: 'User profile not found' })
    }
    
    return res.json({ success: true, profile })
  } catch (error) {
    console.error('Error fetching profile:', error)
    return res.status(500).json({ error: 'Failed to fetch profile' })
  }
})

// Delete a contact message
router.delete('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params
    await prisma.contactMessage.delete({
      where: { id }
    })
    
    return res.json({ success: true, message: 'Contact message deleted successfully' })
  } catch (error) {
    console.error('Error deleting contact:', error)
    return res.status(500).json({ error: 'Failed to delete contact' })
  }
})

// Delete a user profile (and all associated plans)
router.delete('/profiles/:id', async (req, res) => {
  try {
    const { id } = req.params
    await prisma.userProfile.delete({
      where: { id }
    })
    
    return res.json({ success: true, message: 'User profile deleted successfully' })
  } catch (error) {
    console.error('Error deleting profile:', error)
    return res.status(500).json({ error: 'Failed to delete profile' })
  }
})

export default router
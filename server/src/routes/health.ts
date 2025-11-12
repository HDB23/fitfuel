import { Router } from 'express'

const router: Router = Router()

router.get('/', (_req, res) => {
  return res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'FitFuel API',
    version: '1.0.0'
  })
})

export default router

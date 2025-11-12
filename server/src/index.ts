import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

// Import routes
import profileRoutes from './routes/profile'
import planRoutes from './routes/plan'
import contactRoutes from './routes/contact'
import healthRoutes from './routes/health'

// Load environment variables
dotenv.config()

const app = express()
const port = process.env.PORT || 3001


// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
})

// Middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}))
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  credentials: true,
}))
app.use(limiter)
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))
app.use(cookieParser())

// Health check endpoint
app.use('/api/health', healthRoutes)

// API routes
app.use('/api/profile', profileRoutes)
app.use('/api/plan', planRoutes)
app.use('/api/contact', contactRoutes)

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Error:', err)
  console.error('Error stack:', err.stack)
  
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON' })
  }
  
  // Don't leak error details in production
  const errorMessage = process.env.NODE_ENV === 'production' 
    ? 'Internal server error' 
    : err.message || 'Internal server error'
  
  res.status(500).json({ 
    error: errorMessage,
    ...(process.env.NODE_ENV !== 'production' && { stack: err.stack })
  })
})

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Export handler for Vercel serverless functions
export default app

// Start server only in development (not in serverless environment)
if (process.env.NODE_ENV !== 'production' && process.env.VERCEL !== '1') {
  // Import Prisma only for local development
  import('./lib/prisma').then(({ prisma }) => {
    // Graceful shutdown
    process.on('SIGINT', async () => {
      console.log('Shutting down gracefully...')
      await prisma.$disconnect()
      process.exit(0)
    })

    process.on('SIGTERM', async () => {
      console.log('Shutting down gracefully...')
      await prisma.$disconnect()
      process.exit(0)
    })

    // Start server
    app.listen(port, () => {
      console.log(`🚀 FitFuel server running on port ${port}`)
      console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`)
      console.log(`🔗 Client origin: ${process.env.CLIENT_ORIGIN || 'http://localhost:5173'}`)
    })
  })
}

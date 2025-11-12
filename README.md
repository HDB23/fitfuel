# FitFuel - Full-Stack Fitness App

A production-ready full-stack web application that calculates BMI and provides personalized dietary and workout recommendations based on health metrics.

## 🚀 Features

- **BMI Calculator**: Real-time BMI computation with CDC-standard categories
- **Personalized Plans**: Diet and workout recommendations mapped to BMI categories
- **Modern UI**: Responsive design with Tailwind CSS and dark mode
- **Full-Stack**: React frontend with Node.js/Express backend
- **Type Safety**: Full TypeScript implementation with Zod validation
- **Database**: Prisma ORM with SQLite (dev) and PostgreSQL (prod) ready
- **Testing**: Comprehensive test suite with Vitest and Jest

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- TypeScript
- Tailwind CSS
- React Router
- React Hook Form + Zod
- Framer Motion
- Axios

### Backend
- Node.js + Express
- TypeScript
- Prisma ORM
- SQLite (dev) / PostgreSQL (prod)
- JWT authentication (scaffold-ready)
- Helmet security middleware

### Testing & Quality
- Vitest + React Testing Library (frontend)
- Jest + Supertest (backend)
- ESLint + Prettier
- Husky pre-commit hooks

## 📋 Prerequisites

- Node.js 18+ 
- pnpm 8+
- Git

## 🚀 Quick Start

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd fitfuel
   pnpm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Set up database**
   ```bash
   pnpm db:generate
   pnpm db:push
   pnpm seed
   ```

4. **Start development servers**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001
   - Database Studio: http://localhost:5555

## 📁 Project Structure

```
fitfuel/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── types/         # TypeScript type definitions
│   │   ├── utils/         # Utility functions
│   │   └── api/           # API client functions
│   ├── public/            # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/   # Route controllers
│   │   ├── middleware/    # Express middleware
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── types/         # TypeScript types
│   │   └── utils/         # Utility functions
│   ├── prisma/            # Database schema and migrations
│   └── package.json
├── package.json            # Root workspace config
└── README.md
```

## 🔧 Available Scripts

### Root Level
- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both frontend and backend for production
- `pnpm test` - Run tests for both frontend and backend
- `pnpm lint` - Run linting for both frontend and backend
- `pnpm typecheck` - Run TypeScript type checking

### Database
- `pnpm seed` - Populate database with sample data
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes to database
- `pnpm db:studio` - Open Prisma Studio

## 🌍 Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Database
DATABASE_URL="file:./dev.db"

# Server
NODE_ENV="development"
PORT=3001
JWT_SECRET="your-secret-key-here"

# Client Origin (for CORS)
CLIENT_ORIGIN="http://localhost:5173"

# Production Database (when deploying)
# DATABASE_URL="postgresql://user:password@host:port/database"
```

## 🧪 Testing

### Frontend Tests
```bash
cd client
pnpm test
```

### Backend Tests
```bash
cd server
pnpm test
```

### Run All Tests
```bash
pnpm test
```

## 🚀 Deployment

### Frontend (Vercel)
1. Connect your GitHub repository to Vercel
2. Set build command: `pnpm build`
3. Set output directory: `client/dist`
4. Deploy!

### Backend (Render/Fly.io/Railway)
1. Set environment variables
2. Set build command: `pnpm build`
3. Set start command: `pnpm start`
4. Deploy!

### Docker (Local)
```bash
docker-compose up -d
```

## 📊 BMI Categories

Based on CDC standards:
- **Underweight**: < 18.5
- **Healthy Weight**: 18.5 - 24.9
- **Overweight**: 25.0 - 29.9
- **Obesity Class 1**: 30.0 - 34.9
- **Obesity Class 2**: 35.0 - 39.9
- **Obesity Class 3**: ≥ 40.0

## ⚠️ Medical Disclaimer

This application provides general fitness guidance and BMI screening only. BMI is a screening tool and does not account for body composition. Always consult healthcare professionals for personalized medical advice.

## 📚 References

- [CDC BMI Guidelines](https://www.cdc.gov/healthyweight/assessing/bmi/)
- [Dietary Guidelines for Americans](https://www.dietaryguidelines.gov/)
- [Physical Activity Guidelines](https://health.gov/our-work/national-health-initiatives/physical-activity-guidelines)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details


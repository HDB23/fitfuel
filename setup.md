# FitFuel Setup Guide

Follow these steps to get your FitFuel app running locally:

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install pnpm if you don't have it
npm install -g pnpm

# Install all dependencies
pnpm install
```

### 2. Set Up Environment
```bash
# Copy environment file
cp env.example .env

# Edit .env with your configuration (optional for development)
# The default values should work for local development
```

### 3. Set Up Database
```bash
# Generate Prisma client
pnpm db:generate

# Push database schema (creates SQLite database)
pnpm db:push

# Seed database with plan templates
pnpm seed
```

### 4. Start Development Servers
```bash
# Start both frontend and backend
pnpm dev
```

### 5. Open Your Browser
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Database Studio**: http://localhost:5555 (optional)

## 🔧 Available Commands

### Development
- `pnpm dev` - Start both frontend and backend
- `pnpm build` - Build for production
- `pnpm test` - Run all tests

### Database
- `pnpm seed` - Populate database with sample data
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:push` - Push schema changes
- `pnpm db:studio` - Open Prisma Studio

### Individual Services
- `pnpm --filter client dev` - Start only frontend
- `pnpm --filter server dev` - Start only backend

## 📁 Project Structure

```
fitfuel/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts
│   │   ├── utils/         # Utility functions
│   │   └── ...
│   ├── public/            # Static assets
│   └── package.json
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── scripts/       # Database scripts
│   │   └── ...
│   ├── prisma/            # Database schema
│   └── package.json
├── package.json            # Root workspace
└── README.md
```

## 🌟 Features Ready to Use

✅ **BMI Calculator** - Real-time calculation with CDC standards
✅ **Personalized Plans** - Diet and workout recommendations
✅ **Modern UI** - Responsive design with Tailwind CSS
✅ **Dark Mode** - Toggle between light and dark themes
✅ **Form Validation** - Client and server-side validation
✅ **Database** - SQLite with Prisma ORM
✅ **API Endpoints** - RESTful backend ready

## 🚨 Troubleshooting

### Port Already in Use
If you get port conflicts:
- Frontend: Change port in `client/vite.config.ts`
- Backend: Change `PORT` in `.env` file

### Database Issues
```bash
# Reset database
pnpm db:reset

# Regenerate Prisma client
pnpm db:generate
pnpm db:push
pnpm seed
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules
pnpm install
```

## 🔒 Security Notes

- The app includes rate limiting and security headers
- Input validation on both client and server
- CORS configured for development
- JWT authentication scaffold ready

## 📱 Testing the App

1. Fill out the BMI form with your details
2. See real-time BMI calculation
3. Submit to get personalized plans
4. View diet and workout recommendations
5. Try the dark mode toggle
6. Test responsive design on different screen sizes

## 🚀 Next Steps

- Customize the plan templates in `server/src/scripts/seed.ts`
- Add authentication with JWT
- Deploy to Vercel (frontend) and Render/Railway (backend)
- Add more features like progress tracking

## 📞 Support

If you encounter issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure database is properly seeded
4. Check that ports are available

Happy coding! 🎉

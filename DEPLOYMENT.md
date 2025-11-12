# Deployment Guide for FitFuel

Your code has been successfully pushed to GitHub: **https://github.com/HDB23/fitfuel**

## 🚀 Deploy to Vercel

## ⚠️ IMPORTANT: Database Setup Required

**SQLite will NOT work on Vercel serverless functions** (read-only filesystem). You **MUST** use PostgreSQL for production.

Before deploying the backend, set up a PostgreSQL database (see Database Setup section below).

### Option 1: Deploy Frontend and Backend Separately (Recommended)

#### Step 1: Deploy Frontend (Client)

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click **"Add New Project"**
3. Import your repository: `HDB23/fitfuel`
4. Configure the project:
   - **Project Name**: `fitfuel-client` (or your choice)
   - **Root Directory**: `client`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `pnpm install && pnpm build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

5. **Environment Variables** (Add these):
   ```
   VITE_API_BASE_URL=https://your-backend-url.vercel.app
   ```
   (You'll update this after deploying the backend)

6. Click **"Deploy"**

7. **Note your frontend URL** (e.g., `https://fitfuel-client.vercel.app`)

#### Step 2: Deploy Backend (Server)

1. In Vercel Dashboard, click **"Add New Project"** again
2. Import the same repository: `HDB23/fitfuel`
3. Configure the project:
   - **Project Name**: `fitfuel-server` (or your choice)
   - **Root Directory**: `server`
   - **Framework Preset**: Other
   - **Build Command**: `pnpm install && pnpm db:generate && pnpm build`
   - **Output Directory**: Leave empty (not needed for Node.js)
   - **Install Command**: `pnpm install`

4. **Environment Variables** (Add these):
   ```
   DATABASE_URL=your-postgresql-connection-string
   NODE_ENV=production
   PORT=3001
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   CLIENT_ORIGIN=https://your-frontend-url.vercel.app
   ```

5. Click **"Deploy"**

6. **Note your backend URL** (e.g., `https://fitfuel-server.vercel.app`)

#### Step 3: Update Environment Variables

1. Go back to your **Frontend project** in Vercel
2. Go to **Settings** → **Environment Variables**
3. Update `VITE_API_BASE_URL` to your backend URL:
   ```
   VITE_API_BASE_URL=https://fitfuel-server.vercel.app
   ```
4. **Redeploy** the frontend (go to Deployments → click the three dots → Redeploy)

### Option 2: Deploy as Monorepo (Advanced)

If you want to deploy both in one project, you can use Vercel's monorepo support, but separate deployments are recommended for better control.

## 🗄️ Database Setup

For production, you need a PostgreSQL database. Here are free options:

### Option 1: Vercel Postgres (Easiest)

1. In your Vercel project dashboard, go to **Storage** tab
2. Click **"Create Database"** → Select **Postgres**
3. Copy the connection string
4. Add it as `DATABASE_URL` in your backend environment variables

### Option 2: Supabase (Free Tier)

1. Go to [Supabase](https://supabase.com)
2. Create a new project
3. Go to **Settings** → **Database**
4. Copy the connection string (URI format)
5. Add it as `DATABASE_URL` in your backend environment variables

### Option 3: Railway (Free Tier)

1. Go to [Railway](https://railway.app)
2. Create a new project → Add PostgreSQL
3. Copy the connection string
4. Add it as `DATABASE_URL` in your backend environment variables

### After Setting Up Database

1. Update your backend environment variable `DATABASE_URL` with the PostgreSQL connection string
2. Redeploy your backend
3. The Prisma migrations will run automatically on deployment

## 📝 Environment Variables Summary

### Frontend (Client) Environment Variables:
```
VITE_API_BASE_URL=https://your-backend-url.vercel.app
```

### Backend (Server) Environment Variables:
```
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=production
PORT=3001
JWT_SECRET=your-super-secret-jwt-key-change-in-production
CLIENT_ORIGIN=https://your-frontend-url.vercel.app
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## 🔄 Updating Your Deployment

After making changes to your code:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will automatically redeploy your projects when you push to the main branch.

## 🧪 Testing Your Deployment

1. **Frontend**: Visit your frontend URL (e.g., `https://fitfuel-client.vercel.app`)
2. **Backend Health Check**: Visit `https://your-backend-url.vercel.app/api/health`
3. Test the BMI calculator and other features

## 🐛 Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Ensure all environment variables are set
- Verify `pnpm` is being used (Vercel should auto-detect)

### API Calls Fail
- Check CORS settings in backend (`CLIENT_ORIGIN` must match frontend URL)
- Verify `VITE_API_BASE_URL` is set correctly in frontend
- Check browser console for CORS errors

### Database Connection Issues
- Verify `DATABASE_URL` is correct
- Ensure database is accessible from Vercel's IPs
- Check Prisma schema is compatible with PostgreSQL

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)
- [Prisma Deployment Guide](https://www.prisma.io/docs/guides/deployment)

---

**Your Repository**: https://github.com/HDB23/fitfuel

Happy deploying! 🚀


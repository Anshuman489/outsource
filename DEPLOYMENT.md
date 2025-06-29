# Farm Machinery Allocation System - Deployment Guide

## Render Deployment Instructions

### 1. Push to GitHub
```bash
git add .
git commit -m "Deploy configuration for Render"
git push origin main
```

### 2. Deploy Backend on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `farm-machinery-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Plan**: Free

5. Add Environment Variables:
   - `NODE_ENV` = `production`
   - `MONGO_URI` = `mongodb+srv://anshuman007:6zriKK1rxrsRBYMl@backenddb.gfekoid.mongodb.net/reachingroots`
   - `GOOGLE_CSE_KEY` = `AIzaSyDai9zr1ifwn8eM_tuvwMc9fMJ3tTz82nE`
   - `GOOGLE_CSE_CX` = `4386fd74fc1a54c79`

### 3. Deploy Frontend on Render

1. Click "New +" → "Static Site"
2. Connect the same GitHub repository
3. Configure:
   - **Name**: `farm-machinery-frontend`
   - **Build Command**: `cd frontend && npm install && npm run build`
   - **Publish Directory**: `frontend/dist`

### 4. Update Frontend API URL

After backend is deployed, update the frontend API configuration:
- Copy the backend URL from Render (e.g., `https://farm-machinery-backend.onrender.com`)
- Update `frontend/src/api/axiosConfig.js` with the production URL

### 5. Seed Database

After deployment, seed the database by making a POST request to:
```
https://your-backend-url.onrender.com/api/products/seed
```

## Local Development

```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

## Environment Variables

### Backend (.env)
```
MONGO_URI=your_mongodb_connection_string
GOOGLE_CSE_KEY=your_google_cse_key
GOOGLE_CSE_CX=your_google_cse_cx
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

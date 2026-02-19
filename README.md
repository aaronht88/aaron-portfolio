# Aaron Choi Portfolio

A React + Tailwind CSS portfolio website.

## Deployment to Zeabur

### Option 1: GitHub + Zeabur Dashboard (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aaron-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Zeabur:**
   - Go to [zeabur.com](https://zeabur.com)
   - Create a new project
   - Select "Deploy from GitHub"
   - Connect your repository
   - Zeabur will auto-detect it's a Node.js project

### Option 2: Zeabur CLI

1. Install Zeabur CLI:
   ```bash
   npm i -g zeabur
   ```

2. Login and deploy:
   ```bash
   zeabur login
   zeabur deploy
   ```

### Option 3: Direct Upload

1. Zip the project folder (excluding node_modules)
2. Upload to Zeabur dashboard

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

- `src/App.jsx` - Main React component
- `src/main.jsx` - Entry point
- `src/index.css` - Tailwind CSS imports
- `index.html` - HTML template
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind configuration
- `zeabur.json` - Zeabur deployment config

## Features

- Responsive design
- Dark theme with gold accents
- YouTube video integration
- Social media embeds
- Smooth scrolling navigation
- Mobile-friendly menu

## Technologies

- React 18
- Tailwind CSS
- Vite
- Lucide React Icons

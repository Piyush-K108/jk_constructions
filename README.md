# JK Construction - Modern Construction Company Website

A modern, responsive construction company website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Beautiful animations with Framer Motion
- 📱 Mobile-first approach
- 🏠 Complete pages: Home, About, Projects, Contact
- 💬 Integrated chatbot widget
- 📋 Contact form with validation
- 🖼️ Dynamic project gallery with filters
- ⚡ Fast performance with Vite
- 🎯 SEO-friendly routing

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jk_constructions
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 🌐 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. Install Vercel CLI globally:
```bash
npm install -g vercel
```

2. Deploy to Vercel:
```bash
vercel
```

3. Follow the prompts to link your project

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub, GitLab, or Bitbucket

2. Go to [Vercel Dashboard](https://vercel.com/dashboard)

3. Click "Add New Project"

4. Import your Git repository

5. Configure project settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

6. Click "Deploy"

Your site will be live in minutes! 🎉

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=<your-repo-url>)

## 📁 Project Structure

```
jk_constructions/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   └── ChatbotWidget.jsx
│   ├── pages/          # Page components
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   └── Contact/
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind configuration
├── vercel.json         # Vercel configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Company Information

1. **Contact Details**: Edit `src/components/Footer.jsx` and `src/pages/Contact/index.jsx`
2. **Company Name**: Update throughout the codebase
3. **Chatbot**: Replace the chatbot iframe URL in `src/components/ChatbotWidget.jsx`

### Add Your Projects

Edit `src/pages/Projects/index.jsx` and update the `projects` array with your actual projects.

### Styling

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Inline with Tailwind utility classes

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `eslint.config.js` - ESLint configuration
- `vercel.json` - Vercel deployment configuration

## 🌟 Features by Page

### Home Page
- Hero section with CTA
- Awards showcase
- About section preview
- Services overview
- Featured projects
- Client testimonials

### About Page
- Company story
- Mission & Vision
- Statistics
- Why choose us
- Call-to-action

### Projects Page
- Project gallery
- Category filters (All, Residential, Commercial, Industrial)
- Project details with images
- Stats showcase

### Contact Page
- Contact form with validation
- Company information
- Google Maps integration
- Emergency contact section

## 🐛 Known Issues

- None currently! 🎉

## 🔒 Security

- Dependencies audited regularly
- No sensitive data in frontend code
- Form validation implemented

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 👥 Contact

For support or inquiries:
- **Email**: info@jkconstruction.com
- **Phone**: +91 6265667476
- **Location**: Indore, Madhya Pradesh, India

---

**Built with ❤️ by JK Construction**

## 🚀 Quick Deployment Checklist

Before deploying to Vercel, ensure:

- [x] All dependencies installed
- [x] Build completes successfully (`npm run build`)
- [x] No console errors in production build
- [x] All images and assets loading correctly
- [x] Responsive design tested on mobile devices
- [x] Contact form working properly
- [x] All links functioning correctly
- [x] vercel.json configured for proper routing
- [x] Environment variables set (if any)

Your project is now **Vercel-ready**! 🎉

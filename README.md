# Derek's Portfolio 2025

A modern, interactive personal portfolio showcasing my skills, projects, and experience as a Developer & Research Engineer II.

## ✨ Features

- **Interactive Trading Card Design** - Unique gaming-inspired About section with parallax effects
- **Typing Animation** - Dynamic GitHub section with continuous typing loop
- **Glassmorphism UI** - Modern design with glass cards and subtle animations
- **Responsive Design** - Optimized for all devices and screen sizes
- **CV Download** - Direct download link for my resume
- **Smooth Animations** - Engaging transitions and hover effects
- **Notion-inspired Theme** - Clean, minimal aesthetic

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Animations:** CSS animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jdanas/derek-ptfl2025.git
   cd derek-ptfl2025
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # Trading card-style about section
│   ├── Contact.tsx        # Contact information
│   ├── Footer.tsx         # Site footer
│   ├── Github.tsx         # Animated GitHub section
│   ├── Hero.tsx           # Landing section with CV download
│   ├── Navbar.tsx         # Navigation component
│   ├── Projects.tsx       # Portfolio projects showcase
│   ├── Skills.tsx         # Skills and technologies
│   └── ui/               # Reusable UI components (shadcn/ui)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── pages/                # Page components
```

## 🎨 Customization

### Updating Personal Information

- **Hero Section:** Edit `src/components/Hero.tsx`
- **About Section:** Modify `src/components/About.tsx`
- **Skills:** Update `src/components/Skills.tsx`
- **Projects:** Add your projects in `src/components/Projects.tsx`

### Styling

- **Theme Colors:** Modify `tailwind.config.ts`
- **Global Styles:** Edit `src/index.css`
- **Component Styles:** Individual component files

### CV/Resume

- Replace `public/cv.pdf` with your own resume
- Update the download filename in `src/components/Hero.tsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy Options

- **Netlify:** Connect your GitHub repo for automatic deployments
- **Vercel:** Import project and deploy with zero configuration
- **GitHub Pages:** Use GitHub Actions for automated deployment

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## ⚡ Performance Features

- **Vite HMR:** Fast development with hot module replacement
- **Tree Shaking:** Optimized bundle size
- **Lazy Loading:** Components loaded on demand
- **Optimized Images:** WebP format with fallbacks

## 🤝 Contributing

This is a personal portfolio, but if you'd like to suggest improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email:** [your.email@example.com](mailto:your.email@example.com)
- **GitHub:** [@jdanas](https://github.com/jdanas)
- **LinkedIn:** [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

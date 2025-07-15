# Portfolio Website

A modern, responsive personal portfolio website built for Computer Science students and aspiring software engineers. Features a clean dark mode design with green accents, showcasing skills, projects, experience, and education.

## ✨ Features

- **🌙 Dark Mode Design** - Professional dark theme with green accent colors
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎯 Interactive Navigation** - Smooth scrolling with active link highlighting
- **💼 Project Showcase** - Filterable project grid with category-based filtering
- **📊 Skills Display** - Organized skill categories with hover effects
- **📄 Contact Form** - Functional contact form with validation
- **⚡ Fast Performance** - Built with Vite for lightning-fast loading
- **♿ Accessible** - WCAG compliant with proper focus states
- **🎨 Smooth Animations** - Subtle animations and transitions

## 🛠️ Built With

- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Modern CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)** - CSS Grid, Flexbox, Custom Properties
- **[Font Awesome](https://fontawesome.com/)** - Icon library
- **[Google Fonts](https://fonts.google.com/)** - Inter & JetBrains Mono fonts

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📝 Customization Guide

### 1. Personal Information

Replace all placeholder content in `index.html`:

- `[Your Full Name]` - Your actual name
- `[Your Initials]` - Your initials for the logo
- `[Your Email]` - Your email address
- `[Your LinkedIn Profile URL]` - Your LinkedIn profile
- `[Your GitHub Profile URL]` - Your GitHub profile

### 2. Projects

Edit the `projects` array in `src/main.ts` to add your own projects:

```typescript
const projects: Project[] = [
  {
    id: 'unique-id',
    title: 'Project Title',
    description: 'Project description...',
    image: 'fas fa-icon-name', // Font Awesome icon
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    category: 'web', // 'web', 'mobile', 'ai', 'other'
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://username.github.io/repo' // optional
  }
];
```

### 3. Skills

Update the skills in `index.html` within the skills section:

```html
<div class="skill-tags">
  <span class="skill-tag">Your Skill</span>
  <!-- Add more skills -->
</div>
```

### 4. Experience & Education

Modify the timeline items in the experience section and education details to reflect your actual background.

### 5. Styling

Customize colors in `src/style.css` by modifying the CSS custom properties:

```css
:root {
  --accent-primary: #00ff88; /* Primary green */
  --accent-secondary: #00cc6a; /* Secondary green */
  /* Modify other colors as needed */
}
```

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── portfolio-icon.svg    # Custom favicon
│   └── vite.svg
├── src/
│   ├── main.ts              # TypeScript functionality
│   └── style.css            # All styles
├── index.html               # Main HTML structure
├── package.json
├── tsconfig.json
└── README.md
```

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
# If using gh-pages package
npm install -g gh-pages
gh-pages -d dist
```

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite configuration

## 🎨 Design System

### Colors

- **Primary Background**: `#0a0a0a`
- **Secondary Background**: `#111111`
- **Card Background**: `#1e1e1e`
- **Primary Text**: `#ffffff`
- **Secondary Text**: `#a3a3a3`
- **Accent Green**: `#00ff88`
- **Accent Green Secondary**: `#00cc6a`

### Typography

- **Primary Font**: Inter (400, 500, 600, 700)
- **Monospace Font**: JetBrains Mono (400, 500)

### Spacing

- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)
- **3xl**: 4rem (64px)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Tips for Success

1. **Keep It Updated**: Regularly update your projects and skills
2. **Use Real Projects**: Replace sample projects with your actual work
3. **Optimize Images**: Compress any images you add for better performance
4. **Test Thoroughly**: Check responsiveness on various devices
5. **SEO Optimization**: Update meta tags with your actual information
6. **Performance**: Keep the bundle size small for fast loading

## 🙋‍♂️ Support

If you have any questions or need help customizing the portfolio, feel free to:

- Open an issue on GitHub
- Reach out via the contact form on the website
- Connect with me on LinkedIn

---

**Happy coding!** 🚀

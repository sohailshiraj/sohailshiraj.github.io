# Portfolio Website Template

A modern, responsive portfolio website template built with Next.js 15, TypeScript, and Tailwind CSS. This template is designed to be easily customizable and can be used by anyone to showcase their portfolio, blog, and professional information.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Content Management**: Dynamic content from JSON files and MDX blog posts
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark/Light Theme**: Built-in theme switching with next-themes
- **Blog System**: MDX-powered blog with syntax highlighting
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Animations**: Smooth animations with Framer Motion
- **Type Safety**: Full TypeScript support throughout

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts, JSON for structured data
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
├── lib/                   # Utility functions
└── content/              # Content files
    ├── about/            # About page content
    ├── blog/             # Blog posts (MDX)
    ├── experience/        # Work experience
    ├── education/         # Education history
    └── projects/          # Project portfolio
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with required fields:
```yaml
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2024-01-15"
author: "Your Name"
tags: ["React", "Next.js"]
featured: false
readTime: "5 min read"
---
```

### Updating Personal Information

Edit the JSON files in the `content/` directory:
- `content/about/index.json` - Personal information
- `content/experience/index.json` - Work experience
- `content/education/index.json` - Education history
- `content/projects/index.json` - Project portfolio

### Customizing the Theme

The website uses CSS custom properties for theming. Edit `src/app/globals.css` to customize colors and styling.

## 🎨 Customization

### Colors and Branding

1. Update the color scheme in `tailwind.config.ts`
2. Modify the CSS custom properties in `globals.css`
3. Update the logo and favicon in `public/`

### Content Structure

The website is designed to be easily customizable:
- All content is stored in JSON/MDX files
- Components are modular and reusable
- Styling is consistent with Tailwind CSS

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables if needed
4. Deploy automatically

### Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourusername](https://linkedin.com/in/yourusername)
- **GitHub**: [github.com/yourusername](https://github.com/yourusername)

---

Built with ❤️ using Next.js and Tailwind CSS

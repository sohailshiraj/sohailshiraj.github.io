# Sohail Shiraj — Portfolio Website

A personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. This repository powers a static-exported portfolio site with an MDX blog, project showcase, and configurable JSON-driven content.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Static Export Ready**: Uses `output: 'export'` for a fully static site
- **Content Management**: JSON data files and MDX-based blog posts
- **Responsive Design**: Mobile-first layout with performant styles
- **Theme Support**: `next-themes` for light/dark mode toggling
- **SEO Friendly**: `manifest.webmanifest`, `sitemap.xml`, and `robots.txt` support
- **Animations**: Smooth motion with Framer Motion
- **Type Safety**: Full TypeScript support across the app

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX for blog posts, JSON for structured content
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: GitHub Pages / Vercel / Any static host

## 📁 Project Structure

```
content/                 # JSON and MDX content files
src/
├── app/                 # Next.js App Router pages and routes
│   ├── blog/            # Blog landing page
│   ├── layout.tsx       # Root layout
│   ├── manifest.ts      # Web manifest route
│   ├── projects/        # Projects page
│   ├── robots.ts        # robots.txt route
│   ├── sitemap.ts       # sitemap.xml route
│   └── page.tsx         # Home page
├── components/          # Reusable UI components
├── lib/                 # Utility functions and content helpers
└── middleware.ts        # Optional request middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sohailshiraj/sohailshiraj.github.git
cd sohailshiraj.github
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000).

## 📝 Content Management

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter with required fields:
```yaml
---
title: "Your Post Title"
excerpt: "Brief description"
date: "2025-01-15"
author: "Sohail Shiraj"
tags: ["React", "Next.js"]
featured: false
readTime: "5 min read"
---
```

### Updating Personal Content

Edit the JSON files in the `content/` directory:
- `content/about/index.json` — Personal profile data
- `content/experience/index.json` — Work history
- `content/education/index.json` — Education history
- `content/projects/index.json` — Project portfolio

### Theme and Styling

Customize the theme in `src/app/globals.css` and update Tailwind settings in `tailwind.config.ts`.

## 🎨 Customization

### Colors and Branding

1. Update the color palette in `tailwind.config.ts`
2. Adjust CSS custom properties in `src/app/globals.css`
3. Replace icons and images in `public/`

### Content Structure

- Content is managed with JSON and MDX files
- UI components are reusable and modular
- Styling follows Tailwind CSS utility classes

## 📦 Deployment

### GitHub Pages

This project is configured for static export and can be deployed to GitHub Pages using the `basePath` set in `next.config.mjs`.

### Vercel

1. Push the code to GitHub
2. Connect the repository to Vercel
3. Deploy automatically

### Other Platforms

Any static host that supports Next.js static output is compatible.

## 🔧 Development

### Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

### Code Quality

- TypeScript for type safety
- ESLint for linting
- Tailwind CSS for styling

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

## 📞 Contact

- **GitHub**: [github.com/sohailshiraj](https://github.com/sohailshiraj)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.


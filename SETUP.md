# Portfolio Website Setup Guide

This guide will help you customize this Next.js 15 portfolio template with your own information.

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Install dependencies**: `npm install`
3. **Start development server**: `npm run dev`
4. **Customize your content** using the guide below
5. **Deploy** to your preferred platform

## 📝 Content Customization

### 1. Personal Information

Edit `content/about/index.json` to update your personal details:

```json
{
  "name": "Your Full Name",
  "title": "Your Job Title",
  "tagline": "Your professional tagline",
  "bio": "Your bio description",
  "image": "/images/profile.jpg",
  "location": "Your City, Country",
  "email": "your.email@example.com",
  "phone": "+1 (555) 123-4567",
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "twitter": "https://twitter.com/yourusername",
    "email": "mailto:your.email@example.com"
  },
  "skills": {
    "frontend": [
      { "name": "React", "level": 90 },
      { "name": "Next.js", "level": 85 }
    ],
    "backend": [
      { "name": "Node.js", "level": 85 },
      { "name": "Python", "level": 75 }
    ],
    "tools": [
      { "name": "Git", "level": 90 },
      { "name": "Docker", "level": 75 }
    ],
    "languages": [
      { "name": "JavaScript", "level": 90 },
      { "name": "TypeScript", "level": 80 }
    ]
  },
  "summary": "Your professional summary",
  "resume": "/resume.pdf"
}
```

**Note**: Skills now include both name and level (0-100) for the animated progress bars. The resume field should point to your PDF file in the public directory.

### 2. Work Experience

Update `content/experience/index.json` with your work history:

```json
[
  {
    "id": "exp-1",
    "company": "Your Company",
    "position": "Your Position",
    "location": "City, State",
    "startDate": "2023-01",
    "endDate": "present",
    "current": true,
    "description": "Brief description of your role",
    "achievements": [
      "Achievement 1",
      "Achievement 2"
    ],
    "technologies": ["React", "Node.js", "TypeScript"]
  }
]
```

### 3. Education

Update `content/education/index.json` with your educational background:

```json
[
  {
    "id": "edu-1",
    "institution": "Your University",
    "degree": "Your Degree",
    "location": "City, State",
    "startDate": "2018-09",
    "endDate": "2022-05",
    "current": false,
    "description": "Description of your studies",
    "achievements": [
      "Academic achievement 1",
      "Academic achievement 2"
    ],
    "relevant_courses": [
      "Course 1",
      "Course 2"
    ]
  }
]
```

### 4. Projects

Update `content/projects/index.json` with your projects:

```json
[
  {
    "id": "proj-1",
    "title": "Your Project Title",
    "description": "Brief project description",
    "longDescription": "Detailed project description",
    "image": "/images/projects/your-project.jpg",
    "technologies": ["React", "Node.js", "TypeScript"],
    "features": [
      "Feature 1",
      "Feature 2"
    ],
    "github": "https://github.com/yourusername/your-project",
    "demo": "https://your-demo.vercel.app",
    "status": "completed",
    "startDate": "2023-01",
    "endDate": "2023-06",
    "category": "fullstack"
  }
]
```

### 5. Blog Posts

Add your blog posts in `content/blog/` as `.mdx` files:

```markdown
---
title: "Your Blog Post Title"
excerpt: "Brief description of your post"
date: "2024-01-15"
author: "Your Name"
tags: ["React", "Next.js"]
featured: false
readTime: "5 min read"
---

# Your Blog Post Content

Write your blog post content here using Markdown.
```

## 🎨 Visual Customization

### 1. Colors and Theme

Edit `src/app/globals.css` to customize the color scheme:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* Add your custom colors */
}
```

### 2. Fonts

Update fonts in `src/app/layout.tsx`:

```tsx
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});
```

### 3. Logo and Favicon

Replace the favicon in `src/app/favicon.ico` and add your logo to the `public/` folder.

## 🔧 Configuration

### 1. Site Metadata

Update `src/app/layout.tsx` with your site information:

```tsx
export const metadata: Metadata = {
  title: {
    default: 'Your Name - Your Title',
    template: '%s | Your Name',
  },
  description: 'Your site description',
  url: 'https://yourwebsite.com',
  // ... other metadata
};
```

### 2. Package Information

Update `package.json`:

```json
{
  "name": "your-portfolio-website",
  "version": "1.0.0",
  // ... other fields
}
```

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Configure environment variables if needed
4. Deploy automatically

### Other Platforms

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Use the Amplify console
- **Railway**: Connect your repository
- **DigitalOcean App Platform**: Deploy from GitHub

## 🖼️ Images

### Required Images and Files

1. **Profile Image**: Add your profile photo as `public/images/profile.jpg`
2. **Project Images**: Add project screenshots to `public/images/projects/`
3. **Resume PDF**: Add your resume as `public/resume.pdf`
4. **Favicon**: Replace `src/app/favicon.ico`

### Image Optimization

- Use WebP format for better performance
- Optimize images before adding them
- Recommended sizes:
  - Profile: 400x400px
  - Project images: 800x600px

## 🚀 Advanced Customization

### 1. Adding New Pages

1. Create a new folder in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/header.tsx`

### 2. Custom Components

Create new components in `src/components/` and import them where needed.

### 3. Styling

- Use Tailwind CSS classes for styling
- Add custom CSS in `globals.css` if needed
- Use CSS variables for consistent theming

## 📚 Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 🆘 Support

If you encounter any issues:

1. Check the [Issues](https://github.com/yourusername/portfolio-website/issues) page
2. Create a new issue with detailed information
3. Check the documentation links above

## 📄 License

This template is open source and available under the MIT License.

---

Happy coding! 🎉

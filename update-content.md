# Content Update Guide

## 🚀 Your Portfolio Website Template is Ready!

Your Next.js portfolio website template is now running at `http://localhost:3000`. Here's how to customize it with your information:

## 📝 Update Your Personal Information

### 1. About Page (`content/about/index.json`)
Update with your real information:
- Name, title, and tagline
- Bio and summary
- Contact details (email, phone, location)
- Social media links
- Skills and technologies

### 2. Work Experience (`content/experience/index.json`)
Add your work history:
- Company names and positions
- Start/end dates
- Job descriptions and achievements
- Technologies used

### 3. Education (`content/education/index.json`)
Add your educational background:
- Institution names and degrees
- Graduation dates
- Achievements and relevant courses

### 4. Projects (`content/projects/index.json`)
Showcase your work:
- Project titles and descriptions
- Technologies used
- GitHub and demo links
- Project images (add to `public/images/projects/`)

### 5. Blog Posts (`content/blog/`)
Create new blog posts:
- Copy the existing `.mdx` files as templates
- Update the frontmatter (title, excerpt, date, tags)
- Write your content in Markdown
- Add images to `public/images/blog/`

## 🎨 Customization Options

### Colors and Branding
- Edit `src/app/globals.css` for color schemes
- Update `tailwind.config.ts` for custom colors
- Replace logo in header component

### Content Structure
- All content is in JSON/MDX files
- No code changes needed for content updates
- Easy to maintain and update

## 📸 Adding Images

1. **Profile Photo**: Add to `public/images/profile.jpg`
2. **Project Images**: Add to `public/images/projects/`
3. **Blog Images**: Add to `public/images/blog/`

## 🚀 Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial personal website"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Configure environment variables if needed
   - Deploy automatically

## 🔧 Development

- **Start dev server**: `npm run dev`
- **Build for production**: `npm run build`
- **Run linting**: `npm run lint`

## 📱 Features Included

✅ Responsive design for all devices
✅ Dark/light theme toggle
✅ Smooth animations with Framer Motion
✅ SEO optimized
✅ Fast loading with Next.js
✅ Content management system
✅ Blog with MDX support
✅ Contact form
✅ Project portfolio
✅ Skills showcase

## 🎯 Next Steps

1. Update all JSON files with your real information
2. Add your profile photo and project images
3. Write your first blog post
4. Customize colors and branding
5. Deploy to Vercel

Your website template is fully functional and ready to be customized for your portfolio!

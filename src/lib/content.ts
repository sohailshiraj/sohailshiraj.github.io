import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const contentDirectory = path.join(process.cwd(), 'content');

// Types
export interface Skill {
  name: string;
  level: number;
}

export interface AboutData {
  name: string;
  title: string;
  subtitle?: string;
  tagline: string;
  bio: string;
  about?: string[];
  image: string;
  location: string;
  email: string;
  phone: string;
  resume?: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    email: string;
  };
  nav?: string[];
  skills: {
    frontend: Skill[];
    backend: Skill[];
    tools: Skill[];
    languages: Skill[];
  };
  summary: string;
}

export interface ExternalBlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  url: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  projectLinks?: { label: string; url: string }[];
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  summary?: string;
  achievements?: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  achievements: string[];
  relevant_courses: string[];
}

export interface Project {
  id: string;
  title: string;
  context?: string;
  builtAt?: string | null;
  description: string;
  longDescription?: string;
  metrics?: string | null;
  featured?: boolean;
  image?: string;
  technologies: string[];
  features?: string[];
  link: string | null;
  linkAlias?: string | null;
  demo: string | null;
  status: 'completed' | 'in-progress' | 'planned';
  startDate: string;
  endDate: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'library';
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
  featured: boolean;
  readTime: string;
  content: string;
}

// Content loading functions
export function getAboutData(): AboutData {
  const filePath = path.join(contentDirectory, 'about', 'index.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getExperience(): Experience[] {
  const filePath = path.join(contentDirectory, 'experience', 'index.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getEducation(): Education[] {
  const filePath = path.join(contentDirectory, 'education', 'index.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getProjects(): Project[] {
  const filePath = path.join(contentDirectory, 'projects', 'index.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export function getFeaturedProjects(): Project[] {
  const projects = getProjects();
  return projects.filter(project => project.featured);
}

export function getExternalBlogPosts(): ExternalBlogPost[] {
  const filePath = path.join(contentDirectory, 'blog', 'posts.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts: ExternalBlogPost[] = JSON.parse(fileContents);
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedExternalBlogPosts(): ExternalBlogPost[] {
  return getExternalBlogPosts().filter(p => p.featured).slice(0, 3);
}

export function getBlogPosts(): BlogPost[] {
  const blogDirectory = path.join(contentDirectory, 'blog');
  const fileNames = fs.readdirSync(blogDirectory);

  const posts = fileNames
    .filter(name => name.endsWith('.mdx'))
    .map(name => {
      const slug = name.replace('.mdx', '');
      const filePath = path.join(blogDirectory, name);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        author: data.author,
        tags: data.tags,
        featured: data.featured || false,
        readTime: data.readTime || readingTime(content).text,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}

export function getFeaturedBlogPosts(): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.featured).slice(0, 3);
}

export function getBlogTags(): string[] {
  const posts = getBlogPosts();
  const allTags = posts.flatMap(post => post.tags);
  return [...new Set(allTags)].sort();
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter(post => post.tags.includes(tag));
}

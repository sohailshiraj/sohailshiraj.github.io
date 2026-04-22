'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { AboutData, Experience, Project, ExternalBlogPost } from '@/lib/content';

// ─── Icons ───────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function LinkChainIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
  );
}

// Arrow that animates on both group/link hover AND parent group hover
function ArrowUpRight({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`inline-block h-4 w-4 shrink-0 transition-transform duration-150
        group-hover:-translate-y-1 group-hover:translate-x-1
        group-hover/link:-translate-y-1 group-hover/link:translate-x-1
        motion-reduce:transition-none ${className}`}
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06L5.404 4.343a.75.75 0 00-1.06 1.06l1.06 1.061z" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path fillRule="evenodd" d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z" clipRule="evenodd" />
    </svg>
  );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function formatDate(d: string) {
  if (d === 'present') return 'Present';
  const [year, month] = d.split('-');
  return `${MONTHS[parseInt(month) - 1]} ${year}`;
}
function formatDateRange(start: string, end: string) {
  if(end === null) {
    return formatDate(start);
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}

// ─── Section heading ─────────────────────────────────────────────────────────

function SectionHeading({ label }: { label: string }) {
  return (
    <>
      <h2 className="sr-only">{label}</h2>
      <div className="sticky top-0 z-30 -mx-6 mb-4 w-screen bg-background px-6 py-4 shadow-sm shadow-border/40 md:-mx-12 md:px-12 lg:hidden" aria-hidden="true">
        <span className="text-sm font-bold uppercase tracking-widest text-foreground">{label}</span>
      </div>
    </>
  );
}

// ─── Theme toggle ─────────────────────────────────────────────────────────────

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = resolvedTheme === 'dark';
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}

// ─── Skills grid ─────────────────────────────────────────────────────────────

const SKILL_COLUMNS = [
  {
    label: 'Languages',
    items: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'Bash'],
  },
  {
    label: 'Frameworks',
    items: ['React', 'Next.js', 'Angular', 'Node.js', 'Express', 'Flask', 'React Native', 'Ionic'],
  },
  {
    label: 'Data & Cloud',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'GCP', 'AWS', 'Docker', 'Kubernetes'],
  },
  {
    label: 'Tooling',
    items: ['Git', 'Jest', 'Cypress', 'CI/CD', 'Contentful', 'Builder.io'],
  },
];

function SkillsGrid() {
  return (
    <div className="divide-y divide-border/60">
      {SKILL_COLUMNS.map(col => (
        <div key={col.label} className="flex items-start gap-6 py-4 first:pt-0 last:pb-0">
          <p className="w-24 shrink-0 pt-0.5 text-xs font-bold uppercase tracking-widest text-primary">
            {col.label}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {col.items.map(item => (
              <li key={item}>
                <span className="inline-flex items-center rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/75">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// ─── Contact section ─────────────────────────────────────────────────────────

function ContactSection({ email, emailHref }: { email: string; emailHref: string }) {
  return (
    <div className="rounded-2xl border border-border bg-muted/40 px-8 py-12 text-center mt-1">
      {/* Paper plane icon */}
      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-primary shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      </div>
      <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">
        Get In Touch
      </h3>
      <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
        Whether you have a project in mind, a question, or just want to say hello - I&apos;d love to hear from you.
      </p>
      <a
        href={emailHref}
        className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md hover:shadow-primary/20"
      >
        Say Hello
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </a>
      <p className="mt-4 text-xs text-muted-foreground/60">{email}</p>
    </div>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

interface HomePageProps {
  about: AboutData;
  experience: Experience[];
  projects: Project[];
  blogPosts: ExternalBlogPost[];
}

// ─── Component ───────────────────────────────────────────────────────────────

export function HomePage({ about, experience, projects }: HomePageProps) {
  const [activeSection, setActiveSection] = useState('about');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ids = ['about', 'skills', 'experience', 'projects', 'contact'];

    // On scroll to bottom of the right column, force contact active
    const handleScroll = () => {
      const main = mainRef.current;
      if (!main) return;
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 80) {
        setActiveSection('contact');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const observers: IntersectionObserver[] = [];
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-20% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach(o => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-12">

        {/* ── Left: Sticky sidebar ──────────────────────────────── */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {about.name}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground/80">
              {about.title}
            </h2>
            <p className="mt-4 max-w-sm leading-normal text-muted-foreground">
              {about.subtitle}
            </p>
            {about.resume && (
              <a
                href={about.resume}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-md hover:shadow-primary/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                Download Resume
              </a>
            )}

            <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
              <ul className="w-max">
                {navItems.map(item => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`group flex items-center py-3 ${activeSection === item.id ? 'nav-active' : ''}`}
                    >
                      <span className="nav-indicator" />
                      <span className="nav-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="mt-8 flex items-center gap-5 flex-wrap">
            <ul className="ml-1 flex items-center gap-5" aria-label="Social media">
              {about.social.github && (
                <li>
                  <a href={about.social.github} className="block text-slate-400 hover:text-foreground transition-colors" target="_blank" rel="noreferrer noopener" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                </li>
              )}
              {about.social.linkedin && (
                <li>
                  <a href={about.social.linkedin} className="block text-slate-400 hover:text-foreground transition-colors" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </li>
              )}
              {about.social.email && (
                <li>
                  <a href={about.social.email} className="block text-slate-400 hover:text-foreground transition-colors" aria-label="Email">
                    <MailIcon />
                  </a>
                </li>
              )}
            </ul>
            <ThemeToggle />
          </div>
        </header>

        {/* ── Right: Scrollable content ─────────────────────────── */}
        <main ref={mainRef} id="content" className="pt-24 lg:w-[58%] lg:py-24">

          {/* ABOUT */}
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <SectionHeading label="About" />
            <div className="space-y-4">
              {about.about?.map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
            <SectionHeading label="Skills" />
            <SkillsGrid />
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <SectionHeading label="Experience" />
            <ol className="group/list space-y-12">
              {experience.map(job => (
                <li
                  key={job.id}
                  onClick={(e) => {
                    if (!(e.target as HTMLElement).closest('a') && job.companyUrl) {
                      window.open(job.companyUrl, '_blank', 'noreferrer');
                    }
                  }}
                  className="group relative cursor-pointer transition-all duration-300 lg:group-hover/list:opacity-40 lg:hover:!opacity-100"
                >
                  <div className="card-hover-bg" />
                  <div className="relative z-20 sm:flex sm:gap-8">
                    <header className="mb-2 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:mb-0 sm:w-36 sm:pt-1">
                      {formatDateRange(job.startDate, job.endDate)}
                    </header>
                    <div className="flex-1">
                      <h3 className="font-medium leading-snug">
                        {job.companyUrl ? (
                          <a
                            href={job.companyUrl}
                            className="group/link inline-flex items-baseline gap-1 font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary transition-colors"
                            target="_blank" rel="noreferrer noopener"
                          >
                            <span>{job.position}</span>
                            <span className="text-muted-foreground">·</span>
                            <span className="text-primary">{job.company}</span>
                            <ArrowUpRight className="translate-y-px" />
                          </a>
                        ) : (
                          <span>{job.position} <span className="text-muted-foreground">·</span> <span className="text-primary">{job.company}</span></span>
                        )}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {job.summary ?? job.description}
                      </p>
                      {job.projectLinks && job.projectLinks.length > 0 && (
                        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                          {job.projectLinks.map(link => (
                            <a
                              key={link.url}
                              href={link.url}
                              className="group/link inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                              target="_blank" rel="noreferrer noopener"
                            >
                              <LinkChainIcon />
                              <span className="border-b border-muted-foreground/30 pb-px group-hover/link:border-primary transition-colors">
                                {link.label}
                              </span>
                            </a>
                          ))}
                        </div>
                      )}
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {job.technologies.map(tech => (
                          <li key={tech}><span className="tech-pill">{tech}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            {about.resume && (
              <div className="mt-12">
                <a
                  href={about.resume}
                  className="group/link inline-flex items-center font-semibold leading-tight text-foreground hover:text-primary transition-colors"
                  target="_blank" rel="noreferrer noopener"
                >
                  <span className="border-b border-transparent pb-px transition group-hover/link:border-primary">View Full Resume</span>
                  <ArrowUpRight className="ml-1 translate-y-px" />
                </a>
              </div>
            )}
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <SectionHeading label="Projects" />
            <ol className="group/list space-y-12">
              {projects.map(project => {
                const link = project.demo || project.link;
                return (
                  <li
                    key={project.id}
                    onClick={(e) => {
                      if (!(e.target as HTMLElement).closest('a') && link) {
                        window.open(link, '_blank', 'noreferrer');
                      }
                    }}
                    className="group relative cursor-pointer transition-all duration-300 lg:group-hover/list:opacity-40 lg:hover:!opacity-100"
                  >
                    <div className="card-hover-bg" />
                    <div className="relative z-20 sm:flex sm:gap-8">
                      <header className="mb-2 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:mb-0 sm:w-36 sm:pt-1">
                        {formatDateRange(project.startDate, project.endDate)}
                      </header>
                      <div className="flex-1">
                        <h3 className="font-medium leading-snug">
                          {link ? (
                            <a
                              href={link}
                              className="group/link relative z-30 inline-flex items-baseline gap-1 text-base font-medium text-foreground hover:text-primary transition-colors"
                              target="_blank" rel="noreferrer noopener"
                            >
                              {project.title}
                              <ArrowUpRight className="translate-y-px" />
                            </a>
                          ) : (
                            <span className="text-base font-medium text-foreground">{project.title}</span>
                          )}
                        </h3>
                        {project.context && (
                          <p className="mt-0.5 text-sm text-muted-foreground/70">{project.context}</p>
                        )}
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                        {project.metrics && (
                          <p className="mt-2 text-sm font-medium text-primary">{project.metrics}</p>
                        )}
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map(tech => (
                            <li key={tech}><span className="tech-pill">{tech}</span></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-12">
              <a
                href="/projects"
                className="group/link inline-flex items-center font-semibold leading-tight text-foreground hover:text-primary transition-colors"
              >
                <span className="border-b border-transparent pb-px transition group-hover/link:border-primary">View Full Project Archive</span>
                <ArrowUpRight className="ml-1 translate-y-px" />
              </a>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
            <SectionHeading label="Contact" />
            <ContactSection email={about.email} emailHref={about.social.email} />
            <footer className="mt-12 text-sm text-muted-foreground/50">
              <p>
                Built with{' '}
                <a href="https://nextjs.org" className="font-medium hover:text-primary transition-colors" target="_blank" rel="noreferrer">Next.js</a>
                {' '}&amp;{' '}
                <a href="https://tailwindcss.com" className="font-medium hover:text-primary transition-colors" target="_blank" rel="noreferrer">Tailwind CSS</a>.
                Deployed on{' '}
                <a href="https://pages.github.com" className="font-medium hover:text-primary transition-colors" target="_blank" rel="noreferrer">GitHub Pages</a>.
              </p>
            </footer>
          </section>

        </main>
      </div>
    </div>
  );
}

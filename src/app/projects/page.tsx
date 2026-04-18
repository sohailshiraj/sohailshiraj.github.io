import Link from 'next/link';
import { getAboutData, getProjects } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects',
  description: 'A complete archive of all projects I have worked on.',
};

function ArrowUpRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
    >
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

function getYear(d: string) {
  if (d === 'present') return new Date().getFullYear().toString();
  return d.split('-')[0];
}

export default function ProjectsPage() {
  const about = getAboutData();
  const projects = getProjects();

  const sorted = [...projects].sort((a, b) =>
    parseInt(getYear(b.endDate)) - parseInt(getYear(a.endDate))
  );

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24">
      <Link
        href="/"
        className="group mb-10 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1 motion-reduce:transition-none" aria-hidden="true">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        {about.name}
      </Link>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">All Projects</h1>
      <p className="mb-12 text-muted-foreground">
        A full archive of things I&apos;ve built - professionally and on my own time.
      </p>

      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground w-14">Year</th>
            <th className="py-3 pr-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground">Project</th>
            <th className="hidden py-3 pr-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground md:table-cell whitespace-nowrap">Built at</th>
            <th className="hidden py-3 pr-4 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground lg:table-cell">Built with</th>
            <th className="py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted-foreground w-10">Link</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map(project => {
            const link = project.demo || project.link;
            return (
              <tr
                key={project.id}
                className="group border-b border-border/50 hover:bg-muted/50 transition-colors"
              >
                <td className="py-4 pr-4 align-top text-sm tabular-nums text-muted-foreground">
                  {getYear(project.endDate)}
                </td>

                <td className="py-4 pr-4 align-top font-medium text-foreground leading-snug">
                  {project.title}
                  {/* Tech pills on mobile */}
                  <ul className="mt-2 flex flex-wrap gap-1.5 lg:hidden">
                    {project.technologies.slice(0, 4).map(t => (
                      <li key={t}><span className="tech-pill py-0.5">{t}</span></li>
                    ))}
                    {project.technologies.length > 4 && (
                      <li><span className="tech-pill py-0.5">+{project.technologies.length - 4}</span></li>
                    )}
                  </ul>
                </td>

                <td className="hidden py-4 pr-4 align-top text-sm text-muted-foreground md:table-cell whitespace-nowrap">
                  {project.builtAt ?? ''}
                </td>

                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <ul className="flex flex-wrap gap-1.5">
                    {project.technologies.map(t => (
                      <li key={t}><span className="tech-pill py-0.5">{t}</span></li>
                    ))}
                  </ul>
                </td>

                <td className="py-4 align-top">
                  {link && (
                    <a
                      href={link}
                      className="group/link inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`${project.title} link`}
                    >
                      <span className="text-xs font-medium">
                        {project.demo && link === project.demo
                          ? 'Demo'
                          : project.linkAlias
                          ? project.linkAlias
                          : 'View'}
                      </span>
                      <ArrowUpRightIcon />
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

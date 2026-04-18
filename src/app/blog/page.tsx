import Link from 'next/link';
import { getAboutData, getExternalBlogPosts } from '@/lib/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Writing on software engineering, web development, and open source.',
};

function ArrowUpRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 ml-1 translate-y-px" aria-hidden="true">
      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
  );
}

export default function BlogPage() {
  const about = getAboutData();
  const posts = getExternalBlogPosts();

  return (
    <div className="mx-auto min-h-screen max-w-2xl px-6 py-16 md:px-12 md:py-24">
      {/* Back link */}
      <Link
        href="/"
        className="group mb-10 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true">
          <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
        </svg>
        {about.name}
      </Link>

      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">Blog</h1>
      <p className="mb-12 text-muted-foreground">
        Writing on software engineering, web development, and open source.
      </p>

      <ol className="space-y-10">
        {posts.map(post => {
          const date = new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric', month: 'long', day: 'numeric',
          });
          return (
            <li key={post.id} className="group relative border-b border-border pb-10 last:border-0 last:pb-0">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{date}</p>
              <h2 className="mb-2 text-lg font-semibold leading-snug">
                <a
                  href={post.url}
                  className="group/link inline-flex items-baseline text-foreground hover:text-primary focus-visible:text-primary transition-colors"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {post.title}
                  <ArrowUpRightIcon />
                </a>
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <li key={tag}>
                    <span className="tech-pill">{tag}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

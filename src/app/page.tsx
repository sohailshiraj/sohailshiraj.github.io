import { getAboutData, getExperience, getFeaturedProjects, getFeaturedExternalBlogPosts } from '@/lib/content';
import { HomePage } from '@/components/home-page';

export default function Page() {
  const about = getAboutData();
  const experience = getExperience();
  const projects = getFeaturedProjects();
  const blogPosts = getFeaturedExternalBlogPosts();

  return <HomePage about={about} experience={experience} projects={projects} blogPosts={blogPosts} />;
}

import Service from "./components/Service";
import WorkProcess from "./components/WorkProcess";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import SkillProgress from "./components/(skill)/SkillProgress";
import Portfolio from "./components/(portfolio)/Portfolio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import { client } from "../sanity/lib/client";
import { postsQuery, projectsQuery } from "../sanity/lib/queries";

// ISR: Cache static HTML and revalidate in background every 60 seconds
export const revalidate = 60;

async function getInitialData() {
  try {
    const [sanityPosts, sanityProjects] = await Promise.all([
      client.fetch(postsQuery, {}, { next: { revalidate: 60 } }),
      client.fetch(projectsQuery, {}, { next: { revalidate: 60 } }),
    ]);

    return {
      initialPosts: Array.isArray(sanityPosts) ? sanityPosts : [],
      initialProjects: Array.isArray(sanityProjects) ? sanityProjects : [],
    };
  } catch (err) {
    console.warn("Server fetch of Sanity data failed, falling back to local constants:", err);
    return {
      initialPosts: [],
      initialProjects: [],
    };
  }
}

export default async function Home() {
  const { initialPosts, initialProjects } = await getInitialData();

  return (
    <main>
      <Banner />
      <Service />
      <WorkProcess />
      <AboutMe />
      <Experience />
      <SkillProgress />
      <Portfolio initialProjects={initialProjects} />
      <Testimonials />
      <FAQ />
      <Blog initialPosts={initialPosts} />
      <Contact />
    </main>
  );
}

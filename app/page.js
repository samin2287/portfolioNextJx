import Service from "./components/Service";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import SkillProgress from "./components/(skill)/SkillProgress";
import Portfolio from "./components/(portfolio)/Portfolio";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <main>
      <Banner />
      <Service />
      <AboutMe />
      <SkillProgress />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}

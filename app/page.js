import Service from "./components/Service";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import SkillProgress from "./components/(skill)/SkillProgress";
import Portfolio from "./components/(portfolio)/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Banner />
      <Service />
      <AboutMe />
      <SkillProgress />
      <Portfolio />
      <Contact />
    </main>
  );
}

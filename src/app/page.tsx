import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import SkillsAndEducation from "@components/SkillsAndEducation";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsAndEducation />
      <Projects />
      <Contact />
    </main>
  );
}

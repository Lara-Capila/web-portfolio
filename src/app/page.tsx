import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import SkillsAndEducation from "@components/SkillsAndEducation";
import { WorkExperience } from "@components/WorkExperience";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <About />
      <SkillsAndEducation />
      <Projects />
      <Contact />
    </main>
  );
}

import About from "@components/about-section/About";
import Contact from "@components/contact-section/Contact";
import Hero from "@components/hero-section/Hero";
import Projects from "@components/projects-section/Projects";
import { WorkExperience } from "@components/work-experience-section/WorkExperience";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkExperience />
      <About />
      <Projects />
      <Contact />
      <ToastContainer />
    </main>
  );
}

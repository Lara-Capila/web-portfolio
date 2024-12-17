"use client";

import Title from "@components/ui/Title";
import { useSectionInView } from "../../hooks/useSectionInView";

const Projects = () => {
  const { ref } = useSectionInView("Projetos");

  return (
    <section
      id="projects"
      ref={ref}
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
    >
      <Title>Projetos</Title>

      <div className="w-full sm:max-h-[324px] rounded-[20px] std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700">
        Estou trabalhando para construir bons projeto que realmente mostrem meu
        potencial
      </div>

      {/* TODO: Do projects and remove this */}
      {/* {projects.map((work, index) => (
        <ProjectCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))} */}
    </section>
  );
};

export default Projects;

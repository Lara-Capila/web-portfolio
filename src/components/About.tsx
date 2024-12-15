"use client";

import { Syne } from "next/font/google";
import Link from "next/link";
import { useSectionInView } from "../hooks/useSectionInView";
import AnimatedBody from "./ui/AnimatedBody";
import AnimatedTitle from "./ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

const About = () => {
  const { ref } = useSectionInView("Sobre");

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Potencializando resultados através de interfaces interativas
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Minha paixão está em criar experiências intuitivas que promovem
            interações significativas e impulsionam o crescimento do produto.
            Projetando interfaces de usuário baseadas em Figma propostas pelo
            time de UX/UI ou desenvolvendo aplicações robustas para aumentar a
            produtividade, tenho orgulho de transformar ideias complexas em
            soluções acessíveis e impactantes. Meu objetivo é unir tecnologia e
            satisfação do usuário, garantindo que cada projeto entregue valor
            real.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            Comecei minha jornada no desenvolvimento criando interfaces simples
            e funcionais. Ao longo do tempo, refinei minhas habilidades,
            assumindo desafios cada vez mais complexos e buscando entregar
            soluções responsivas, acessíveis e alinhadas às necessidades do
            usuário.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Cada projeto é uma nova oportunidade de aprender e crescer. Encaro
            cada desafio com curiosidade e determinação, garantindo que o
            produto final seja agradável para os usuários e exatamente o que as
            empresas esperam. Quer saber mais? Aqui está
            {/* <br className="hidden md:block" /> */}
            <Link
              className="underline ml-2"
              href={
                "https://drive.google.com/file/d/1Rd-IB_5pxsGj4RDtHjEggPB392ND29xB/view?usp=sharing"
              }
            >
              meu currículo
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Tecnologias Frontend
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, ContextAPI, Zustand,
              React Query, Git, React Hook Form, Zod, Storybook, React Testing
              Library, Design System.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3, Tailwind CSS, Styled Components, Chakra UI, Framer Motion,
              Material UI, Ant Design, Shadcn UI.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Soft Skills
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Trabalho em equipe, comunicação, resolução de problemas, atenção
              aos detalhes.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

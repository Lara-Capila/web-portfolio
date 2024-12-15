import { NavLinkProps, TabButtons, TabData, Tabs } from "./types";

export const navLinks: NavLinkProps[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Sobre",
    href: "#about",
  },
  {
    title: "Habilidades e Formação",
    href: "#skillsAndEducation",
  },
  {
    title: "Projetos",
    href: "#projects",
  },
  {
    title: "Contato",
    href: "#contact",
  },
];

export const tabButtonsAboutSection: TabButtons[] = [
  {
    label: "Skills",
    id: Tabs.skills,
  },
  {
    label: "Formação",
    id: Tabs.education,
  },
  {
    label: "Certificados",
    id: Tabs.certifications,
  },
];

export const tabDataAboutSection: TabData[] = [
  {
    id: Tabs.skills,
    content: [
      "Javascript",
      "HTML",
      "CSS",
      "React",
      "Next",
      "Typescript",
      "TailwindCSS",
      "GraphQL",
      "Redux",
    ],
  },
  {
    id: Tabs.education,
    content: [
      "Desenvolvimento de Software - Trybe",
      "Análise e Desenvolvimento de Sistemas - Estácio",
    ],
  },
  {
    id: Tabs.certifications,
    content: ["Desenvolvimento Web - Trybe"],
  },
];

export const workExperienceData = [
  {
    jobTitle: "Desenvolvedora Front End",
    company: "EmCash",
    jobType: "Júnior",
    duration: "Fev 2024 - Atual",
    stuffIDid: [
      "Desenvolvimento de plataforma white-label de empréstimos de diversos segmentos, gerando um faturamento de um quarto de bilhão de reais no primeiro ano, utilizando as tecnologias mais recentes como Next, React, Typescript.",
      "Uso de Styled Components, Vite, Jest, React Testing Library e Storybook para criar e documentar componentes do Design System garantindo consistência visual, trazendo agilidade tanto para o time de front-end quanto para o time de QA's.",
      "Implementação de padrões de código baseados no Clean Code trazendo modularidade e manutenabilidade.",
      "Participação ativa em code reviews e apoio técnico a desenvolvedores menos experientes, com foco em boas práticas de desenvolvimento.",
      "Aperfeiçoamento dos componentes do Design System trazendo confiabilidade em relação ao figma e aumento de 30% na agilidade do time em relação a construção de novas telas.",
      "Forte interação com time de back-end, QA, produtos e UX/UI, uso de metodologias ágeis para acompanhamento e alinhamento de demandas.",
    ],
  },
  {
    jobTitle: "Desenvolvedora Front End",
    company: "Way2",
    jobType: "Júnior",
    duration: "Jan 2022 - Dez 2023",
    stuffIDid: [
      "Contribuição no desenvolvimento de melhorias e novos módulos para o PowerHub, plataforma da Way2 otimizando o consumo de energia para grandes consumidores, com base em layouts disponibilizados.",
      "Desenvolvimento e revisão de códigos.",
      "Colaboração com times de Back-End, UX , QA e Produtos.",
    ],
  },
];

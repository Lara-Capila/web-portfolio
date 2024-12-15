import { navLinks } from "./data";

export type SectionName = (typeof navLinks)[number]["title"];

export interface NavLinkProps {
  href: string;
  title: string;
}

export interface ProjectCardProps {
  img: string;
  title: string;
  gitLink?: string;
  liveLink: string;
  about: string;
  stack: string[];
}

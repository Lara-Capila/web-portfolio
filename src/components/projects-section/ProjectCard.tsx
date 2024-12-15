import Image from "next/image";
import Link from "next/link";

import { useInView } from "react-intersection-observer";

import { HugeiconsExternalLink } from "@components/icons/ExternalLink";
import { HugeiconsGithub } from "@components/icons/GithubIcon";
import { ProjectCardProps } from "../../utils/types";
import SkillTag from "./SkillTag";

export const ProjectCard = ({
  title,
  img,
  gitLink,
  liveLink,
  about,
  stack,
}: ProjectCardProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    rootMargin: "-100px 0px",
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`w-full sm:max-h-[324px] rounded-[20px] std-backdrop-blur bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] grid grid-cols-1 items-start lg:grid-cols-12 xl:flex gap-5 xl:gap-10 p-6 duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <Image
        src={img}
        width={420}
        height={700}
        alt="work"
        className="rounded-[10px] w-full lg:col-span-5"
      />
      <div className="flex flex-col gap-4 lg:col-span-7">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold">
            {title}
          </h2>
          <div className="flex gap-3 md:gap-4 text-2xl sm:text-3xl xl:text-4xl">
            <Link
              href={liveLink}
              className="rounded-full bg-icon-radial p-3 hover:bg-red"
              target="_blank"
              aria-label="View Github Repo"
            >
              <HugeiconsExternalLink />
            </Link>
            {gitLink && (
              <Link
                href={gitLink}
                className="rounded-full bg-icon-radial p-3"
                target="_blank"
                aria-label="View Live Demo"
              >
                <HugeiconsGithub />
              </Link>
            )}
          </div>
        </div>
        <p className="text-base text-white/70">{about}</p>
        <div className="flex gap-3 md:gap-4 flex-wrap">
          {stack.map((tech, index) => (
            <SkillTag key={index}>{tech}</SkillTag>
          ))}
        </div>
      </div>
    </div>
  );
};
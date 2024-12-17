import Link from "next/link";
import { HugeiconsGithub } from "./icons/GithubIcon";

export const GithubLink = () => {
  return (
    <Link target="_blank" href="https://github.com/Lara-Capila">
      <HugeiconsGithub />
    </Link>
  );
};

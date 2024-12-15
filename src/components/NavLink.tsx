import Link from "next/link";
import { useActiveSectionContext } from "../context/ActiveSection";
import { NavLinkProps } from "../utils/types";

const NavLink = ({ href, title }: NavLinkProps) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <li>
      <Link
        className={`
					flex w-full text-center hover:text-white transition leading-none
					${activeSection === title && "text-white"}
				`}
        href={href}
        onClick={() => {
          setActiveSection(title);
          setTimeOfLastClick(Date.now());
        }}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;

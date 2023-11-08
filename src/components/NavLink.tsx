import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "../context/ActiveSection";
import { NavLinkProps } from "../utils/types";

const NavLink = ({ href, title }: NavLinkProps) => {
	const { activeSection, setActiveSection, setTimeOfLastClick } =
		useActiveSectionContext();

	return (
		<motion.li
			className="h-3/4 flex items-center justify-center relative px-3 py-3"
			key={title}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
		>
			<Link
				className={`
					flex w-full items-center justify-center hover:text-gray-950 transition
					${activeSection === title ? "text-black" : ""}
				`}
				href={href}
				onClick={() => {
					setActiveSection(title);
					setTimeOfLastClick(Date.now());
				}}
			>
				{title}

				{title === activeSection && (
					<motion.span
						className="bg-slate-200 rounded-full absolute inset-0 -z-10"
						layoutId="activeSection"
						transition={{
							type: "spring",
							stiffness: 380,
							damping: 30,
						}}
					></motion.span>
				)}
			</Link>
		</motion.li>
	);
};

export default NavLink;

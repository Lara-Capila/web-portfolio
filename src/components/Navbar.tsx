"use client";

import { navLinks } from "../utils/data";
import NavLink from "./NavLink";

const Navbar = () => {
	return (
		<nav
			className="
				flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 
				py-2 sm:top-[1.5rem] sm:py-0
			"
		>
			<ul
				className="
					flex flex-wrap items-center justify-center gap-y-1 
					text-[0.9rem] font-medium text-gray-500 
					w-[22rem] sm:w-[initial] sm:flex-nowrap sm:gap-5
				"
			>
				{navLinks.map((link) => (
					<NavLink key={link.title} title={link.title} href={link.href} />
				))}
			</ul>
		</nav>
	);
};

export default Navbar;

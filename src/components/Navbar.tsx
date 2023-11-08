"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { navLinks } from "../utils/data";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const Navbar = () => {
	const [navBarOpen, setNavBarOpen] = useState(false);

	return (
		<nav className="fixed mx-auto border-b border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
			<div className="flex flex-wrap items-center justify-center mx-auto px-4 py-6">
				<div className="mobile-menu block md:hidden">
					{!navBarOpen ? (
						<button
							onClick={() => setNavBarOpen(true)}
							className="
								flex items-center px-3 py-2
								border border-slate-200 text-slate-200
								rounded hover:text-white hover:border-white
						"
						>
							<Bars3Icon className="h-5 w-5" />
						</button>
					) : (
						<button
							onClick={() => setNavBarOpen(false)}
							className="
								flex items-center px-3 py-2
								border border-slate-200 text-slate-200
								rounded hover:text-white hover:border-white
						"
						>
							<XMarkIcon className="h-5 w-5" />
						</button>
					)}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map((navLink) => (
							<li key={navLink.title}>
								<NavLink href={navLink.href} title={navLink.title} />
							</li>
						))}
					</ul>
				</div>
			</div>

			{navBarOpen && <MenuOverlay navLinks={navLinks} />}
		</nav>
	);
};

export default Navbar;

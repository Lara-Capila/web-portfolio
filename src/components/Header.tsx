"use client";

import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Header = () => {
	return (
		<header className="z-[999] relative">
			<motion.div
				className="
					fixed top-0 left-1/2 h-[4.5rem] 
					w-full rounded-none border-opacity-40 
					bg-black bg-opacity-40 shadow-lg shadow-black/[0.03] 
					backdrop-blur-[0.5rem] sm:top-6 sm:h-[3rem] sm:w-[40rem] sm:rounded-full
				"
				initial={{ y: -100, x: "-50%", opacity: 0 }}
				animate={{ y: 0, x: "-50%", opacity: 1 }}
			></motion.div>

			<Navbar />
		</header>
	);
};

export default Header;

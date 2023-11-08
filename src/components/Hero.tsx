"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSectionInView } from "../hooks/useSectionInView";
import GradientText from "./GradientText";

const Hero = () => {
	const { ref } = useSectionInView("Home", 0.5);

	return (
		<section
			ref={ref}
			id="home"
			className="grid grid-cols-1 sm:grid-cols-12 pb-16 scroll-mt-[100rem]"
		>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
			>
				<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
						Olá, sou
					</span>
					<br />
					Lara Capila
				</h1>
				<p className="text-grayText text-base sm:text-lg lg-text-xl mb-6 max-w-3xl">
					Sou desenvolvedora
					<GradientText text="Front End" margin="ml-1" /> com
					<GradientText text="2 anos de experiência" margin="ml-1 mr-1" />
					com React (Next.js). Gosto de criar sites e aplicativos (React
					Native).
				</p>
				<div className="flex flex-wrap gap-2">
					<Link
						href="#contact"
						className="
							px-6 py-3 rounded-full
							mr-4 w-full sm:w-fit
							bg-gradient-to-br from-blue-500 via-primary-500
							to-secondary-500 hover:bg-slate-200
							text-white hover:scale-110
						"
					>
						Me contrate
					</Link>
					<a
						className="
							p-1 rounded-full
							w-full sm:w-fit
							bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500
							hover:bg-slate-800 text-white hover:scale-110 cursor-pointer
						"
						href="/Lara-Capila.pdf"
						download
					>
						<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
							Download CV
						</span>
					</a>
				</div>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, scale: 0 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="col-span-4 place-self-center mt-4 lg:mt-0"
			>
				<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] relative">
					<Image
						src="/images/me.png"
						alt="an animation image of me"
						className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
						width={350}
						height={350}
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;

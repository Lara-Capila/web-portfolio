"use client";

import Image from "next/image";
import Link from "next/link";
import { useSectionInView } from "../hooks/useSectionInView";
import SectionHeading from "./SectionHeader";

const Projects = () => {
	const { ref } = useSectionInView("Projetos");

	return (
		<section
			id="projects"
			ref={ref}
			className="text-white scroll-mt-10 py-8 text-center"
		>
			<SectionHeading>Projetos</SectionHeading>
			<div className="flex flex-col items-center justify-center gap-5">
				<Image
					src="/images/me-bg.jpg"
					width={200}
					height={200}
					alt="página em construção"
					className="border border-white shadow-md shadow-slate-500 rounded-3xl"
				/>
				<p className="text-2xl">Projetos em construção</p>
				<p className="text-base max-w-[50rem]">
					Estou trabalhando para construir bons projeto que realmente mostrem
					meu potencial, enquanto isso você pode dar uma olhada no meu
					<Link
						href="https://github.com/Lara-Capila"
						className="ml-1 underline font-semibold"
					>
						Github
					</Link>{" "}
					ou me chamar para uma conversa
				</p>
			</div>
		</section>
	);
};

export default Projects;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useSectionInView } from "../hooks/useSectionInView";
import GradientText from "./GradientText";

const About = () => {
	const { ref } = useSectionInView("Sobre");

	return (
		<section ref={ref} className="text-white scroll-mt-14 py-8" id="about">
			<div className="flex flex-col items-center justify-center">
				<h2 className="text-4xl font-bold text-white mb-16">Sobre mim</h2>
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src="/images/eu.jpeg"
							alt="working"
							width={200}
							height={200}
							quality="95"
							className="w-52 h-52 shadow-md shadow-slate-500 border border-white rounded-full object-cover"
						/>
					</motion.div>

					<motion.span
						className="absolute bottom-2 right-4 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						whileHover={{ scale: 1.3 }}
						transition={{
							type: "spring",
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<p className="text-base lg:text-lg mt-16 text-center max-w-[50rem]">
					Após uma mudança no início da pandemia, me
					<GradientText
						text="apaixonei pelo desenvolvimento Front-End"
						margin="mx-1"
					/>
					e decidi seguir essa carreira. Obtive minha formação na Trybe, onde me
					tornei uma desenvolvedora júnior em um ano{" "}
					<span className="italic">(intenso)</span> de estudos. Estou concluindo
					a graduação em{" "}
					<GradientText text="Análise e Desenvolvimento de Sistemas" />,
					previsto para o final de 2023.
					<br />
					<br />
					Com <GradientText text="2 anos de experiência" /> como
					<GradientText text="Desenvolvedora Front-End" margin="ml-1" />,
					trabalho com tecnologias como
					<GradientText text="React" margin="ml-1" />,
					<GradientText text="Typescript" margin="ml-1" />,
					<GradientText text="Next.js" margin="ml-1" />,
					<GradientText text="TailwindCSS" margin="ml-1" /> e
					<GradientText text="testes" margin="ml-1" />, além de estudar
					<span className="underline ml-1">React Native</span>. Estou sempre em
					busca de novas oportunidades na área de desenvolvimento e ansiosa para
					continuar crescendo profissionalmente.
				</p>
			</div>
		</section>
	);
};

export default About;

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useTransition } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { tabButtonsAboutSection, tabDataAboutSection } from "../utils/data";
import { Tabs } from "../utils/types";
import GradientText from "./GradientText";
import TabButton from "./TabButton";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.5 * index,
		},
	}),
};

const About = () => {
	const [activeTab, setActiveTab] = useState<Tabs>(Tabs.skills);
	const [, startTransiton] = useTransition();

	const { ref } = useSectionInView("Sobre");

	const handleTabChange = (id: string) => {
		startTransiton(() => setActiveTab(id as Tabs));
	};

	return (
		<section ref={ref} className="text-white scroll-mt-14" id="about">
			<div
				className="
          gap-8 items-center py-8
          md:grid md:grid-cols-2 
          xl:gap-16 sm:py-16
        "
			>
				<Image
					src="/images/me-unzoomed.jpg"
					alt="working"
					width={400}
					height={400}
					className="scale-x-[-1] rounded-3xl shadow-md shadow-slate-500"
				/>
				<div>
					<h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
					<p className="text-base lg:text-lg text-left">
						Sou desenvolvedora <GradientText text="Front End" margin="mr-1" />
						apaixonda por criar aplicações web interativas e responsivas. Tenho
						experiência com
						<GradientText
							text="HTML, CSS, React, Next, Tailwind e Git"
							margin="ml-1"
						/>
						. Aprendo rápido e estou sempre em busca de me
						<GradientText text="manter atualizada" margin="ml-1" />. Gosto de
						<GradientText text="trabalhar em equipe" margin="ml-1" />,
						compartilhar conhecimento e novos desafios.
					</p>
					<div className="flex flex-row mt-8">
						{tabButtonsAboutSection.map((tabButton) => (
							<TabButton
								key={tabButton.id}
								selectTab={() => handleTabChange(tabButton.id)}
								active={activeTab === tabButton.id}
							>
								{tabButton.label}
							</TabButton>
						))}
					</div>
					<ul className="mt-8 flex flex-wrap justify-center items-center gap-4">
						{tabDataAboutSection
							.find((t) => t.id === activeTab)
							?.content.map((dataContent, index) => (
								<motion.li
									variants={fadeInAnimationVariants}
									initial="initial"
									animate="animate"
									custom={index}
									viewport={{
										once: true,
									}}
									key={index}
									className="px-3 py-2 border border-white rounded-full"
								>
									{dataContent}
								</motion.li>
							))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default About;

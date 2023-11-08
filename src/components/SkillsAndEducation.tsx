"use client";

import { motion } from "framer-motion";
import { useState, useTransition } from "react";
import { useSectionInView } from "../hooks/useSectionInView";
import { tabButtonsAboutSection, tabDataAboutSection } from "../utils/data";
import { Tabs } from "../utils/types";
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

const SkillsAndEducation = () => {
	const [activeTab, setActiveTab] = useState<Tabs>(Tabs.skills);
	const [, startTransiton] = useTransition();
	const { ref } = useSectionInView("Habilidades e Formação");

	const handleTabChange = (id: string) => {
		startTransiton(() => setActiveTab(id as Tabs));
	};

	return (
		<section
			ref={ref}
			id="skillsAndEducation"
			className="scroll-mt-8 py-20 text-center flex flex-row justify-center"
		>
			<div className="max-w-xl">
				<h2 className="text-4xl font-bold text-white mb-16">
					Habilidades e Formação
				</h2>
				<div className="mt-8">
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
		</section>
	);
};

export default SkillsAndEducation;

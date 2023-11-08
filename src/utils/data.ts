import { NavLinkProps, TabButtons, TabData, Tabs } from "./types";

export const navLinks: NavLinkProps[] = [
	{
		title: "Home",
		href: "#home",
	},
	{
		title: "Sobre",
		href: "#about",
	},
	{
		title: "Projetos",
		href: "#projects",
	},
	{
		title: "Contato",
		href: "#contact",
	},
];

export const tabButtonsAboutSection: TabButtons[] = [
	{
		label: "Skills",
		id: Tabs.skills,
	},
	{
		label: "Formação",
		id: Tabs.education,
	},
	{
		label: "Certificados",
		id: Tabs.certifications,
	},
];

export const tabDataAboutSection: TabData[] = [
	{
		id: Tabs.skills,
		content: [
			"Javascript",
			"HTML",
			"CSS",
			"React",
			"Next",
			"Typescript",
			"TailwindCSS",
			"GraphQL",
			"Redux",
		],
	},
	{
		id: Tabs.education,
		content: [
			"Desenvolvimento de Software - Trybe",
			"Análise e Desenvolvimento de Sistemas - Estácio",
		],
	},
	{
		id: Tabs.certifications,
		content: ["Desenvolvimento Web - Trybe"],
	},
];

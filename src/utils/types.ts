import { navLinks } from "./data";

export type SectionName = (typeof navLinks)[number]["title"];

export interface NavLinkProps {
	href: string;
	title: string;
}

export enum Tabs {
	"skills" = "skills",
	"education" = "education",
	"certifications" = "certifications",
}

export interface TabData {
	id: Tabs;
	content: string[];
}

export interface TabButtons extends Omit<TabData, "content"> {
	label: string;
}

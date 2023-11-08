import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import Projects from "@components/Projects";
import SkillsAndEducation from "@components/SkillsAndEducation";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<div className="container mx-auto px-12 py-4">
				<Hero />
				<About />
				<SkillsAndEducation />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}

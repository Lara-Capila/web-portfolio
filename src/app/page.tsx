import About from "@components/About";
import Contact from "@components/Contact";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			{/* <Navbar /> */}
			<div className="container mt-24 mx-auto px-12 py-4">
				<Hero />
				<About />
				<Contact />
			</div>
			<Footer />
		</main>
	);
}

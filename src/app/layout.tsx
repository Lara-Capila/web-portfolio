import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ActiveSectionContextProvider from "../context/ActiveSection";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lara Capila | Portfolio",
	description: "Lara Capila, desenvolvedora Front End",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="pt-br" className="!scroll-smooth">
			<body className={inter.className}>
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}

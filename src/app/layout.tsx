import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import Footer from "../components/Footer";
import ActiveSectionContextProvider from "../context/ActiveSection";

import Header from "@components/header/Header";
import "./globals.css";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

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
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ActiveSectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

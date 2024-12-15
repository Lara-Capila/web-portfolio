"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../utils/data";
import { GithubLink } from "./GithubLink";
import { LinkedinLink } from "./LinkedinLink";
import { MenuIconButton } from "./MenuIconButton";
import MobileNavbar from "./MobileNavbar";
import NavLink from "./NavLink";
import { WhatsAppLink } from "./WhatsAppLink";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed max-w-[90%] xl:max-w-[1223px] w-full z-10 select-none"
      >
        <nav className="flex justify-evenly items-center px-6 py-4 rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] mt-4 sm:mt-8 std-backdrop-blur">
          <MenuIconButton
            open={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          />

          <ul className="hidden sm:flex gap-8 lg:gap-12 text-white/25">
            {navLinks.map((link) => (
              <NavLink key={link.title} title={link.title} href={link.href} />
            ))}
          </ul>

          <div className="gap-5 text-xl hidden sm:flex">
            <LinkedinLink />
            <GithubLink />
            <WhatsAppLink />
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {menuOpen && <MobileNavbar onMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

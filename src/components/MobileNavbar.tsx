import React, { SetStateAction } from "react";

import { motion } from "framer-motion";
import { useActiveSectionContext } from "../context/ActiveSection";
import { navLinks } from "../utils/data";
import NavLink from "./NavLink";

const MobileNavbar = ({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { activeSection } = useActiveSectionContext();

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid  z-10 items-center grid-cols-1 sm:hidden px-6 py-5 fixed top-12 rounded-2xl bg-gradient-to-r from-[#d9d9d91f]  max-w-[90%] w-full to-[#7373731f] mt-12 sm:mt-16 std-backdrop-blur"
    >
      <ul
        className="flex flex-col gap-4 lg:gap-12 text-white/25"
        onClick={() => onMenuOpen(false)}
      >
        {navLinks.map((link) => (
          <NavLink key={link.title} title={link.title} href={link.href} />
        ))}
      </ul>
    </motion.header>
  );
};

export default MobileNavbar;

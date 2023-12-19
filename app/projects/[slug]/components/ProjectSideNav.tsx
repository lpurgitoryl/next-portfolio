"use client";
// inspired by https://www.hover.dev/components/navigation

import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  HomeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  isSelected: boolean;
  onClick: () => void;
}

const NavItem = ({ children, href, isSelected, onClick }: NavItemProps) => {
  return (
    <div className="w-14 h-8 flex items-center justify-center my-4">
      <Link href={href}>
        <motion.button
          className="p-3 text-xl bg-slate-300 dark:bg-slate-900 rounded-md relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          <span className="block relative z-10">{children}</span>
          <AnimatePresence>
            {isSelected && (
              <motion.span
                key="highlight"
                className="absolute inset-0 rounded-md bg-accent-500 z-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              ></motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </Link>
    </div>
  );
};

interface SideNavProps {
  prev: string;
  next: string;
}

const ProjectSideNav = ({ prev, next }: SideNavProps) => {
  const [selected, setSelected] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, transition: { duration: 0.2 } });
  }, [controls]);

  const handleNavItemClick = (index: number) => {
    setSelected(index);
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={controls}
      className="fixed h-screen w-14 grid items-center content-center z-20"
    >
      <NavItem
        href="/"
        isSelected={selected === 0}
        onClick={() => handleNavItemClick(0)}
      >
        <HomeIcon color="white" />
      </NavItem>
      {prev === "" ? (
        ""
      ) : (
        <NavItem
          href={prev}
          isSelected={selected === 1}
          onClick={() => handleNavItemClick(1)}
        >
          <ChevronLeftIcon color="white" />
        </NavItem>
      )}

      <NavItem
        href={next}
        isSelected={selected === 2}
        onClick={() => handleNavItemClick(2)}
      >
        <ChevronRightIcon color="white" />
      </NavItem>
    </motion.nav>
  );
};

export default ProjectSideNav;

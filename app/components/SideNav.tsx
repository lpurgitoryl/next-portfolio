"use client";
// inspired by https://www.hover.dev/components/navigation

import { useState, useEffect } from "react";
import {
  motion,
  useAnimation,
  AnimatePresence,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import {
  HomeIcon,
  FileIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  PersonIcon,
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
          className="p-3 text-xl bg-slate-300 dark:bg-slate-900 rounded-md transition-colors relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
        >
          <span className="block relative z-10">{children}</span>
          <AnimatePresence>
            {isSelected && (
              <motion.span
                key="highlight"
                className="absolute inset-0 rounded-md bg-blue-500 z-0"
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

const SideNav = () => {
  const [selected, setSelected] = useState(0);
  const controls = useAnimation();
  const { scrollY } = useScroll();

  const sectionRefs = ["#hero", "#about", "#projects", "#resume", "#contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();

      const newSelected = sectionRefs.findIndex((ref) => {
        const section = document.querySelector(ref) as HTMLElement;
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.clientHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (newSelected !== -1) {
        setSelected(newSelected);
      }
    };

    controls.start({ opacity: 1, transition: { duration: 0.2 } });
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [controls, scrollY, sectionRefs]);

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
        href="#hero"
        isSelected={selected === 0}
        onClick={() => handleNavItemClick(0)}
      >
        <HomeIcon color="white" />
      </NavItem>
      <NavItem
        href="#about"
        isSelected={selected === 1}
        onClick={() => handleNavItemClick(1)}
      >
        <PersonIcon color="white" />
      </NavItem>
      <NavItem
        href="#projects"
        isSelected={selected === 2}
        onClick={() => handleNavItemClick(2)}
      >
        <CodeIcon color="white" />
      </NavItem>
      {/* <NavItem
        href="#resume"
        isSelected={selected === 3}
        onClick={() => handleNavItemClick(3)}
      >
        <FileIcon color="white" />
      </NavItem> */}
      <NavItem
        href="#contact"
        isSelected={selected === 4}
        onClick={() => handleNavItemClick(4)}
      >
        <EnvelopeClosedIcon color="white" />
      </NavItem>
    </motion.nav>
  );
};

export default SideNav;

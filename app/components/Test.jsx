"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  HomeIcon,
  FileIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

const IconSideNav = () => {
  return <SideNav />;
};

const SideNav = () => {
  const [selected, setSelected] = useState(0);

  return (
    // NOTE: In prod, you'd likely set height to h-screen and fix to the viewport
    <nav className="fixed h-screen w-14 grid  items-center content-center z-20">
      <NavItem selected={selected === 0} id={0} setSelected={setSelected}>
        <HomeIcon color="white" />
      </NavItem>
      <NavItem selected={selected === 1} id={1} setSelected={setSelected}>
        <HomeIcon color="white" />
      </NavItem>
      <NavItem selected={selected === 2} id={2} setSelected={setSelected}>
        <HomeIcon color="white" />
      </NavItem>
      <NavItem selected={selected === 3} id={3} setSelected={setSelected}>
        <HomeIcon color="white" />
      </NavItem>
      <NavItem selected={selected === 4} id={4} setSelected={setSelected}>
        <HomeIcon color="white" />
      </NavItem>
    </nav>
  );
};

const NavItem = ({ children, selected, id, setSelected }) => {
  return (
    <div className="w-14 h-8 flex items-center justify-center my-4">
      <motion.button
        className="p-3 text-xl bg-slate-800 hover:bg-slate-700 rounded-md transition-colors relative"
        onClick={() => setSelected(id)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="block relative z-10">{children}</span>
        <AnimatePresence>
          {selected && (
            <motion.span
              className="absolute inset-0 rounded-md bg-blue-500 z-0"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            ></motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default IconSideNav;

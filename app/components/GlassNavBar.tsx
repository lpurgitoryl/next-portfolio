"use client";

import Image from "next/image";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import favicon from "../favicon.ico";

if (typeof window !== "undefined") {
  // Perform localStorage action
  localStorage.setItem("Theme", "light");
}

function NavBar() {
  const [mode, setMode] = useState(false);

  function changeLocalMode() {
    setMode(!mode);

    if (!mode) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark");
      return;
    }

    localStorage.setItem("Theme", "light");
    document.body.classList.remove("dark");
  }

  return (
    <nav className="fixed top-0 flex w-full justify-end md:justify-between items-center px-4 md:px-28 py-2 z-40 dark:text-white md:backdrop-blur-3xl">
      {/* desktop/tablets nav */}
      <div className="hidden w-full rounded-full md:flex justify-around items-center py-1">
        <Link href="/" className="cursor-pointer">
          <Image
            src={favicon}
            width={32}
            height={32}
            alt="Picture of the author"
            className="rounded-full cursor-pointer"
          />
        </Link>
        <Link
          href="/#hero"
          className="cursor-pointer hover:text-accent-500 underline underline-offset-2"
        >
          Home
        </Link>
        <Link
          href="/#about"
          className="cursor-pointer hover:text-accent-500 underline underline-offset-2"
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="cursor-pointer hover:text-accent-500 underline underline-offset-2"
        >
          Projects
        </Link>
        <Link
          href="/#experience"
          className="cursor-pointer hover:text-accent-500 underline underline-offset-2"
        >
          Experience
        </Link>
        <Link
          href="/#contact"
          className="cursor-pointer hover:text-accent-500 underline underline-offset-2"
        >
          Contact
        </Link>
        <span></span>
        <span></span>
        <button
          onClick={changeLocalMode}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-accent-100/70"
        >
          {mode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
      {/* mobile nav, dark/light only */}
      <div className="md:hidden py-1">
        <button
          onClick={changeLocalMode}
          className="w-8 h-8 flex justify-center items-center rounded-lg bg-accent-100/70"
        >
          {mode ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  );
}

export default NavBar;

"use client";

import Image from "next/image";
import * as Toggle from "@radix-ui/react-toggle";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import favicon from "../favicon.ico";

if (typeof window !== "undefined") {
  // Perform localStorage action
  localStorage.setItem("Theme", "light");
}

function NavBar() {
  const [mode, setMode] = useState(false);

  function changeLocalMode(e: boolean) {
    setMode(e);

    if (e) {
      localStorage.setItem("Theme", "dark");
      document.body.classList.add("dark");
      return;
    }

    localStorage.setItem("Theme", "light");
    document.body.classList.remove("dark");
  }

  return (
    <nav className="bg-inherit bg-opacity-50 flex w-full justify-between items-center pr-10 pl-10 pt-6 pb-6 shadow-sm dark:shadow-white/20">
      <Image
        src={favicon}
        width={32}
        height={32}
        alt="Picture of the author"
        className="rounded-full"
      />
      <Toggle.Root
        className="Toggle w-8 h-8 flex justify-center items-center bg-slate-300 rounded-lg"
        aria-label="Toggle italic"
        defaultPressed={mode}
        onPressedChange={changeLocalMode}
      >
        {mode ? <SunIcon /> : <MoonIcon />}
      </Toggle.Root>
    </nav>
  );
}

export default NavBar;

"use client";

import Image from "next/image";
import * as Toggle from "@radix-ui/react-toggle";
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
    <nav className="absolute bg-inherit bg-opacity-50 flex mx-14 md:mx-28 my-10 dark:text-white border border-black z-40">
        asdfghjkl
      {/* <Link href="/" className="cursor-pointer">
        <Image
          src={favicon}
          width={32}
          height={32}
          alt="Picture of the author"
          className="rounded-full cursor-pointer"
        />
      </Link>
      <Toggle.Root
        className="Toggle w-8 h-8 flex justify-center items-center bg-slate-300 rounded-lg"
        aria-label="Toggle italic"
        defaultPressed={mode}
        onPressedChange={changeLocalMode}
      >
        {mode ? <SunIcon /> : <MoonIcon />}
      </Toggle.Root> */}
    </nav>
  );
}

export default NavBar;

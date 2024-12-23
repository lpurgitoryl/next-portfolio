"use client";

import { useState } from "react";
import Image from "next/image";

function Icon({ icon }: { icon: string }) {
  return (
    <span className="hover:scale-110 hover:shadow-lg px-4 py-4 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 hover:text-accent-500 rounded-xl">
      <Image
        src={
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
          icon +
          "/" +
          icon +
          "-original.svg"
        }
        height={20}
        width={20}
        alt={"Icon of " + icon}
      />
    </span>
  );
}

interface experienceInfo {
  postion: string;
  dates: string;
  description: string;
  toolbox: string[];
  location: string;
  website: string;
}

export default function Accordion(props: experienceInfo) {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div
        className="group shadow-lg px-4 py-4 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 hover:text-accent-500 rounded-xl w-full border hover:border-accent-500"
        onClick={toggle}
      >
        <span className="inline-flex w-full flex-col md:flex-row md:justify-between">
          {props.postion}
          <span className="font-extrabold inline-flex gap-2 justify-end">
            <span className="">{props.dates}</span>
            <span className="border rounded-full px-2 group-hover:border-accent-500">
              {isShowing ? "-" : "+"}
            </span>
          </span>
        </span>
      </div>
      <div
        className={`px-4 py-4 bg-accent-100/10 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 rounded-xl w-full border border-accent-500 overflow-hidden flex flex-col gap-8 ${
          isShowing ? "max-h-fit opacity-100 my-4" : "max-h-0 opacity-0"
        }`}
        style={{
          transition: "max-height 0.5s ease-in-out, opacity 1s ease-in-out",
        }}
      >
        <div className="inline-flex gap-8 font-bold">
          <span>📍 {props.location}</span>
          <span>🔗 {props.website}</span>
        </div>
        <div className="inline-flex w-full">{props.description}</div>
        <div className="flex items-center">
          {props.toolbox.map((el: string) => (
            <Icon icon={el} />
          ))}
        </div>
      </div>
    </>
  );
}

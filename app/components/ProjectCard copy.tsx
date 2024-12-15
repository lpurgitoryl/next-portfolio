"use client";

import dateFormat, { masks } from "dateformat";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Projects from "./Projects";
interface repoInfo {
  title: string;
  repo: string;
  demo: string;
  description: string;
  media: string;
}

function ProjectCard(props: repoInfo) {
  return (
    <div className="shadow-lg rounded-2xl border dark:shadow-white/50 px-8 py-8 hover:scale-[101%] hover:transition-all hover:border-accent-500">
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <p className="">{props.description}</p>
      <Link href={props.demo}>
        <Image src={props.media} alt="demo image" width={500} height={500} />
      </Link>
      <div className="w-full flex justify-around my-2">
        <Link
          href={props.demo}
          className="border-2 rounded-md py-1 px-1 mx-1 md:w-1/2 flex justify-center my-2 hover:border-accent-500"
        >
          View Demo
        </Link>
        <Link
          href={props.repo}
          className="border-2 rounded-md py-1 px-1 mx-1 md:w-1/2 flex justify-center my-2 hover:border-accent-500"
        >
          Github
        </Link>
      </div>
      <hr className="my-4" />
      <h2 className="">
        Tools:{" "}
        <div className="md:inline-flex md:flex-wrap">
          {/* {langs.map((lang) => (
            <span
              key={lang}
              className="bg-gray-200 text-sm font-bold dark:bg-gray-800 mx-2 my-2 rounded px-[5px]"
            >
              {lang}
            </span>
          ))} */}
        </div>
      </h2>
      <h3 className="text-gray-500">Updated on {}</h3>
    </div>
  );
}

export default ProjectCard;

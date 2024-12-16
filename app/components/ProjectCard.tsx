"use client";

import dateFormat, { masks } from "dateformat";
import Image from "next/image";
import Link from "next/link";
interface repoInfo {
  title: string;
  repo: string;
  demo: string;
  description: string;
  media: string;
  toolbox: string[];
  date: string;
}

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
      <h2 className="flex items-center">
        Tools:
        {props.toolbox.map((el: string) => (
          <Icon icon={el} />
        ))}
      </h2>
      <h3 className="text-gray-500">Updated on {props.date}</h3>
    </div>
  );
}

export default ProjectCard;

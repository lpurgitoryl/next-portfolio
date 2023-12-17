"use client";

import dateFormat, { masks } from "dateformat";
import { useState, useEffect } from "react";
import Link from "next/link";
interface repoInfo {
  repo_name: string;
  username: string;
}
// for each repo in repos from projects json
// repo specfic description
// language percentages
// updated @ date

// obvi this doesnt give the best run time if there was hellla languages used but i doubt sm1 is gonna like a gallizon diff langs in a proj
// so LGTM

function languagePercentage(langs: JSON): string[] {
  let total = 0;
  let name: string[] = [];
  let vals: number[] = [];
  let done = [];

  Object.entries(langs).forEach((entry) => {
    const [key, value] = entry;
    name.push(key);
    vals.push(value);
    total += value;
  });

  for (let i = 0; i < name.length; i++) {
    vals[i] = Math.round((vals[i] / total) * 100);
    done.push(name[i] + ": " + vals[i] + "%");
  }

  return done;
}

function ProjectCard(props: repoInfo) {
  const baseURL = "https://api.github.com/";
  const repoEndpoint = "repos/" + props.username;
  const [description, setDescription] = useState("");
  const [updated, setUpdated] = useState("");
  const [langs, setLangs] = useState<string[]>([]);

  async function getRepoInfo(repo: string) {
    let lastUpdated = "";
    let repoDescription = "";

    const langs = await fetch(baseURL + repoEndpoint + "/" + repo)
      .then((res) => res.json())
      .then((data) => {
        lastUpdated = dateFormat(data["updated_at"], "longDate");
        repoDescription = data["description"];
        return fetch(data["languages_url"]);
      })
      .then((res) => res.json())
      .then((data) => data);

    const langBreakdown = languagePercentage(langs);
    setLangs(langBreakdown);
    setUpdated(lastUpdated);
    setDescription(repoDescription);
  }
  // i might not need this useeffect
  useEffect(() => {
    getRepoInfo(props.repo_name);
  }, []);

  return (
    <div className="shadow-lg rounded-2xl border dark:shadow-white/50 px-8 py-8 hover:scale-[101%] hover:transition-all hover:border-accent-500">
      <h1 className="text-xl font-semibold">{props.repo_name}</h1>
      <p className="">{description}</p>
      <div className="w-full flex justify-center my-2">
        <Link
          href={`/projects/${props.repo_name}`}
          className="border-2 rounded-md py-1 w-1/2 flex justify-center my-2"
        >
          View Project
        </Link>
      </div>
      <hr className="my-4" />
      <h2 className="">
        Languages:{" "}
        <div className="md:inline-flex">
          {langs.map((lang) => (
            <span
              key={lang}
              className="bg-gray-200 text-sm font-bold dark:bg-gray-800 mx-2 rounded px-[5px]"
            >
              {lang}
            </span>
          ))}
        </div>
      </h2>
      <h3 className="text-gray-500">Updated on {updated}</h3>
    </div>
  );
}

export default ProjectCard;

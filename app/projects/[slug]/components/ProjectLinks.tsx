import Link from "next/link";
import user_info from "@/app/utils/user_info.json";

interface projectLinks {
  repo: String;
  demo: String | undefined;
}

function ProjectLinks({ repo, demo }: projectLinks) {
  const ghURL = "https://github.com/" + user_info.github_username + "/" + repo;
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
      <h1 className="my-12 text-6xl">See It In Action</h1>
      <div className="my-12 md:w-4/5 flex gap-8">
        {" "}
        <Link
          href={ghURL}
          target="_blank"
          className="flex flex-row justify-center items-center cursor-pointer bg-accent-500 py-4 px-6 rounded-md hover:translate-y-[-3px]"
        >
          <p className="text-xl text-white">Source Code</p>
        </Link>
        {demo === undefined ? (
          ""
        ) : (
          <Link
            href={String(demo)}
            target="_blank"
            className="flex flex-row justify-center items-center cursor-pointer border-2 border-accent-500 py-4 px-6 rounded-md hover:translate-y-[-3px]"
          >
            <p className="text-xl text-accent-500">Demo</p>
          </Link>
        )}
      </div>
    </section>
  );
}

export default ProjectLinks;

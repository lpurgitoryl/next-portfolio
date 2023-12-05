import user_info from "../utils/user_info.json";
import ProjectCard from "./ProjectCard";
import ToolBox from "./ToolBox";

function Projects() {
  return (
    <section className="flex justify-start items-start flex-col pl-14 md:pl-28 pr-14 pt-10 break-words dark:text-white">
      <h1 className="text-7xl md:text-9xl">Projects</h1>
      <p className="pt-12 text-xl md:w-4/5">
        Take a look at some of my favorite projects. These cover diffrent
        categories from IOT, embedded systems, computer vision and more.
      </p>

      <div className="grid md:grid-cols-2 items-center gap-20 my-12">
        {user_info.repos.map((repo) => (
          <ProjectCard
            key={repo.repo_name}
            repo_name={repo.repo_name}
            username={user_info.github_username}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

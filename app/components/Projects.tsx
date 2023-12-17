import user_info from "../utils/user_info.json";
import ProjectCard from "./ProjectCard";
import { compareDesc } from "date-fns";
import { Project, allProjects } from "contentlayer/generated";

// projects will be shown based on date

function Projects() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="projects"
    >
      <h1 className="text-7xl md:text-9xl">Projects</h1>
      <p className="my-12 text-xl md:w-4/5">{user_info.project_description}</p>

      <div className="grid md:grid-cols-2 items-center gap-20 my-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            repo_name={project.repo}
            username={user_info.github_username}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

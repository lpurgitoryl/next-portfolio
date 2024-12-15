import user_info from "../utils/user_info.json";
import ProjectCard from "./ProjectCard copy";
import { compareDesc } from "date-fns";

// projects will be shown based on date

function Projects() {
  const projects = [
    {
      title: "jinchuriki",
      repo: "",
      description:
        'I started wondering how much each coffee run is costing me in terms of gas, so I created the "CommuterCalc". It\'ll tell you how much it costs to get from destination A to B!',
      demo: "https://github.com/lpurgitoryl/jinchuriki",
      media: "/jinchuriki.png",
      toolbox: "",
    },
  ];

  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:mx-28 my-10 break-words dark:text-white"
      id="projects"
    >
      <h1 className="text-7xl md:text-9xl">Projects</h1>
      <p className="my-12 text-xl">{user_info.project_description}</p>

      <div className="grid md:grid-cols-2 items-center gap-20 my-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            repo={project.repo}
            description={project.description}
            demo={project.demo}
            media={project.media}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

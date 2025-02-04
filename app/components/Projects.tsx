import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Jinchuriki",
      repo: "https://github.com/lpurgitoryl/jinchuriki",
      description:
        "A (cool) project that lets you see every character in Naruto with their character info!",
      demo: "https://jinchuriki.vercel.app/",
      media: "/jinchuriki.png",
      toolbox: ["tailwindcss", "typescript", "nextjs"],
      date: "12/15/2024",
      isWip: false
    },
    {
      title: "Syncify",
      repo: "https://github.com/lpurgitoryl/Syncify",
      description:
        "A Spotify now playing visualizer built with Typescript and React!",
      demo: "https://syncify.vercel.app/",
      media: "/Syncify.png",
      toolbox: ["tailwindcss", "typescript", "react", "vitejs"],
      date: "1/20/2025",
      isWip: true
    },
  ];

  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:mx-28 my-10 break-words dark:text-white"
      id="projects"
    >
      <h1 className="text-7xl md:text-9xl">Projects</h1>
      <p className="my-12 text-xl">
        Take a look at some of my favorite projects. These cover different
        categories from IOT, embedded systems, computer vision and more.
      </p>

      <div className="grid md:grid-cols-2 items-center gap-20 my-12">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            repo={project.repo}
            description={project.description}
            demo={project.demo}
            media={project.media}
            toolbox={project.toolbox}
            date={project.date}
            isWip={project.isWip}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;

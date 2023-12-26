import NavBar from "@/app/components/NavBar";
import ProjectToolBox from "./components/ProjectToolBox";
import Footer from "@/app/components/Footer";
import ProjectSideNav from "./components/ProjectSideNav";
import { format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";

import ProjectLinks from "./components/ProjectLinks";

export const generateStaticParams = async () =>
  allProjects.map((project) => ({ slug: project.repo }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find((project) => project.repo === params.slug);
  if (!project) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: project.title };
};

const ProjectPost = ({ params }: { params: { slug: string } }) => {
  const project = allProjects.find((project) => project.repo === params.slug);
  if (!project) throw new Error(`Post not found for slug: ${params.slug}`);

  const idx = allProjects.indexOf(project);
  const allProjectsLength = allProjects.length;
  let prev = "";
  let next = "";
  if (allProjectsLength > 1) {
    prev = allProjects[idx - 1]
      ? allProjects[idx - 1].repo
      : allProjects[allProjectsLength - 1].repo;
    next = allProjects[idx + 1]
      ? allProjects[idx + 1].repo
      : allProjects[0].repo;
  }

  // allProjects.forEach((x, idx) => console.log(x.repo, idx));

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black">
        <ProjectSideNav prev={"/projects/" + prev} next={"/projects/" + next} />
        <NavBar />
        <article className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 dark:text-white">
          <h1 className="text-7xl md:text-9xl break-all">{project.title}</h1>
          <time
            dateTime={project.date}
            className="mx-2 my-4 text-xs text-gray-600"
          >
            {format(parseISO(project.date), "LLLL d, yyyy")}
          </time>
          <h1
            className="my-12 text-xl md:w-4/5 break-words"
            dangerouslySetInnerHTML={{ __html: project.body.html }}
          ></h1>
        </article>
        {project.toolbox && <ProjectToolBox toolbox={project.toolbox} />}
        <ProjectLinks repo={project.repo} demo={project.demo} />
        <Footer />
      </main>
    </>
  );
};

export default ProjectPost;

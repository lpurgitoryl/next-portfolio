import NavBar from "@/app/components/NavBar";

import { format, parseISO } from "date-fns";
import { allProjects } from "contentlayer/generated";

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

  return (
    <>
      <main className="min-h-screen bg-white dark:bg-black">
        <NavBar />
        <article className="flex justify-start items-start flex-col pl-14 md:pl-28 pr-14 pt-10 break-words dark:text-white">
          <h1 className="text-7xl md:text-9xl">{project.title}</h1>
          <time dateTime={project.date} className="mb-1 text-xs text-gray-600">
            {format(parseISO(project.date), "LLLL d, yyyy")}
          </time>
          <h1
            className="pt-12 text-xl md:w-4/5"
            dangerouslySetInnerHTML={{ __html: project.body.html }}
          ></h1>
          <p
            className="pt-12 text-xl md:w-4/5"
            dangerouslySetInnerHTML={{ __html: project.body.html }}
          ></p>
        </article>
      </main>
    </>
  );
};

export default ProjectPost;

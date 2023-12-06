import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToolBox from "./components/ToolBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <SideBar />
      <NavBar />
      <Hero />
      <About />
      <ToolBox />
      <Projects />
      <Footer />
    </main>
  );
}

import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import { Project, allProjects } from "contentlayer/generated";

// function PostCard(project: Project) {
//   return (
//     <div className="mb-8">
//       <h2 className="mb-1 text-xl">
//         <Link
//           href={project.url}
//           className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
//         >
//           {project.title}
//         </Link>
//       </h2>
//       <time
//         dateTime={project.date}
//         className="mb-2 block text-xs text-gray-600"
//       >
//         {format(parseISO(project.date), "LLLL d, yyyy")}
//       </time>
//       <div
//         className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
//         dangerouslySetInnerHTML={{ __html: project.body.html }}
//       />
//     </div>
//   );
// }

// export default function Home() {
//   const projects = allProjects.sort((a, b) =>
//     compareDesc(new Date(a.date), new Date(b.date))
//   );

//   return (
//     // <div className="mx-auto max-w-xl py-8">
//     //   <h1 className="mb-8 text-center text-2xl font-black">
//     //     Next.js + Contentlayer Example
//     //   </h1>
//     //   {projects.map((project, idx) => (
//     //     <PostCard key={idx} {...project} />
//     //   ))}
//     // </div>
//   );
// }

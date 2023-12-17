import Link from "next/link";

function ProjectLinks() {
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
      <h1 className="my-12 text-6xl">See It In Action</h1>
      <div className="my-12 md:w-4/5">
        {" "}
        <Link
          href="/GarciaNicoleResumeSoftware.pdf"
          target="_blank"
          className="flex flex-row justify-center items-center cursor-pointer bg-accent-500 py-4 px-6 rounded-md hover:translate-y-[-3px]"
        >
          <p className="text-xl text-white md:w-4/5">View Resume</p>
        </Link>
        <Link
          href="/GarciaNicoleResumeSoftware.pdf"
          target="_blank"
          className="flex flex-row justify-center items-center cursor-pointer bg-accent-500 py-4 px-6 rounded-md"
        >
          <p className="text-xl text-white md:w-4/5">View Resume</p>
        </Link>
      </div>
    </section>
  );
}

export default ProjectLinks;

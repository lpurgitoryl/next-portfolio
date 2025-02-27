import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

function Resume() {
  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="resume"
    >
      <h1 className="text-7xl md:text-9xl">Resume</h1>
      <p className="my-12 text-xl md:w-4/5">
        If youd like to know more about me feel free to click below and view my
        resume.
      </p>

      <Link
        href="/GarciaNicoleResumeSoftware.pdf"
        target="_blank"
        className="flex flex-row justify-center items-center cursor-pointer bg-accent-500 py-4 px-6 rounded-full"
      >
        <DownloadIcon height={32} width={32} color="white" />
        <p className="text-xl text-white md:w-4/5">View Resume</p>
      </Link>
      {/* <object
        data="/GarciaNicoleResumeSoftware.pdf"
        type="application/pdf"
        width="80%"
        height="600"
      ></object> */}
    </section>
  );
}

export default Resume;

import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";

function About() {
  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="about"
    >
      <h1 className="text-7xl md:text-9xl">About Me</h1>
      <p className="my-12 text-xl md:w-4/5">
        I recently graduated from the University of California, Riverside with a
        bachelor's in computer engineering. During my undergraduate education I
        spent a lot of my time researching and implementing new technologies as
        an Instructional Design Student Asssistant and a California Learning Lab
        Research Assistant. I like to think of myself of a maker and tinkerer.
        My projects cover diffrent aspects in tech that interest me. Check out
        my resume for more about me and scroll a bit more to see some of my
        work!
      </p>
      <Link
        href="#resume"
        className="scroll-smooth flex flex-row justify-center items-center cursor-pointer bg-blue-500 my-12 py-4 px-6 rounded-full"
      >
        <DownloadIcon height={32} width={32} color="white" />
        <p className="text-xl text-white md:w-4/5">View Resume</p>
      </Link>
    </section>
  );
}

export default About;

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
        My projects cover diffrent aspects in tech that interest me. Scroll a
        bit more to see some of my work!
      </p>
      {/* <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1EpzXUnXKUmOSB?utm_source=generator&theme=0"
        width="100%"
        height="152"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe> */}
    </section>
  );
}

export default About;

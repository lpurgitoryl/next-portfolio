import user_info from "../utils/user_info.json";

function About() {
  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white"
      id="about"
    >
      <h1 className="text-7xl md:text-9xl">About Me</h1>
      <p className="my-12 text-xl md:w-4/5">{user_info.about_description}</p>
    </section>
  );
}

export default About;

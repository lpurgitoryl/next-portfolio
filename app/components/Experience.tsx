import Accordion from "./Accordion";

function Experience() {
  const experience = [
    {
      postion: "MES Consultant (Software Engineer) @ Andea",
      location: "Brea, CA",
      website: "andea.com",
      dates: "January 2024 - Present",
      description:
        "accordion text accordion textaccordion textaccordion text accordiontextaccordion textaccordion text accordion textaccordion textaccordiontextaccordion textaccordion textaccordion textaccordion textaccordion",
      toolbox: ["javascript", "jquery", "microsoftsqlserver","html5","css3"],
    },
    {
      postion: "Software Development Engineer in Test @ Internet Brands",
      location: "El Segundo, CA",
      website: "internetbrands.com",
      dates: "June 2022 - July 2023",
      description:
        "End to end testing of IB's health vertical applcication including API's, and User Interface flows.",
      toolbox: ["selenium","postman","jenkins","python"],
    },
  ];

  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:mx-28 my-10 break-words dark:text-white"
      id="experience"
    >
      <h1 className="text-7xl md:text-9xl mb-12 text-wrap break-all">
        Experience
      </h1>
      {experience.map((experience, idx) => (
        <Accordion
          key={idx}
          postion={experience.postion}
          dates={experience.dates}
          description={experience.description}
          toolbox={experience.toolbox}
          location={experience.location}
          website={experience.website}
        />
      ))}

    </section>
  );
}

export default Experience;

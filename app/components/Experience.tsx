import Accordion from "./Accordion";

function Experience() {
  const experience = [
    {
      postion: "MES Consultant (Software Engineer) @ Andea",
      location: "Brea, CA",
      website: "andea.com",
      dates: "January 2024 - Present",
      description:
        "Configuring, implementing, and maintaining customer solutions using DELMIA Apriso manufacturing execution system for Andea's clients in the fields of production, logistics, and quality management.",
      toolbox: [
        "javascript",
        "csharp",
        "jquery",
        "microsoftsqlserver",
        "html5",
        "css3",
      ],
    },
    {
      postion: "Software Development Engineer in Test @ Internet Brands",
      location: "El Segundo, CA",
      website: "internetbrands.com",
      dates: "June 2022 - July 2023",
      description:
        "End to end testing of IB's health vertical applications including API's and User Interface flows.",
      toolbox: ["selenium", "postman", "jenkins", "python"],
    },
    {
      postion: "Student @ University of California, Riverside",
      location: "Riverside, CA",
      website: "ucr.edu",
      dates: "July 2018 - June 2023",
      description:
        "Completed my undergraduate education with a Bachelor of Science in Computer Engineering. Ontop of my studies, I was an Undergraduate Research/Media Developer Student Assistant for XCITE from April 2019 to June 2023.",
      toolbox: [
        "typescript",
        "nextjs",
        "python",
        "microsoftsqlserver",
        "cplusplus",
        "arduino",
        "raspberrypi",
        "git",
      ],
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

"use client";
import { useState } from "react";

function Experience() {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <section
      className="flex justify-start items-start flex-col mx-14 md:mx-28 my-10 break-words dark:text-white"
      id="experience"
    >
      <h1 className="text-7xl md:text-9xl mb-12 text-wrap break-all">
        Experience
      </h1>
      <div
        className="shadow-lg px-4 py-4 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 hover:text-accent-500 rounded-xl w-full border hover:border-accent-500"
        onClick={toggle}
      >
        <span className="inline-flex w-full flex-col md:flex-row md:justify-between">
          MES Consultant @ Andea
          <span className="font-extrabold inline-flex gap-2 justify-end">
            {/* mx-4 md:mx-8 */}
            <span className="">2024 - Present</span>+
          </span>
        </span>
      </div>
      <div
        className={`my-4 px-4 py-4 bg-accent-100/10 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 rounded-xl w-full border border-accent-500 transition-all overflow-hidden ${
          isShowing ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          transition: "max-height 0.3s ease, opacity 0.3s ease",
        }}
      >
        <span className="inline-flex w-full">
          accordion text accordion textaccordion textaccordion text accordion
          text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion text accordion textaccordion textaccordion text
          accordion text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion
          textaccordionaccordion text accordion textaccordion textaccordion text
          accordion text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion
          textaccordionaccordion text accordion textaccordion textaccordion text
          accordion text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion
          textaccordionaccordion text accordion textaccordion textaccordion text
          accordion text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
        </span>
      </div>
    </section>
  );
}

export default Experience;


"use client"

import { useState } from "react";

export default function Accordion() {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  return (
    <div>
      {/* <button
        style={{
          width: "100%",
          position: "relative",
          textAlign: "left",
          padding: "4px",
          border: "none",
          background: "transparent",
          outline: "none",
          cursor: "pointer",
        }}
        onClick={toggle}
        type="button"
      >
        <p>asd</p>
      </button>
      <div
        style={{ display: isShowing ? "block" : "none", padding: "5px" }}
        dangerouslySetInnerHTML={{
          __html: "content",
        }}
      /> */}
      {/*       <div className="shadow-lg px-4 py-4 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 hover:text-accent-500 rounded-xl w-full border hover:border-accent-500">
        
        <span className="inline-flex w-full flex-col md:flex-row md:justify-between">
          MES Consultant @ Andea
          <span className="font-extrabold inline-flex gap-2 justify-end">
           
            <span className="">2024 - Present</span>+
          </span>
        </span>
      </div>
      <div className="my-4 px-4 py-4 bg-accent-100/10 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 rounded-xl w-full border border-accent-500 transition-all">
       
        <span className="inline-flex w-full">
          accordion text accordion textaccordion textaccordion text accordion
          text accordion text accordion text accordion text accordion
          textaccordion textaccordion text accordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          textaccordion textaccordion textaccordion textaccordion textaccordion
          text
        </span>
      </div>
       */}
    </div>
  );
}

import Image from "next/image";

function Icon({ icon }: { icon: string }) {
  return (
    <span className="inline-flex flex-col items-center hover:scale-110 hover:shadow-lg px-4 py-4 dark:text-white dark:hover:shadow-white dark:hover:text-accent-500 hover:text-accent-500 rounded-xl">
      <Image
        src={
          icon === "tailwindcss"
            ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
              icon +
              "/" +
              icon +
              "-plain.svg"
            : "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/" +
              icon +
              "/" +
              icon +
              "-original.svg"
        }
        height={50}
        width={50}
        alt={"Icon of " + icon}
      />
      <p>{icon}</p>
    </span>
  );
}

export default Icon;

import Icon from "./Icon";

const tool_box = [
  "html5",
  "css3",
  "tailwindcss",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "python",
  "microsoftsqlserver",
  "selenium",
  "cplusplus",
  "csharp",
  "arduino",
  "raspberrypi",
  "git",
];

function ToolBox() {
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:mx-28 break-words dark:text-white">
      <h1 className="text-6xl">Tool Box</h1>
      <div className="my-12">
        {tool_box.map((x) => (
          <Icon key={x} icon={x} />
        ))}
      </div>
    </section>
  );
}

export default ToolBox;

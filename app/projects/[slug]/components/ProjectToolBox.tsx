import Icon from "@/app/components/Icon";

function ProjectToolBox({ toolbox }: { toolbox: string[] }) {
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
      <h1 className="my-12 text-6xl">Tool Box</h1>
      <div className="my-12 md:w-4/5">
        {toolbox.map((x) => (
          <Icon key={x} icon={x} />
        ))}
      </div>
    </section>
  );
}

export default ProjectToolBox;

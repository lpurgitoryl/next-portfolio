import Icon from "./Icon";
import user_info from "../utils/user_info.json";

function ToolBox() {
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
      <h1 className="my-12 text-6xl">Tool Box</h1>
      <div className="my-12 md:w-4/5">
        {user_info.tool_box.map((x) => (
          <Icon key={x} icon={x} />
        ))}
      </div>
    </section>
  );
}

export default ToolBox;

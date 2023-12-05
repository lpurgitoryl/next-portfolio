import Icon from "./Icon";
import user_info from "../utils/user_info.json";

function ToolBox() {
  return (
    <section className="flex justify-start items-start flex-col pl-14 md:pl-28 pr-14 pt-10 break-words dark:text-white">
      <h1 className="pt-12 text-6xl">Tool Box</h1>
      <div className="pt-12 md:w-4/5">
        {user_info.tool_box.map((x) => (
          <Icon key={x} icon={x} />
        ))}
      </div>
    </section>
  );
}

export default ToolBox;

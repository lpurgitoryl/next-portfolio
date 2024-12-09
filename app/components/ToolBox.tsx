import Icon from "./Icon";
import user_info from "../utils/user_info.json";

function ToolBox() {
  return (
    <section className="flex justify-start items-start flex-col mx-14 md:mx-28 break-words dark:text-white">
      <h1 className="text-6xl">Tool Box</h1>
      <div className="my-12">
        {user_info.tool_box.map((x) => (
          <Icon key={x} icon={x} />
        ))}
      </div>
    </section>
  );
}

export default ToolBox;

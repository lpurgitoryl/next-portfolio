import {
  HomeIcon,
  FileIcon,
  CodeIcon,
  EnvelopeClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";

function SideBar() {
  return (
    <section className="fixed h-screen w-14 grid  items-center content-center">
      <div className="w-14 h-8 flex items-center justify-center my-4">
        <div className="bg-blue-500 rounded-md h-full w-1/2 flex items-center justify-center">
          <HomeIcon color="white" />
        </div>
      </div>

      <div className="w-14 h-8 flex items-center justify-center my-4">
        <div className="bg-blue-500 rounded-md h-full w-1/2 flex items-center justify-center">
          <PersonIcon color="white" />
        </div>
      </div>

      <div className="w-14 h-8 flex items-center justify-center my-4">
        <div className="bg-blue-500 rounded-md h-full w-1/2 flex items-center justify-center">
          <CodeIcon color="white" />
        </div>
      </div>

      <div className="w-14 h-8 flex items-center justify-center my-4">
        <div className="bg-blue-500 rounded-md h-full w-1/2 flex items-center justify-center">
          <FileIcon color="white" />
        </div>
      </div>

      <div className="w-14 h-8 flex items-center justify-center my-4">
        <div className="bg-blue-500 rounded-md h-full w-1/2 flex items-center justify-center">
          <EnvelopeClosedIcon color="white" />
        </div>
      </div>
    </section>
  );
}

export default SideBar;

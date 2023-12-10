import ParticleRing from "./ParticleRing";
import user_info from "../utils/user_info.json";
import "../scroll.css";

function Hero() {
  return (
    <section className="h-screen">
      <ParticleRing />
      <div className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
        <h1 className="text-7xl md:text-9xl">Hey!</h1>
        <h1 className="text-7xl md:text-9xl">{user_info.name}</h1>
        <h1 className="mt-12 text-4xl md:text-4xl text-blue-500">
          {user_info.hero_description}
        </h1>
      </div>
      <div className="flex justify-end text-blue-500">
        {/* <button className="absolute text-xl md:text-2xl left-14 my-4 bg-blue-500 text-white rounded px-4 py-1">
            Resume
          </button> */}
        <div id="scroll-wrapper" />
        <div id="scroll-wrapper-inner">
          <div id="scroll-title">Scroll</div>
          <div id="scroll-down" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

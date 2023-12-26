import ParticleRing from "./ParticleRing";
import user_info from "../utils/user_info.json";
import "../scroll.css";

function Hero() {
  return (
    <section className="h-screen" id="hero">
      <ParticleRing />
      <div className="absolute z-30 w-full md:z-10">
        <div className="flex justify-start items-start flex-col mx-14 md:ml-28 my-10 break-words dark:text-white">
          <h1 className="text-7xl md:text-9xl">Hey!</h1>
          <h1 className="text-7xl md:text-9xl">{user_info.name}</h1>
          <h1 className="mt-12 text-4xl md:text-4xl text-accent-500">
            {user_info.hero_description}
          </h1>
        </div>
        <div className="flex justify-end text-accent-500">
          <div id="scroll-wrapper" />
          <div id="scroll-wrapper-inner">
            <div id="scroll-title">Scroll</div>
            <div id="scroll-down" className="before:bg-accent-500" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import ParticleRing from "./ParticleRing";
import user_info from "../utils/user_info.json";
import "../scroll.css";

function Hero() {
  return (
    <section className="h-screen" id="hero">
      <ParticleRing />
      <div className="w-full h-full flex items-center justify-center md:px-4 md:py-4">
        <div className="dark:text-white">
          <h1 className="text-7xl md:text-9xl">Hey!</h1>
          <h1 className="text-7xl md:text-9xl">{user_info.name}</h1>
          <h1 className="mt-12 text-4xl md:text-4xl text-accent-500">
            {user_info.hero_description}
          </h1>
        </div>
        <div className="text-accent-500 md:pl-28">
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

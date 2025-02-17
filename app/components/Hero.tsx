import ParticleRing from "./ParticleRing";
import "../scroll.css";

function Hero() {
  return (
    <section className="h-screen" id="hero">
      <ParticleRing />
      <div className="z-30 w-full h-full flex items-center justify-center">
        <div className="dark:text-white px-8 md:ml-20">
          <h1 className="text-7xl md:text-9xl">Hey!</h1>
          <h1 className="text-7xl md:text-9xl">I&apos;m Nicole Garcia</h1>
          <h1 className="mt-12 text-4xl text-accent-500">
            Enthusiast of all things IoT and the web
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

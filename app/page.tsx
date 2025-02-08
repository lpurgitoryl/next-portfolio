import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToolBox from "./components/ToolBox";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GlassNavBar from "./components/GlassNavBar"
export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      <GlassNavBar />
      <Hero />
      <About />
      <ToolBox />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

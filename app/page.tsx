import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToolBox from "./components/ToolBox";
import SideNav from "./components/SideNav";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import GlassNavBar from "./components/GlassNavBar"
export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      {/* <SideNav />
      <NavBar /> */}
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

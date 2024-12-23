import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToolBox from "./components/ToolBox";
import SideNav from "./components/SideNav";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Accordion from "./components/Accordion";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black">
      {/* <SideNav />
      <NavBar /> */}
      <Hero />
      <About />
      <ToolBox />
      <Projects />
      {/* <Resume /> */}
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

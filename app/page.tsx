import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ToolBox from "./components/ToolBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <SideBar />
      <NavBar />
      <Hero />
      <About />
      <ToolBox />
      <Projects />
      <Footer />
    </main>
  );
}

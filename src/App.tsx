import { Nav } from "./components/ui/Nav";
import { Hero } from "./components/sections/Hero";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";

function App() {
  return (
    <div className="relative w-full">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <About />
      </main>
    </div>
  );
}

export default App;

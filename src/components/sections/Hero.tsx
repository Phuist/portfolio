import { motion } from "framer-motion";
import { InfiniteGrid } from "../ui/InfiniteGrid";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden"
    >
      <InfiniteGrid />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-8xl font-extrabold tracking-tighter mb-6 text-zinc-900">
          Thanh Phu
        </h1>
        <p className="text-xl md:text-2xl text-zinc-600 mb-10 font-medium">
          “What we think, we become.”
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-8 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-zinc-800 text-white rounded-xl font-medium hover:bg-zinc-800 transition-colors w-full sm:w-auto"
          >
            My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#23232333] text-zinc-900 border border-zinc-200 rounded-xl font-medium hover:bg-[#23232344] transition-colors w-full sm:w-auto"
          >
            Contact me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

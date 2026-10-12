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
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter mb-3 md:mb-4 text-zinc-900">
          Thanh Phu
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 mb-6 md:mb-7 font-medium">
          “What we think, we become.”
        </p>
        <div className="flex flex-row items-center gap-3 sm:gap-4 justify-center">
          <a
            href="#projects"
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-zinc-800 text-white rounded-md font-medium hover:bg-zinc-700 transition-colors whitespace-nowrap text-sm sm:text-base"
          >
            My Projects
          </a>
          <a
            href="#about"
            className="px-4 py-2.5 sm:px-6 sm:py-3 bg-[#23232333] text-zinc-900 border border-zinc-200 rounded-md font-medium hover:bg-[#23232344] transition-colors whitespace-nowrap text-sm sm:text-base"
          >
            Contact me
          </a>
        </div>
      </motion.div>
    </section>
  );
}

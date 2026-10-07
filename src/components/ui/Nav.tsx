import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "About Me", href: "#about" },
];

export function Nav({ className }: { className?: string }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-50",
        "bg-white/80 backdrop-blur-md border border-zinc-200 shadow-md",
        "w-[90vw] max-w-2xl px-10 py-4 rounded-2xl",
        className,
      )}
    >
      <ul className="flex items-center justify-between text-base font-medium text-zinc-600">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="inline-block hover:scale-110 hover:text-black transition-all duration-300"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

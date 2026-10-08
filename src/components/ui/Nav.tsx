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
        "fixed top-3 left-1/2 -translate-x-1/2 z-50",
        "bg-white/80 backdrop-blur-md border border-back inset-shadow-indigo-500/50",
        "w-[95vw] max-w-4xl px-26 py-2 rounded-xl",
        className,
      )}
    >
      <ul className="flex items-center justify-between text-base font-[14px] text-zinc-600">
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

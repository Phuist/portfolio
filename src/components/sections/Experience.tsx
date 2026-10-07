import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 max-w-3xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-[48px] font-bold tracking-tight mb-12">
          Experience
        </h2>

        <div className="relative border-l border-zinc-200 ml-3 md:ml-0 space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative pl-8 md:pl-10"
            >
              {/* Dot Icon */}
              <div className="absolute w-3 h-3 bg-zinc-900 rounded-full -left-[6.5px] top-2" />

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                <h3 className="text-xl font-bold text-zinc-900">{exp.role}</h3>
                <span className="text-sm font-medium text-zinc-500 mt-1 md:mt-0">
                  {exp.duration}
                </span>
              </div>
              <p className="text-emerald-500 font-medium mb-4">{exp.company}</p>

              <ul className="space-y-2">
                {exp.description.map((desc, i) => (
                  <li
                    key={i}
                    className="flex gap-2 items-start text-zinc-600 leading-relaxed text-[16px]"
                  >
                    <span className="text-zinc-400 mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

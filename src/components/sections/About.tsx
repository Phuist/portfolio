import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { portfolioData } from "../../data/portfolio";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function About() {
  // Safe skill categorization fallback
  const isCategorized =
    typeof portfolioData.skills === "object" &&
    !Array.isArray(portfolioData.skills);
  const languages = isCategorized
    ? (portfolioData.skills as { languages: string[]; tools: string[] })
        .languages
    : ["TypeScript", "JavaScript", "Python", "SQL"];
  const tools = isCategorized
    ? (portfolioData.skills as { languages: string[]; tools: string[] }).tools
    : (portfolioData.skills as string[]);

  const paragraphs = portfolioData.aboutParagraphs || [portfolioData.about];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold tracking-tight text-zinc-900 leading-tight">
            About Me
          </h2>
          {/* Accent Underline Bar */}
          <div className="w-16 h-1 bg-teal-600 rounded-full mx-auto my-3" />
          <p className="text-zinc-500 text-[18px] max-w-2xl mx-auto font-normal">
            Below you'll find some more information about me as well as a
            highlight of some of my technical skills.
          </p>
        </div>

        {/* 2-Column Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: A Bit About Me & Contact */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900">
              A Bit About Me
            </h3>

            <div className="space-y-4 text-zinc-600 leading-relaxed text-[18px]">
              {paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>

            {/* Contact Me Section at Bottom of Left Column
            <div className="pt-6 flex items-center gap-4">
              <h4 className="text-3xl font-bold text-zinc-900 tracking-tight">
                Contact Me!
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={portfolioData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-black text-white rounded-xl hover:scale-110 transition-transform duration-200 shadow-sm"
                  title="GitHub"
                >
                  <GithubIcon size={20} />
                </a>
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="p-2.5 bg-black text-white rounded-xl hover:scale-110 transition-transform duration-200 shadow-sm"
                  title="Email"
                >
                  <Mail size={20} />
                </a>
                <a
                  href={portfolioData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 bg-black text-white rounded-xl hover:scale-110 transition-transform duration-200 shadow-sm"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={20} />
                </a>
              </div>
            </div> */}
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900 text-center">
              Skills
            </h3>

            {/* Languages Category */}
            <div>
              <span className="text-zinc-600 font-semibold text-[18px] underline underline-offset-4 text-center block mb-4">
                Languages:
              </span>
              <div className="flex flex-wrap justify-center gap-2.5">
                {languages.map((lang, index) => (
                  <motion.span
                    key={lang}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04, duration: 0.3 }}
                    className="px-4 py-2 bg-zinc-100 text-zinc-800 font-medium text-[16px] rounded-xl border border-zinc-200/80 shadow-xs hover:bg-zinc-200 transition-colors cursor-default"
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools Category */}
            <div className="pt-4">
              <span className="text-zinc-600 font-semibold text-[18px] underline underline-offset-4 text-center block mb-4">
                Tools:
              </span>
              <div className="flex flex-wrap justify-center gap-2.5 max-w-lg mx-auto">
                {tools.map((tool, index) => (
                  <motion.span
                    key={tool}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03, duration: 0.3 }}
                    className="px-4 py-2 bg-zinc-100 text-zinc-800 font-medium text-[16px] rounded-xl border border-zinc-200/80 shadow-xs hover:bg-zinc-200 transition-colors cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";

export function About() {
  // Safe skill categorization dynamic handling from portfolioData
  const isCategorized =
    typeof portfolioData.skills === "object" &&
    portfolioData.skills !== null &&
    !Array.isArray(portfolioData.skills);

  const languages = isCategorized
    ? (portfolioData.skills as { languages: string[]; tools: string[] })
        .languages || []
    : [];

  const tools = isCategorized
    ? (portfolioData.skills as { languages: string[]; tools: string[] })
        .tools || []
    : Array.isArray(portfolioData.skills)
      ? portfolioData.skills
      : [];

  const paragraphs =
    portfolioData.aboutParagraphs && portfolioData.aboutParagraphs.length > 0
      ? portfolioData.aboutParagraphs
      : portfolioData.about
        ? [portfolioData.about]
        : [];

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

            {/* Contact Me Section at Bottom of Left Column */}
            {(portfolioData.github ||
              portfolioData.email ||
              portfolioData.linkedin) && (
              <div className="pt-6 flex items-center gap-4">
                <h4 className="text-3xl font-bold text-zinc-900 tracking-tight">
                  Contact Me!
                </h4>
                <div className="flex items-center gap-3">
                  {portfolioData.github && (
                    <motion.a
                      href={portfolioData.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="p-3 bg-zinc-900 text-white rounded-2xl shadow-md hover:shadow-xl hover:bg-black transition-colors"
                      title="GitHub"
                    >
                      <GithubIcon size={24} />
                    </motion.a>
                  )}
                  {portfolioData.email && (
                    <motion.a
                      href={`mailto:${portfolioData.email}`}
                      whileHover={{ y: -6, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="p-3 bg-zinc-900 text-white rounded-2xl shadow-md hover:shadow-xl hover:bg-black transition-colors"
                      title="Email"
                    >
                      <Mail size={24} />
                    </motion.a>
                  )}
                  {portfolioData.linkedin && (
                    <motion.a
                      href={portfolioData.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -6, scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                      }}
                      className="p-3 bg-zinc-900 text-white rounded-2xl shadow-md hover:shadow-xl hover:bg-black transition-colors"
                      title="LinkedIn"
                    >
                      <LinkedinIcon size={24} />
                    </motion.a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Skills */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold tracking-tight text-zinc-900 text-center">
              Skills
            </h3>

            {/* Languages Category */}
            {languages.length > 0 && (
              <div>
                <span className="text-zinc-600 font-semibold text-[18px] underline underline-offset-4 text-center block mb-4">
                  Languages:
                </span>
                <div className="flex flex-wrap justify-center gap-4">
                  {languages.map((lang, index) => (
                    <motion.span
                      key={lang}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04, duration: 0.3 }}
                      className="px-2 py-1.5 bg-[#2225251A] text-zinc-800 font-medium text-[14px] rounded-lg border border-zinc-200/80 transition-colors"
                    >
                      {lang}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools Category */}
            {tools.length > 0 && (
              <div className="pt-4">
                {isCategorized && (
                  <span className="text-zinc-600 font-semibold text-[18px] underline underline-offset-4 text-center block mb-4">
                    Tools:
                  </span>
                )}
                <div className="flex flex-wrap justify-center gap-4 max-w-lg mx-auto">
                  {tools.map((tool, index) => (
                    <motion.span
                      key={tool}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03, duration: 0.3 }}
                      className="px-2 py-1.5 bg-[#2225251A] text-zinc-800 font-medium text-[14px] rounded-lg border border-zinc-200/80 transition-colors"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

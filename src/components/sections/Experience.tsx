import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Building2 } from "lucide-react";

function CompanyLogo({
  logo,
  company,
  companyUrl,
}: {
  logo?: string;
  company: string;
  companyUrl?: string;
}) {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setImgError(false);
  }, [logo]);

  const content = (
    <div className="w-10 h-10 md:w-11 md:h-11 bg-white border border-zinc-300 flex items-center justify-center overflow-hidden shrink-0 transition-transform duration-200 group-hover/logo:scale-105 group-hover/logo:border-black">
      {logo && !imgError ? (
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-full h-full object-contain p-1"
          onError={() => setImgError(true)}
        />
      ) : (
        <Building2 className="w-5 h-5 text-zinc-500" />
      )}
    </div>
  );

  if (companyUrl) {
    return (
      <a
        href={companyUrl}
        target="_blank"
        rel="noreferrer"
        title={`Visit ${company}`}
        className="group/logo inline-block cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        {content}
      </a>
    );
  }

  return content;
}

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-l-2 border-teal-600/90 pl-4 md:pl-6 relative"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-8">
          Experience
        </h2>

        <div className="space-y-4">
          {portfolioData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white hover:bg-[#e8e8e8] rounded-none p-5 md:px-4 md:py-2 transition-colors duration-300 border border-black flex items-center justify-between gap-4 cursor-pointer"
            >
              {/* Main Content: Company / Role & Duration */}
              <div>
                <h3 className="text-lg md:text-xl text-zinc-900 tracking-tight">
                  <span className="font-bold text-zinc-900">{exp.company}</span>
                  <span className="text-zinc-600 font-normal">
                    {" "}
                    / {exp.role}
                  </span>
                </h3>
                <p className="text-sm text-zinc-500 font-medium mt-1">
                  {exp.duration}
                </p>
              </div>

              {/* Right Side: Company Logo (Clickable Link) */}
              <div className="flex items-center">
                <CompanyLogo
                  logo={exp.logo}
                  company={exp.company}
                  companyUrl={exp.companyUrl}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

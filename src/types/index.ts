export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  languages: string[];
  tools: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  about: string;
  aboutParagraphs?: string[];
  email: string;
  github: string;
  linkedin: string;
  experience: Experience[];
  projects: Project[];
  skills: string[] | SkillCategory;
}

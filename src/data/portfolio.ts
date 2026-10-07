import type { PortfolioData } from "../types/";

export const portfolioData: PortfolioData = {
  // Infor
  name: "Thanh Phu",
  role: "Web Developer",
  // Skills & About
  about:
    "Driven by a relentless curiosity for how technology can create impact, I'm a full-stack developer who thrives on building and shipping. I move quickly from idea to deployment, taking full ownership, making decisions independently, and delivering features that work in the real world.",
  aboutParagraphs: [
    "Driven by a relentless curiosity for how technology can create impact, I'm a full-stack developer who thrives on building and shipping. I move quickly from idea to deployment, taking full ownership, making decisions independently, and delivering features that work in the real world.",
    "I'm a passionate Software Engineer with a strong foundation in Web Development, Data Structures & Algorithms, and System Design. Beyond building, I apply these skills to production-ready projects with a bias toward action and a focus on user experience.",
    "Outside of tech, I enjoy exploring new technologies, playing music, gaming with friends, and learning continuous improvements. These interests keep me balanced while exploring the fast-paced world of tech.",
  ],
  email: "tranlethanhphu.252005@gmail.com",
  github: "https://github.com/Phuist",
  linkedin: "https://linkedin.com/in/tran-le-thanh-phu/",

  // Skills divided into Languages and Tools
  skills: {
    languages: ["TypeScript", "JavaScript", "SQL"],
    tools: [
      "React",
      "Node.js",
      "Express.js",
      "Next.js",
      "NestJS",
      "Git",
      "Docker",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "GitHub Actions",
    ],
  },

  // Experience
  experience: [
    {
      id: "exp-1",
      role: "Backend Developer Intern",
      company: "Tech Company",
      duration: "Jan 2024 - Present",
      description: [
        "Developed and maintained responsive user interfaces using React and Tailwind CSS.",
        "Collaborated with designers to implement pixel-perfect minimalist designs.",
        "Optimized web performance and improved accessibility across the application.",
      ],
    },
    {
      id: "exp-2",
      role: "Freelance Web Developer",
      company: "Self-Employed",
      duration: "Jun 2023 - Dec 2023",
      description: [
        "Built landing pages and e-commerce platforms for various clients.",
        "Implemented animations and interactive elements using Framer Motion.",
        "Ensured SEO best practices and fast loading times for all projects.",
      ],
    },
  ],

  // Projects
  /*
   * HƯỚNG DẪN THAY ẢNH DỰ ÁN THẬT:
   *
   * Có 2 cách để bạn đưa ảnh thật của mình vào đây thay vì dùng ảnh giả lập (placehold.co):
   *
   * Cách 1 (Khuyên dùng - Đơn giản nhất):
   * - Tạo một thư mục tên là 'images' bên trong thư mục 'public' của dự án (tức là: public/images/).
   * - Copy các file ảnh thật của bạn vào đó (ví dụ: public/images/du-an-1.jpg).
   * - Đổi giá trị của trường 'image' bên dưới thành đường dẫn tính từ thư mục public:
   *   image: "/images/du-an-1.jpg",
   *
   * Cách 2 (Import từ src/assets):
   * - Bỏ ảnh của bạn vào thư mục 'src/assets/'.
   * - Import ảnh ở ngay đầu file này (dưới các dòng import khác), ví dụ:
   *   import anhDuAn1 from '../assets/du-an-1.png';
   * - Sửa trường 'image' thành biến bạn vừa import:
   *   image: anhDuAn1,
   */
  projects: [
    {
      id: "proj-1",
      title: "TodoX",
      description:
        "The app allows you to write down the tasks you need to do during the day.",
      image: "/images/proj1-todoX.jpg",
      techStack: ["React", "Tailwind CSS", "NodeJS", "MongoDB"],
      githubUrl: "https://github.com/Phuist/todoX",
      demoUrl: "https://todox-xfa8.onrender.com/",
    },
    {
      id: "proj-2",
      title: "Blog App",
      description:
        "A simple and elegant blog application for sharing thoughts and ideas.",
      image: "/images/proj2-blog-app.png",
      techStack: ["React", "NestJS", "TypeORM", "Postgress", "Tailwind CSS"],
      githubUrl: "https://github.com/Phuist/blog-app",
      demoUrl: "https://blog-app-frontend-woad.vercel.app/",
    },
  ],
};

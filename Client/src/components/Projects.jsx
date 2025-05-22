import { motion } from "framer-motion";
import "./Projects.css";
import "./Sections.css";
export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-grid">
        {MyProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="flip-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="flip-card-back">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const MyProjects = [
  {
    id: 1,
    image: "/localskillhub.jpg",
    title: "Local Skills Hub",
    description:
      "A collaborative group project: a Next.js app for local skill-sharing where users can join events, manage profiles, and connect with their community. Features Clerk authentication, PostgreSQL, MUI, Radix UI, and Framer Motion..",
    github: "https://github.com/Amishka-Sayyid/LocalSkillsHub",
    live: "https://week-12-assignment-weld.vercel.app/",
  },
  {
    id: 2,
    image: "/Social.jpg",
    title: "Social Network",
    description:
      "A social networking platform built with Next.js and React, featuring user authentication via Clerk, interactive UI components using MUI and Radix UI, and styled with Tailwind CSS.",
    github: "https://github.com/Amishka-Sayyid/SocialNetwork",
    live: "https://social-network-wk-9.vercel.app/",
  },
  {
    id: 3,
    image: "/movie.jpg",
    title: "Movie-Review-Blog",
    description:
      "Movie review blog with user interaction, styled with tailwind CSS.",
    github: "https://github.com/Amishka-Sayyid/Movie-Review-Blog",
    live: "https://movie-review-blog.vercel.app/",
  },
  {
    id: 4,
    image: "/novel.jpg",
    title: "NovelAttic",
    description:
      "A full-stack book review platform built with React, Express, and PostgreSQL. Features dynamic routing with React Router, user-generated content via forms, and a Supabase-managed database.",
    github: "https://github.com/Amishka-Sayyid/NovelAttic",
    live: "https://novelattic.onrender.com/",
  },
  {
    id: 5,
    image: "/photo.jpg",
    title: "PhotographyStudio",
    description:
      "A collaborative group project:A responsive photography portfolio website showcasing image galleries, services, and contact forms. Built with modern web technologies and styled for a clean, professional aesthetic.",
    github: "https://github.com/Amishka-Sayyid/PhotographyStudio",
    live: "https://photographystudio.onrender.com/",
  },
];

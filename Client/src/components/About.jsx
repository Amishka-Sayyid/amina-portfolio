import "./Sections.css";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiGithub,
} from "react-icons/si";

export default function About() {
  return (
    <>
      <section id="about">
        <h1>About Me</h1>
        <div>
          <p>
            Hi, i'm Amina a recent Tech educators graduate who's incredibly
            excited about software development and UX design with a background
            in applied computer technology, I'm well equipped with a technical
            skillset and an eagerness to experiment!
          </p>
          <p>
            Outside of career and academics, I enjoy reading novels and
            travelling!
          </p>
        </div>
        <h2>Front-End Tech Stack</h2>
        <div className="about-grid">
          <SiHtml5 title="HTML5" />
          <SiCss3 title="CSS3" />
          <SiJavascript title="JavaScript" />
          <SiReact title="React" />
          <SiNextdotjs title="Next.js" />
          <SiTailwindcss title="Tailwind CSS" />
        </div>

        <h2>Back-End Tech Stack</h2>
        <div className="about-grid">
          <SiExpress title="Express" />
          <SiNodedotjs title="Node.js" />
          <SiSupabase title="Supabase" />
          <SiPostgresql title="PostgreSQL" />
          <SiGithub title="GitHub" />
        </div>
      </section>
    </>
  );
}

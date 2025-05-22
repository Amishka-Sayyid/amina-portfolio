import "./Sections.css";
import Form from "./Form";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-grid">
        <div className="contact-info">
          <h1>Get In Touch</h1>
          <p>Email: amina7585@gmail.com</p>

          <div>
            <a
              href="https://github.com/Amishka-Sayyid"
              aria-label="GitHub profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <span> </span>
            <a
              href="https://www.linkedin.com/in/amina-ibrahim-78944623b/"
              aria-label="linkedin profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <Form />
        </div>
      </div>
    </section>
  );
}

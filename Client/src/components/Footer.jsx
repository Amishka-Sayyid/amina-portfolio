import "../App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <>
      <footer>
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
        <p> © 2025. All Rights Reserved.</p>
      </footer>
    </>
  );
}

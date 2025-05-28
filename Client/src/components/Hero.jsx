import "./Sections.css";
export default function Hero() {
  return (
    <>
      <section id="hero">
        <img src="/me.jpg" alt="image of amina" className="heroImg" />

        <div className="heroText">
          <h1>Hi, I'm Amina</h1>

          <p>
            A fullstack software developer, crafting responsive, modern web
            applications in a variety of coding languages.
          </p>
          <br />
          <a href="/cv/amina-cv.pdf" download className="button">
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}

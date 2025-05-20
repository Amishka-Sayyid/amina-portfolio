import "./Sections.css";
export default function Hero() {
  return (
    <>
      <section id="hero">
        <img src="/me.jpg" alt="image of amina" className="heroImg" />

        <div className="heroText">
          <h1>Hi, I'm Amina</h1>
          <h2>a Software Developer</h2>
          <p>
            a fullstack developer crafting responsive, modern web applications
            with React and Next.js.
          </p>
          <br />
          <a href="/cv/amina-ibrahim-cv.pdf" download className="button">
            Download CV
          </a>
        </div>
      </section>
    </>
  );
}

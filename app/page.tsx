const projects = [
  {
    number: "01",
    title: "Selected project",
    type: "Product design · 2026",
    description:
      "Replace this with a short, outcome-focused story: the problem you found, the decision you made, and the measurable difference your work created.",
    color: "coral",
    tags: ["Strategy", "Research", "Interface"],
  },
  {
    number: "02",
    title: "Another strong case study",
    type: "Development · 2025",
    description:
      "Use this space for work that shows a different strength. Keep it concrete—what you owned, how you approached it, and what shipped.",
    color: "blue",
    tags: ["Web", "Prototype", "Systems"],
  },
  {
    number: "03",
    title: "An experiment with impact",
    type: "Independent · 2025",
    description:
      "Side projects count. Share what made you curious, what you learned while building, and where you would take the idea next.",
    color: "lime",
    tags: ["Concept", "Build", "Learning"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Hojoon, home">
          HJ<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow"><span /> Portfolio · Seoul, South Korea</p>
        <h1>
          I turn <em>curiosity</em>
          <br />into useful things.
        </h1>
        <div className="hero-bottom">
          <p className="intro">
            I’m <strong>Hojoon</strong>, a multidisciplinary creator working at
            the intersection of thoughtful design and technology.
          </p>
          <a className="round-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work</p>
          <p className="section-note">A few things I’m proud of</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.color}`} key={project.number}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-body">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">A little about me</p>
        <div className="about-grid">
          <h2>Good work starts with<br /><em>good questions.</em></h2>
          <div className="about-copy">
            <p>
              I care about making complex ideas feel clear, human, and useful.
              My process moves between listening closely, shaping a point of
              view, and building until the details feel inevitable.
            </p>
            <p>
              Outside of work, add the things that make you memorable here—what
              you’re learning, collecting, reading, or exploring right now.
            </p>
            <div className="capabilities">
              <span>What I do</span>
              <ul>
                <li>Product &amp; visual design</li>
                <li>Front-end development</li>
                <li>Creative direction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> Have something in mind?</p>
        <h2>Let’s make something<br /><em>worth remembering.</em></h2>
        <a className="email" href="mailto:hello@example.com">
          hello@example.com <span>↗</span>
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Hojoon</p>
        <div>
          <a href="#" aria-label="LinkedIn profile">LinkedIn</a>
          <a href="#" aria-label="GitHub profile">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

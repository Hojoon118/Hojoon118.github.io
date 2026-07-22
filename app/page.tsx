const projects = [
  {
    number: "01",
    title: "LLM Mathematical Reasoning",
    type: "Machine learning · CSE 151B",
    description:
      "Built and evaluated a mathematical reasoning system with Python and Qwen3-4B-Thinking. Used prompt engineering, controlled experiments, evaluation, and ablation studies to improve accuracy from 40% to 67.1%.",
    color: "coral",
    tags: ["Python", "LLM evaluation", "Ablation studies"],
    href: "https://github.com/kevinlee1989/CSE151B_FINAL",
  },
  {
    number: "02",
    title: "POTL Travel Platform",
    type: "Startup team project",
    description:
      "Led key Flutter client features in a four-person team. Designed Firestore data structures, connected GeoPoint content to Google Maps, and built a like-based ranking system that turns user behavior into content discovery.",
    color: "blue",
    tags: ["Flutter", "Firebase", "Google Maps"],
    href: "https://github.com/geongupark/POTL",
  },
  {
    number: "03",
    title: "COVID-19 & Economic Data",
    type: "Data analysis",
    description:
      "Processed and merged public COVID-19 and economic datasets with Python and R. Cleaned the data and used exploratory statistical analysis to study relationships between wealth indicators and pandemic outcomes.",
    color: "lime",
    tags: ["Python", "R", "Statistical analysis"],
    href: "https://github.com/hojoon0118/covid",
  },
];

const experience = [
  {
    period: "Jun — Sep 2023",
    role: "Full-Stack Developer Track",
    company: "Korea Fintech Support Center · KOSCOM · Financial Services Commission",
    detail:
      "Built a fintech application prototype in a team hackathon. Contributed rule-based savings allocation and investment recommendation logic, supported data handling, and received an award at the final hackathon.",
  },
  {
    period: "Jun — Aug 2022",
    role: "Software Engineering Intern",
    company: "THE LIMESOFT · Client: NH NongHyup Bank",
    detail:
      "Supported maintenance of an enterprise supply management system through code review, issue identification, backend feature support, testing, and validation.",
  },
  {
    period: "May — Jul 2022",
    role: "Investment Analyst Intern",
    company: "Consus Asset Management",
    detail:
      "Analyzed and structured information from more than 40 venture companies, producing quantitative reports and data-backed insights for investment review.",
  },
  {
    period: "Jan 2024 — Jul 2025",
    role: "Ammunition Management Specialist",
    company: "Republic of Korea Army · Sergeant",
    detail:
      "Managed inventory tracking and verification in a safety-critical environment, following strict procedures to maintain accuracy, compliance, and operational reliability.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Hojoon Kim, home">HJ<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow"><span /> UC San Diego · Computer Science</p>
        <h1>
          I turn <em>curiosity</em>
          <br />into useful things.
        </h1>
        <div className="hero-bottom">
          <p className="intro">
            I’m <strong>Hojoon Kim</strong>, a computer science student building
            reliable software, data-driven products, and practical ML systems.
          </p>
          <a className="round-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading">
          <p className="kicker">Selected work</p>
          <p className="section-note">Experiments, products, and data</p>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <a className={`project ${project.color}`} href={project.href} target="_blank" rel="noreferrer" key={project.number}>
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
            </a>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="section-heading dark-heading">
          <p className="kicker">Experience</p>
          <p className="section-note">Software, finance, and high-reliability operations</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <p className="kicker">Profile</p>
        <div className="about-grid">
          <div>
            <h2>Strong systems start with<br /><em>clear thinking.</em></h2>
            <div className="education">
              <p><span>2023 — Present</span> University of California, San Diego<br /><strong>B.S. Computer Science</strong></p>
              <p><span>2021 — 2023</span> Diablo Valley College<br /><strong>Computer Science</strong></p>
            </div>
          </div>
          <div className="about-copy">
            <p>
              My work connects core computer science, machine learning, and product development. I enjoy turning unclear problems into structured experiments, dependable software, and measurable outcomes.
            </p>
            <p>
              I have worked across enterprise software, fintech, investment analysis, and safety-critical military operations—experiences that shaped how I collaborate, validate details, and take responsibility for results.
            </p>
            <div className="capabilities">
              <span>Technical toolkit</span>
              <ul>
                <li>Python · C/C++ · Java · SQL · R</li>
                <li>Algorithms · Data structures · OOP</li>
                <li>ML fundamentals · Statistical analysis</li>
                <li>Flutter · Firebase · Git</li>
              </ul>
            </div>
            <div className="leadership">
              <span>Leadership</span>
              <p>President, Korea Student Association</p>
              <p>Board Member, LikeLion US</p>
              <p>Project Leader, GLO at UC Berkeley</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow"><span /> Open to software engineering and ML opportunities</p>
        <h2>Let’s build something<br /><em>useful together.</em></h2>
        <a className="email" href="mailto:kimhojoon118@gmail.com">
          kimhojoon118@gmail.com <span>↗</span>
        </a>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Hojoon Kim</p>
        <div>
          <a href="https://www.linkedin.com/in/h-j-kim" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/hojoon0118" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

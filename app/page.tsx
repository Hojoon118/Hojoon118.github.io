/* eslint-disable @next/next/no-img-element -- static assets avoid vinext's incompatible image optimizer */
import RotatingRole from "./RotatingRole";

const experience = [
  {
    period: "Jun — Sep 2023",
    role: "Full-Stack Developer Track",
    company: "Korea Fintech Support Center · KOSCOM · Financial Services Commission",
    detail:
      "Built a fintech application prototype with a team, contributing savings-allocation and investment-recommendation logic, data handling, and product delivery. The project received an award at the final hackathon.",
  },
  {
    period: "Jun — Aug 2022",
    role: "Software Engineering Intern",
    company: "THE LIMESOFT · Client: NH NongHyup Bank",
    detail:
      "Supported an enterprise supply-management system through code review, issue analysis, backend feature support, testing, and validation.",
  },
  {
    period: "May — Jul 2022",
    role: "Investment Analyst Intern",
    company: "Consus Asset Management",
    detail:
      "Analyzed and structured information from 40+ venture companies, producing quantitative reports and data-backed insights for investment review.",
  },
  {
    period: "Jan 2024 — Jul 2025",
    role: "Ammunition Management Specialist · Sergeant",
    company: "Republic of Korea Army",
    detail:
      "Managed inventory tracking and verification in a safety-critical environment, following strict procedures for accuracy, compliance, and operational reliability.",
  },
];

const skills = [
  "Python",
  "C / C++",
  "Java",
  "JavaScript",
  "SQL",
  "R",
  "Algorithms",
  "Data Structures",
  "Machine Learning",
  "Statistical Analysis",
  "Flutter",
  "Firebase",
  "Git & GitHub Actions",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hojoon Kim, home">
          HOJOON KIM<span>.</span>
        </a>
        <nav className="header-links" aria-label="Primary navigation">
          <a href="https://github.com/Hjkim118" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/h-j-kim" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="mailto:kimhojoon118@gmail.com">Email ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="status"><span /> UC San Diego · B.S. Computer Science</p>
          <p className="hero-label">Hello, I’m</p>
          <h1>Hojoon<br />Kim</h1>
          <div className="role-line">
            <RotatingRole />
          </div>
          <p className="hero-intro">
            I build reliable software, interactive products, and applied AI systems.
            My experience spans enterprise engineering, fintech, data analysis, and
            high-reliability operations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View projects <span>↓</span></a>
            <a className="button button-secondary" href="#experience">Career & experience</a>
          </div>
        </div>

        <div className="portrait-stage" aria-label="Portrait of Hojoon Kim">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="portrait-frame">
            <img
              src="/hojoon-kim.jpg"
              alt="Hojoon Kim"
              width={425}
              height={543}
            />
          </div>
          <p className="portrait-note">Seoul ↔ San Diego</p>
        </div>
      </section>

      <div className="quick-nav" aria-label="Page sections">
        <a href="#projects">01 / Projects</a>
        <a href="#experience">02 / Experience</a>
        <a href="#profile">03 / Profile</a>
        <a href="#contact">04 / Contact</a>
      </div>

      <section className="section projects-section" id="projects">
        <div className="section-title">
          <div>
            <p className="section-index">01 · Selected work</p>
            <h2>Software + AI</h2>
          </div>
          <p>Projects with working code, measurable outcomes, and real team delivery.</p>
        </div>

        <article className="featured-project bunny-project">
          <div className="project-image">
            <img
              src="/bunny-backlog.png"
              alt="The Bunny's Backlog educational JavaScript game"
              width={1920}
              height={1080}
            />
          </div>
          <div className="project-content">
            <p className="project-number">01 / Flagship software project</p>
            <h3>The Bunny’s Backlog</h3>
            <p className="project-lead">
              A browser-based investigator game that teaches JavaScript through puzzles,
              built by a 10-person UCSD software engineering team.
            </p>
            <p>
              I contributed responsive stage selection, level-loading fixes, GitHub Pages
              routing, local testing documentation, cross-page sound effects, and visual assets.
              The project uses a modular, JSON-driven engine with automated CI/CD.
            </p>
            <div className="project-tags">
              <span>JavaScript</span><span>HTML / CSS</span><span>GitHub Actions</span><span>Team of 10</span>
            </div>
            <div className="project-links">
              <a href="https://cse110-sp26-group25.github.io/the-bunny-s-backlog/" target="_blank" rel="noreferrer">Live demo ↗</a>
              <a href="https://github.com/cse110-sp26-group25/the-bunny-s-backlog" target="_blank" rel="noreferrer">Source code ↗</a>
              <a href="https://youtu.be/COZkIDlWTW4" target="_blank" rel="noreferrer">Demo video ↗</a>
            </div>
          </div>
        </article>

        <article className="featured-project ai-project">
          <div className="ai-metric" aria-label="Accuracy improved from 40 percent to 67.1 percent">
            <p>Final accuracy</p>
            <strong>67.1<span>%</span></strong>
            <div className="metric-track"><span /></div>
            <div className="metric-labels"><span>Baseline 40%</span><span>+27.1 pts</span></div>
          </div>
          <div className="project-content">
            <p className="project-number">02 / Applied AI</p>
            <h3>LLM Mathematical Reasoning</h3>
            <p className="project-lead">
              Improved mathematical reasoning accuracy from a 40% baseline to 67.1%
              using controlled prompting and systematic evaluation.
            </p>
            <p>
              Built an inference pipeline around Qwen3-4B-Thinking on an A100 GPU,
              then used ablation studies to measure the effect of reasoning budgets,
              sampling parameters, and answer extraction.
            </p>
            <div className="project-tags">
              <span>Python</span><span>Qwen3</span><span>vLLM</span><span>Ablation Studies</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/kevinlee1989/CSE151B_FINAL" target="_blank" rel="noreferrer">Source code ↗</a>
            </div>
          </div>
        </article>

        <div className="project-grid">
          <article className="project-card potl-card">
            <div className="card-top">
              <p>03 / Mobile product</p>
              <span>Flutter · Firebase</span>
            </div>
            <div className="potl-logo"><img src="/potl.png" alt="POTL" width={332} height={119} /></div>
            <h3>POTL Travel Platform</h3>
            <p>
              Built client features for a team travel platform, including Firestore data
              structures, Google Maps integration, and like-based content ranking.
            </p>
            <a href="https://github.com/geongupark/POTL" target="_blank" rel="noreferrer">View repository ↗</a>
          </article>

          <article className="project-card practice-card">
            <div className="card-top">
              <p>04 / Engineering practice</p>
              <span>Web · CI/CD</span>
            </div>
            <div className="code-window" aria-hidden="true">
              <div><i /><i /><i /></div>
              <code><b>✓</b> tests passed<br /><b>✓</b> build complete<br /><b>✓</b> deploy ready</code>
            </div>
            <h3>Web Engineering Labs</h3>
            <p>
              Built progressive web app caching, production error monitoring, analytics,
              A/B testing, and GitHub Actions pipelines across UCSD CSE 110 labs.
            </p>
            <a href="https://github.com/Hjkim118?tab=repositories" target="_blank" rel="noreferrer">Browse repositories ↗</a>
          </article>

          <article className="project-card data-card">
            <div className="card-top">
              <p>05 / Data analysis</p>
              <span>Python · R</span>
            </div>
            <div className="mini-chart" aria-hidden="true">
              <span style={{ height: "28%" }} /><span style={{ height: "52%" }} />
              <span style={{ height: "41%" }} /><span style={{ height: "76%" }} />
              <span style={{ height: "61%" }} /><span style={{ height: "91%" }} />
            </div>
            <h3>COVID-19 & Economic Data</h3>
            <p>
              Cleaned and merged public-health and economic datasets, then used exploratory
              statistical analysis to study relationships between wealth and pandemic outcomes.
            </p>
            <a href="https://github.com/hojoon0118/covid" target="_blank" rel="noreferrer">View repository ↗</a>
          </article>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-title">
          <div>
            <p className="section-index">02 · Career</p>
            <h2>Experience</h2>
          </div>
          <p>Engineering discipline shaped across software, finance, and operations.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.period}`}>
              <p className="timeline-period">{item.period}</p>
              <div className="timeline-role">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <p className="timeline-detail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section profile-section" id="profile">
        <div className="section-title">
          <div>
            <p className="section-index">03 · Profile</p>
            <h2>Education & skills</h2>
          </div>
          <p>Computer science fundamentals with an applied, product-focused mindset.</p>
        </div>
        <div className="profile-grid">
          <div className="education-column">
            <article>
              <p>2023 — Present</p>
              <h3>University of California, San Diego</h3>
              <span>B.S. Computer Science</span>
            </article>
            <article>
              <p>2021 — 2023</p>
              <h3>Diablo Valley College</h3>
              <span>Computer Science</span>
            </article>
            <div className="leadership-block">
              <p className="small-label">Leadership</p>
              <ul>
                <li><span>President</span> Korea Student Association</li>
                <li><span>Board Member</span> LikeLion US</li>
                <li><span>Project Leader</span> GLO at UC Berkeley</li>
              </ul>
            </div>
          </div>
          <div className="skills-column">
            <p className="small-label">Technical toolkit</p>
            <div className="skill-list">
              {skills.map((skill) => <span key={skill}>{skill}</span>)}
            </div>
            <p className="profile-copy">
              I am interested in US software engineering and applied AI roles where
              careful implementation, experimentation, and collaborative delivery all matter.
            </p>
            <div className="account-links">
              <a href="https://github.com/Hjkim118" target="_blank" rel="noreferrer"><span>Primary GitHub</span> Hjkim118 ↗</a>
              <a href="https://github.com/hojoon0118" target="_blank" rel="noreferrer"><span>Data projects</span> hojoon0118 ↗</a>
              <a href="https://github.com/Hojoon118" target="_blank" rel="noreferrer"><span>Additional work</span> Hojoon118 ↗</a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div>
          <p className="section-index">04 · Contact</p>
          <h2>Let’s talk.</h2>
          <p className="contact-intro">Open to software engineering and applied AI opportunities in the United States.</p>
        </div>
        <div className="contact-list">
          <a href="mailto:kimhojoon118@gmail.com"><span>Email</span>kimhojoon118@gmail.com <b>↗</b></a>
          <a href="tel:+12135898769"><span>United States</span>🇺🇸 +1 (213) 589-8769 <b>↗</b></a>
          <a href="tel:+821021092278"><span>South Korea</span>🇰🇷 +82 10-2109-2278 <b>↗</b></a>
          <a href="https://www.linkedin.com/in/h-j-kim" target="_blank" rel="noreferrer"><span>LinkedIn</span>linkedin.com/in/h-j-kim <b>↗</b></a>
        </div>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Hojoon Kim</p>
        <p>Designed for software + AI opportunities.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

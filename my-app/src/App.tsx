import './App.css'

import './App.css'

const projects = [
  {
    title: 'Pupperazzi',
    type: 'Full Stack Web App',
    description:
      'A dog matching platform with profiles, social features, and a polished user experience built for real interaction.',
  },
  {
    title: 'Cats of the Cattibean',
    type: 'Unreal Engine Game',
    description:
      'A stylized adventure game with exploration, fishing, custom environments, and interactive gameplay systems.',
  },
  {
    title: 'Buffalo Crime Analyzer',
    type: 'Data Visualization Project',
    description:
      'An interactive project focused on exploring crime trends through filtering, analysis, and visual presentation.',
  },
]

const skills = [
  'Python',
  'Java',
  'C',
  'C++',
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'PHP',
  'MySQL',
  'Git',
  'GitHub',
  'Unreal Engine 5',
]

function App() {
  return (
    <div className="page">
      <nav className="navbar">
        <div className="nav-logo">Prince Klair</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-text">
          <p className="tag">Software Engineer • Full Stack Developer</p>
          <h1>Hi, I’m Prince. I build software that looks clean and works well.</h1>
          <p className="hero-description">
            I’m a Computer Science student at the University at Buffalo with experience in
            full stack development, systems programming, data focused projects, and game development.
            I like building projects that feel polished, practical, and real.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">View Projects</a>
            <a
              href="https://github.com/PrinceKlair619"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/prince-k1"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <h2>Quick Snapshot</h2>
          <p>CS student focused on building strong real world projects.</p>
          <ul>
            <li>Full stack web development</li>
            <li>Systems and networking work</li>
            <li>Game development in Unreal Engine 5</li>
            <li>Strong team leadership and project ownership</li>
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I enjoy building software that combines solid engineering with a smooth user experience.
          My work has included web apps, backend systems, data projects, and game features. I care about
          making things feel complete, not just functional.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p className="project-type">{project.type}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <p>
          I’m always looking to build more, learn more, and connect with people working on exciting things.
        </p>
        <div className="hero-buttons">
          <a href="mailto:Klairprince619@gmail.com" className="btn primary-btn">
            Email Me
          </a>
          <a
            href="https://github.com/PrinceKlair619"
            target="_blank"
            rel="noreferrer"
            className="btn secondary-btn"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}

export default App
import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";

const iconColors = ["#c9a227", "#4fb3a3", "#7fa8d8", "#c97f5f", "#8fbf7f", "#b08fd8"];

function initials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          Projects
        </Reveal>
        <div className="project-list">
          {projects.map((p, i) => (
            <Reveal as="div" className="project-row" key={p.name} delay={i * 70}>
              <div
                className="project-icon"
                style={{ background: iconColors[i % iconColors.length] }}
              >
                {initials(p.name)}
              </div>
              <div>
                <div className="project-top">
                  <span className="project-name">{p.name}</span>
                </div>
                <p className="project-kind">{p.kind}</p>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="tag-mini" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
                <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                  {p.linkLabel}
                </a>
              </div>
              <div className="project-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

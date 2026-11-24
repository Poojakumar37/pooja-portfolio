import { projects } from "../data.js";
import Reveal from "./Reveal.jsx";

const initials = (n) =>
  n.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function tilt(e) {
  const r = e.currentTarget.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  e.currentTarget.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
  e.currentTarget.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`);
}
function untilt(e) {
  e.currentTarget.style.setProperty("--ry", "0deg");
  e.currentTarget.style.setProperty("--rx", "0deg");
}

// Every image in src/assets/logos is bundled by Vite, so a wrong path fails loudly
// instead of silently. Files are matched to projects by name:
//   "Let's Kuku" -> letskuku, "KesariyaLogo.jpeg" -> kesariya (case, spaces, "logo" ignored)
const files = import.meta.glob("../assets/logos/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
});
const norm = (s) => s.toLowerCase().replace(/\.[a-z]+$/, "").replace(/logo/g, "").replace(/[^a-z0-9]/g, "");
const logoByKey = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [norm(path.split("/").pop()), url])
);

function Logo({ name }) {
  const src = logoByKey[norm(name)];
  if (!src) {
    console.warn(`No logo found for "${name}". Found:`, Object.keys(logoByKey));
    return <span className="card-initials">{initials(name)}</span>;
  }
  return (
    <span className="card-logo" style={{ "--logo": `url("${src}")` }}>
      <img src={src} alt={`${name} logo`} />
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal as="div" className="section-head">
          <h2>Selected projects</h2>
          <span className="rule" />
          <span className="count">{projects.length} things I've built</span>
        </Reveal>

        <div className="cards">
          {projects.map((p, i) => (
            <Reveal as="article" className="card" key={p.name} delay={(i % 3) * 90} onMouseMove={tilt} onMouseLeave={untilt}>
              <a href={p.link} target="_blank" rel="noreferrer" className="card-link">
                <div className="card-art">
                  <Logo name={p.name} />
                  <span className="card-badge">{p.linkLabel}</span>
                </div>
                <div className="card-body">
                  <h3>{p.name}</h3>
                  <p className="card-kind">{p.kind}</p>
                  <p className="card-desc">{p.description}</p>
                  <div className="card-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
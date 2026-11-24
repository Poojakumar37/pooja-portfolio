import useActiveSection from "../hooks/useActiveSection.js";

const links = [
  { id: "projects", label: "Projects" },
  { id: "work", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const ids = links.map((l) => l.id);

export default function Nav() {
  const active = useActiveSection(ids);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark">
          Pooja<span className="nav-sub">Full stack developer</span>
        </a>
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? "is-active" : ""}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="nav-status">
          <i /> Open to work
        </span>
      </div>
    </header>
  );
}

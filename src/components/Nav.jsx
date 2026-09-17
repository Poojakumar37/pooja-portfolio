import useActiveSection from "../hooks/useActiveSection.js";

const links = [
  { id: "work", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const active = useActiveSection(links.map((l) => l.id));

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="nav-mark font-bold">
          Pooja
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
      </div>
    </header>
  );
}

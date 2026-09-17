import { useEffect, useState } from "react";
import { profile } from "../data.js";

const lines = [
  <>
    <span className="k">const</span> developer = {"{"}
  </>,
  <>
    {"  "}name: <span className="s">"{profile.name}"</span>,
  </>,
  <>
    {"  "}role: <span className="s">"{profile.role}"</span>,
  </>,
  <>
    {"  "}stack: [<span className="s">"React"</span>, <span className="s">"Node.js"</span>,{" "}
    <span className="s">"React Native"</span>],
  </>,
  <>
    {"  "}location: <span className="s">"{profile.location}"</span>,
  </>,
  <>
    {"  "}
    <span className="p">shipsFeatures</span>: () {"=>"} <span className="k">true</span>,
  </>,
  <>{"}"};</>,
];

export default function Hero() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= lines.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 260 : 110);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div>
          <p className="kicker">Full stack developer / Bangalore</p>
          <h1>
            Builds mobile &amp; web
            <br />
            products that <em>ship</em>.
          </h1>
          <p className="lede">{profile.summary}</p>
          <div className="hero-tags">
            {profile.tags.map((t) => (
              <span className="pill" key={t}>
                {t}
              </span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View projects
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              Email me
            </a>
          </div>
        </div>

        <div className="code-panel" aria-hidden="true">
          <div className="code-head">
            <span className="code-dot" />
            <span className="code-dot" />
            <span className="code-dot" />
            <span style={{ marginLeft: 6 }}>developer.js</span>
          </div>
          <pre className="code-body">
            {lines.slice(0, count).map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            {count >= lines.length && (
              <div className="code-comment">
                <span className="c">// currently building at Moshi Moshi Media</span>
              </div>
            )}
            <span className={`cursor ${count >= lines.length ? "cursor-idle" : ""}`} />
          </pre>
        </div>
      </div>
    </section>
  );
}

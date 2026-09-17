import { education, languages } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          Education
        </Reveal>
        <div>
          {education.map((e, i) => (
            <Reveal as="div" className="edu-item" key={e.degree} delay={i * 80}>
              <div>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-school">{e.school}</p>
              </div>
              <div className="edu-meta">
                {e.period}
                <br />
                {e.detail}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="div" className="lang-row" delay={200}>
          {languages.map((l) => (
            <span className="pill" key={l}>
              {l}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

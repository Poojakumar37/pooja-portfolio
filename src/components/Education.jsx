import { education, skills, languages } from "../data.js";
import { process, quote } from "../extra.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="skills">
      <div className="wrap triple">
        <Reveal as="div" className="col">
          <h2>Education &amp; skills</h2>
          <h3 className="mini">Education</h3>
          {education.map((e) => (
            <div className="edu" key={e.degree}>
              <div>
                <p className="edu-degree">{e.degree}</p>
                <p className="edu-school">{e.school}</p>
              </div>
              <span className="edu-meta">
                {e.period}
                <br />
                {e.detail}
              </span>
            </div>
          ))}
          {skills.map((g) => (
            <div key={g.group}>
              <h3 className="mini">{g.group}</h3>
              <div className="chips">
                {g.items.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </div>
          ))}
          <h3 className="mini">Languages</h3>
          <div className="chips">
            {languages.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </div>
        </Reveal>

        <Reveal as="div" className="col" delay={100}>
          <h2>How I work</h2>
          <ol className="steps">
            {process.map((s, i) => (
              <li key={s.title} style={{ "--i": i }}>
                <span className="step-dot">{i + 1}</span>
                <div>
                  <p className="step-title">{s.title}</p>
                  <p className="step-text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="aside" className="quote" delay={200}>
          <span className="quote-mark">“</span>
          <p>{quote}</p>
          <span className="signature">Pooja</span>
        </Reveal>
      </div>
    </section>
  );
}

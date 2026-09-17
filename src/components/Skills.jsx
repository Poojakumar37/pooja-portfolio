import { skills } from "../data.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal as="h2" className="section-title">
          Skills &amp; tools
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal as="div" className="skill-group" key={group.group} delay={i * 90}>
              <h3>{group.group}</h3>
              <div className="skill-tags">
                {group.items.map((item) => (
                  <span className="skill-tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
